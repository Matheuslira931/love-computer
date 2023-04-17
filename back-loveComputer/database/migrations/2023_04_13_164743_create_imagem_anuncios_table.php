<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagemAnunciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagem_anuncios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('anuncio_id');
            $table->foreign('anuncio_id')->references('id')->on('anuncios');
            $table->binary('imagem');
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imagem_anuncios');
    }
}
