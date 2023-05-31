<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', [App\Http\Controllers\AuthController::class,'login']);
Route::middleware(['jwt.auth'])->group(function () {
    // Usuário
    Route::put('atualizar-usuario/{userId}', [App\Http\Controllers\UserController::class,'atualizarUsuario']);
    Route::delete('deletar-usuario/{userId}', [App\Http\Controllers\UserController::class,'deletarUsuario']);
    Route::post('logout', [App\Http\Controllers\AuthController::class,'logout']);

    // Anúncio
    Route::post('criar-anuncio', [App\Http\Controllers\AnuncioController::class,'criarAnuncio']);
    Route::put('atualizar-anuncio/{anuncioId}', [App\Http\Controllers\AnuncioController::class,'atualizarAnuncio']);
    Route::delete('deletar-anuncio/{anuncioId}', [App\Http\Controllers\AnuncioController::class,'deletarAnuncio']);
    Route::post('adicionar-imagem-anuncio', [App\Http\Controllers\AnuncioController::class,'adicionarImagemAnuncio']);
    Route::delete('deletar-imagem-anuncio', [App\Http\Controllers\AnuncioController::class,'deletarImagemAnuncio']);

});

/// Público

// Usuário
Route::get('consultar-usuarios', [App\Http\Controllers\UserController::class,'consultarUsuarios']);
Route::get('consultar-usuario/{userId}', [App\Http\Controllers\UserController::class,'consultarUsuario']);
Route::post('criar-usuario', [App\Http\Controllers\UserController::class,'criarUsuario']);

// Anúncio
Route::get('pesquisar-anuncio', [App\Http\Controllers\AnuncioController::class,'pesquisarAnuncio']);
Route::get('exibir-anuncio/{anuncioId}', [App\Http\Controllers\AnuncioController::class,'exibirAnuncio']);
Route::get('exibir-anuncios', [App\Http\Controllers\AnuncioController::class,'exibirAnuncios']);
