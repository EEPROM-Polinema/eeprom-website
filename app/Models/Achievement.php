<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Achievement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_path',
        'achievement_date',
        'competition_name',
        'position',
        'is_published'
    ];

    protected $casts = [
        'achievement_date' => 'date',
        'is_published' => 'boolean'
    ];
}
