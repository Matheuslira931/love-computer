<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use App\Models\ImagemAnuncio;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManagerStatic as Image;
use PhpParser\Node\Stmt\TryCatch;

use function PHPUnit\Framework\isNull;

class AnuncioController extends Controller
{

    public function exibirAnuncios(Request $request){

        $anuncios = Anuncio::get();

        if($anuncios){
            foreach ($anuncios as $anuncio) {

                $imagem =  DB::table('imagem_anuncios')
                ->select('imagem')
                ->where('anuncio_id', '=', $anuncio->id)
                ->get()
                ->first();

                $saida[] = [
                    'anuncio' => $anuncio,
                    'imagem' => $imagem
                 ];
   
            }
            
           return $saida;

        }else{
            return response()->json(['errors' => 'Anúncio não encontrado'], 422);
        }

    }

    public function exibirAnuncio(Request $request, $anuncioId){

        $anuncio = Anuncio::find($anuncioId);

        if($anuncio){

          $usuario =  DB::table('users')
                      ->select('id', 'nome', 'telefone')
                      ->where('id', '=', $anuncio->usuario_id)
                      ->get()
                      ->first();

          $imagens_bd =  DB::table('imagem_anuncios')
                              ->select('imagem')
                              ->where('anuncio_id', '=', $anuncio->id)
                              ->get();

           $resposta = [
               'anuncio' => $anuncio,
               'imagens' => $imagens_bd,
               'usuario' => $usuario
            ];

           return $resposta;

        }else{
            return response()->json(['errors' => 'Anúncio não encontrado'], 422);
        }
    }

    public function criarAnuncio(Request $request){

        $rules = [
            'nome' => [
                'required'
            ],
            'tipo_anuncio' => [
                'required',
            ],
            'tipo_componente' => [
                'required',
            ],
            'modelo' => [
                'required',
            ],
            'urgencia' => [
                'required',
            ],
            'estado_componente' => [
                'required',
            ],
            'preco' => [
                'required',
            ],
            'forma_pagamento' => [
                'required',
            ],
            'data_criacao' => [
                'required',
            ],
            'usuario_id' => [
                'required',
            ]
        ];

        $messages = [
            'required' => "Este campo é de preenchimento obrigatório.",
        ];

        $validated = Validator::make($request->all(), $rules, $messages);

        if ($validated->fails()) {
            return response()->json(['errors' => $validated->errors()], 422);
        }

        $envia_todo_brasil = false;
        if($request->has('envia_todo_brasil')){
            $envia_todo_brasil = $request->envia_todo_brasil;
        }

        $anuncio = Anuncio::Create([
            'nome' => $request->nome,
            'tipo_anuncio' => $request->tipo_anuncio,
            'tipo_componente' => $request->tipo_componente,
            'modelo' => $request->modelo,
            'urgencia' => $request->urgencia,
            'estado_componente' => $request->estado_componente,
            'preco' => $request->preco,
            'forma_pagamento' => $request->forma_pagamento,
            'data_criacao' => $request->data_criacao,
            'usuario_id' => $request->usuario_id,
            'descricao' => $request->descricao,
            'envia_todo_brasil' => $envia_todo_brasil,
            'cidade' => $request->cidade,
            'estado' => $request->estado,
        ]);

        if($request->has('imagens')){
            foreach ($request->file('imagens') as $imagem) {
                $imageName = $anuncio->nome.'-image-'.time().rand(1,1000).'.'.$imagem->extension();
                $imagem->move(public_path('imagens_produtos'),$imageName);
                ImagemAnuncio::create([
                    'anuncio_id'=>$anuncio->id,
                    'imagem'=>$imageName
                ]);
            }
        }

        return $anuncio;

    }

    public function atualizarAnuncio(Request $request, $anuncioId){

        $anuncio = Anuncio::find($anuncioId);

        if($anuncio){

            $rules = [
                'nome' => [
                    'required'
                ],
                'tipo_anuncio' => [
                    'required',
                ],
                'tipo_componente' => [
                    'required',
                ],
                'modelo' => [
                    'required',
                ],
                'urgencia' => [
                    'required',
                ],
                'estado_componente' => [
                    'required',
                ],
                'preco' => [
                    'required',
                ],
                'forma_pagamento' => [
                    'required',
                ],
                'data_criacao' => [
                    'required',
                ]
            ];

            $messages = [
                'required' => "Este campo é de preenchimento obrigatório.",
            ];

            $validated = Validator::make($request->all(), $rules, $messages);

            if ($validated->fails()) {
                return response()->json(['errors' => $validated->errors()], 422);
            }

            $anuncio->update([
                'nome' => $request->nome,
                'tipo_anuncio' => $request->tipo_anuncio,
                'tipo_componente' => $request->tipo_componente,
                'modelo' => $request->modelo,
                'urgencia' => $request->urgencia,
                'estado_componente' => $request->estado_componente,
                'preco' => $request->preco,
                'forma_pagamento' => $request->forma_pagamento,
                'data_criacao' => $request->data_criacao,
                'descricao' => $request->descricao,
                'envia_todo_brasil' => $request->envia_todo_brasil,
                'cidade' => $request->cidade,
                'estado' => $request->estado,
            ]);

            return $anuncio;

        }else{
            return response()->json(['errors' => 'Usuário não encontrado'], 422);
        }

    }

    public function deletarAnuncio(Request $request, $anuncioId){

        $anuncio = Anuncio::find($anuncioId);

        if($anuncio){

            $imagens_bd =  DB::table('imagem_anuncios')
            ->select('imagem')
            ->where('anuncio_id', '=', $anuncio->id)
            ->get();

            if($imagens_bd){
                foreach ($imagens_bd  as $imagem) {
                    $this->deletarImagemAnuncioPorImagem($imagem->imagem);
                }
            }

            $anuncio->delete();
            return $anuncio;
        }else{
            return response()->json(['errors' => 'Anúncio não encontrado'], 422);
        }

    }

    public function adicionarImagemAnuncio(Request $request){

        $erro = false;
        $anuncio = Anuncio::find($request->anuncio_id);

        if($anuncio){

            if($request->has('imagens')){

                try {
                    foreach ($request->file('imagens') as $imagem) {
                        $imageName = $anuncio->nome.'-image-'.time().rand(1,1000).'.'.$imagem->extension();
                        $imagem->move(public_path('imagens_produtos'),$imageName);
                        $imagemCriada = ImagemAnuncio::create([
                            'anuncio_id'=>$anuncio->id,
                            'imagem'=>$imageName
                        ]);
                    }
                } catch (\Throwable $th) {
                    $erro = true;
                }

            }else{
                $erro = true;
            }

        }else{
            $erro = true;
        }

        if($erro){
            return response()->json(['errors' => 'Não foi possível adicionar a Imagem'], 422);
        }else{
            return $imagemCriada;
        }

    }

    public function deletarImagemAnuncio(Request $request){

        $imagemQuery =  DB::table('imagem_anuncios')
                    ->where('imagem', '=', $request->imagem)
                    ->get();

        if(count($imagemQuery) > 0){
            DB::table('imagem_anuncios')->where('imagem', $request->imagem)->delete();
            $imagem = $imagemQuery->first();
            $caminho = public_path("\imagens_produtos\\") . $imagem->imagem;
            File::delete($caminho);
            return $imagem;
        }else{
            return response()->json(['errors' => 'Não foi possível excluir a Imagem'], 422);
        }

    }

    public function deletarImagemAnuncioPorImagem($imagem){

        $imagemQuery =  DB::table('imagem_anuncios')
                    ->where('imagem', '=', $imagem)
                    ->get();

        if($imagemQuery){
            DB::table('imagem_anuncios')->where('imagem', $imagem)->delete();
            $imagem = $imagemQuery->first();
            $caminho = public_path("\imagens_produtos\\") . $imagem->imagem;
            File::delete($caminho);
            return $imagem;
        }else{
            return response()->json(['errors' => 'Não foi possível excluir a Imagem'], 422);
        }

    }

    public function pesquisarAnuncio(Request $request){

        $pesquisa = '%' . $request->textoPesquisa . '%';

        $anuncios =  DB::table('anuncios')
        ->where('nome', 'like', $pesquisa)
        ->get();

        if(count($anuncios) != 0){
            return $anuncios;
        }else{
            return response()->json(['errors' => 'Anúncio não encontrado'], 422);
        }

    }
    
}
