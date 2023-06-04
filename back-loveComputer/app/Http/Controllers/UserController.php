<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\AnuncioController;

class UserController extends Controller
{
    public function consultarUsuarios(){

        $users = User::get();

        if($users){

            foreach ($users as $user) {
//d
                $user->data_nascimento = $this->formatarDataNascimento($user->data_nascimento);
                
                $usuarios[] = [
                    'usuario' => $user
                ];

            }

            return $usuarios;

        }else{
            return response()->json(['errors' => 'Não foi encontrado usuários'], 422);
        }

    }

    public function criarUsuario(Request $request){

        $rules = [
            'nome' => [
                'required'
            ],
            'sobrenome' => [
                'required',
            ],
            'email' => [
                'required',
                'unique:users,email'
            ],
            'sexo' => [
                'required',
            ],
            'data_nascimento' => [
                'required',
            ],
            'telefone' => [
                'required',
            ],
            'senha' => [
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

        $user = User::Create([
            'nome' => $request->nome,
            'sobrenome' => $request->sobrenome,
            'email' => $request->email,
            'sexo' => $request->sexo,
            'data_nascimento' => $request->data_nascimento,
            'telefone' => $request->telefone,
            'cidade' => $request->cidade,
            'estado' => $request->estado,
            'bairro' => $request->bairro,
            'senha' => bcrypt($request->senha),
        ]);

        return $user;

    }

    public function atualizarUsuario(Request $request, $userId){

        $user = User::find($userId);

        if($user){

            $rules = [
                'nome' => [
                    'required',
                ],
                'sobrenome' => [
                    'required',
                ],
                'sexo' => [
                    'required',
                ],
                'data_nascimento' => [
                    'required',
                ],
                'telefone' => [
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

            $user->update([
                'nome' => $request->nome,
                'sobrenome' => $request->sobrenome,
                'sexo' => $request->sexo,
                'data_nascimento' => $request->data_nascimento,
                'telefone' => $request->telefone,
                'cidade' => $request->cidade,
                'estado' => $request->estado,
                'bairro' => $request->bairro,
            ]);

            return $user;

        }else{
            return response()->json(['errors' => 'Usuário não encontrado'], 422);
        }

    }

    public function deletarUsuario(Request $request, $userId){

        $user = User::find($userId);

        if($user){
            $user->delete();
            return $user;
        }else{
            return response()->json(['errors' => 'Usuário não encontrado'], 422);
        }

    }

    public function consultarUsuario(Request $request, $userId){

        $user = User::find($userId);

        if($user){

            $anunciosDB =  DB::table('anuncios')
            ->where('usuario_id', '=', $user->id)
            ->get();

            if(count($anunciosDB) > 0){
                foreach ($anunciosDB as $anuncio) {
                    
                    $imagens =  DB::table('imagem_anuncios')
                    ->select('imagem')
                    ->where('anuncio_id', '=', $anuncio->id)
                    ->get();

                    $quantidadeImagem = count($imagens);

                    $anuncio->data_criacao = $this->formatarData($anuncio->data_criacao);

                    $anuncios[] = [
                        'anuncio' => $anuncio,
                        'quantidadeImagem' => $quantidadeImagem,
                        'imagens' => $imagens
                    ];

                }
            }

            $user->data_nascimento = $this->formatarDataNascimento($user->data_nascimento);

            $resposta = [
                'usuario' => $user,
                'anuncios' => $anuncios
            ];

            return $resposta;

        }else{
            return response()->json(['errors' => 'Usuário não encontrado'], 422);
        }

    }

    public function formatarData($dataParametro){

        $dataSaida = $dataParametro;

        date_default_timezone_set('America/Sao_Paulo');
        setlocale(LC_ALL, 'pt_BR.utf-8', 'ptb', 'pt_BR', 'portuguese-brazil', 'portuguese-brazilian', 'bra', 'brazil', 'br');
        setlocale(LC_TIME, 'pt_BR.utf-8', 'ptb', 'pt_BR', 'portuguese-brazil', 'portuguese-brazilian', 'bra', 'brazil', 'br');
        
        $tempoAtual = Carbon::now();
        $dataAtual = $tempoAtual->toDateString(); 

        if($dataParametro == $dataAtual){
            $dataSaida = "Hoje";
        }else{
          $tempoAnuncio = Carbon::createFromDate($dataSaida);          
          $dataSaida = ucwords( $tempoAnuncio->formatLocalized('%A, %d %B') );
        }

        return $dataSaida;

    }

    public function formatarDataNascimento($dataParametro){

        $dataSaida = $dataParametro;

        date_default_timezone_set('America/Sao_Paulo');
        setlocale(LC_ALL, 'pt_BR.utf-8', 'ptb', 'pt_BR', 'portuguese-brazil', 'portuguese-brazilian', 'bra', 'brazil', 'br');
        setlocale(LC_TIME, 'pt_BR.utf-8', 'ptb', 'pt_BR', 'portuguese-brazil', 'portuguese-brazilian', 'bra', 'brazil', 'br');
        
        $tempoAtual = Carbon::now();

        $tempoAnuncio = Carbon::createFromTimestamp($dataSaida);          
        $dataSaida = ucwords( $tempoAnuncio->formatLocalized('%A, %d de %B de %Y') );

        return $dataSaida;

    }

}


