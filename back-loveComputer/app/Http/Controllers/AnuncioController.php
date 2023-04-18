<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use App\Models\ImagemAnuncio;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManagerStatic as Image;

class AnuncioController extends Controller
{

    public function exibirAnuncio(Request $request, $anuncioId){

        $anuncio = Anuncio::find($anuncioId);

        if($anuncio){

          //  $imagens_bd = mb_convert_encodinge( DB::table('imagem_anuncios')
        //                    ->where('anuncio_id', '=', $anuncio->id)
         //                    ->get() );

          //  return $imagens_bd;

           // $ovo = [
           //     'anuncio' => $anuncio,
           //     'imagens' => $imagens_bd
            //];

            return $anuncio;

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
            'envia_todo_brasil' => $request->envia_todo_brasil,
            'cidade' => $request->cidade,
            'estado' => $request->estado,
        ]);

        foreach ( $request->imagens as $imagem_enviada){
            
            $imagem = Image::make($imagem_enviada['caminho']);

            Response::make($imagem->encode('jpeg'));

            $imagem_anuncio = ImagemAnuncio::Create([
                'anuncio_id' => $anuncio->id,
                'imagem' => $imagem,
            ]);

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
                'usuario_id' => $request->usuario_id,
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
            $anuncio->delete();
            return $anuncio;
        }else{
            return response()->json(['errors' => 'Anúncio não encontrado'], 422);
        }

    }
    
}
