<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnunciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('anuncios');
        Schema::create('anuncios', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('tipo_anuncio');
            $table->string('tipo_componente');
            $table->string('modelo');
            $table->string('urgencia');
            $table->string('estado_componente');
            $table->decimal('preco', 12, 2); 
            $table->string('forma_pagamento');
            $table->string('data_criacao'); 
            $table->unsignedBigInteger('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('users');
            $table->string('descricao')->nullable();
            $table->boolean('envia_todo_brasil')->nullable();
            $table->string('cidade')->nullable();
            $table->string('estado')->nullable();
           // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anuncios');
    }
}
