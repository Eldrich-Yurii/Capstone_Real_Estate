<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property_locations extends Model
{
    use HasFactory;

    protected $table = "properties_location";

    protected $fillable = [
        'city', 
        'province'
    ];
}
