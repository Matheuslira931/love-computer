<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anuncio extends Model
{
    public $timestamps = false;
    //use HasFactory;
    protected $fillable = [
        'nome',
        'tipo_anuncio',
        'tipo_componente',
        'modelo',
        'urgencia',
        'estado_componente',
        'preco',
        'forma_pagamento',
        'data_criacao',
        'usuario_id',
        'descricao',
        'envia_todo_brasil',
        'cidade',
        'estado',
    ];
}
