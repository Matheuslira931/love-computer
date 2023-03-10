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
    Route::get('consultar-usuarios', [App\Http\Controllers\UserController::class,'consultarUsuarios']);
    Route::get('consultar-usuario/{userId}', [App\Http\Controllers\UserController::class,'consultarUsuario']);
    Route::post('criar-usuario', [App\Http\Controllers\UserController::class,'criarUsuario']);
    Route::put('atualizar-usuario/{userId}', [App\Http\Controllers\UserController::class,'atualizarUsuario']);
    Route::delete('deletar-usuario/{userId}', [App\Http\Controllers\UserController::class,'deletarUsuario']);
    Route::post('logout', [App\Http\Controllers\AuthController::class,'logout']);
});



