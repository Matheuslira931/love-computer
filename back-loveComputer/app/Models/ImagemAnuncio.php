<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagemAnuncio extends Model
{
    //use HasFactory;
    protected $fillable = [
        'anuncio_id',
        'imagem',
    ];
}
