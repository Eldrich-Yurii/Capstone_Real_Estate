<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property_locations extends Model
{
    use HasFactory;

    protected $table = "property_locations";

    protected $fillable = [
        'city', 
        'province',
        'property_id'
    ];
}
