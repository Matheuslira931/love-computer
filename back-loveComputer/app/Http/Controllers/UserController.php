<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function consultarUsuarios(){

        $users = User::get();

        if($users){
            return $users;
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
                'email' => [
                    'required',
                    'unique:users,email'
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

            $user->update([
                'telefone' => $request->telefone,
                'cidade' => $request->cidade,
                'estado' => $request->estado,
                'bairro' => $request->bairro,
                'senha' => bcrypt($request->senha),
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

            $anuncios =  DB::table('anuncios')
            ->where('usuario_id', '=', $user->id)
            ->get();

            $resposta = [
                'usuario' => $user,
                'anuncios' => $anuncios
            ];

            return $resposta;

        }else{
            return response()->json(['errors' => 'Usuário não encontrado'], 422);
        }

    }

}


