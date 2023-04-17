<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class imagem_anuncio extends Model
{
    public $timestamps = false;
    //use HasFactory;
    protected $fillable = [
        'anuncio_id',
        'imagem',
    ];
}
