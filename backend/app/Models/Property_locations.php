<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property_locations extends Model
{
    use HasFactory;

    public function property() {

        return $this->hasOne(Properties::class, 'id', 'property_id');

    }


    protected $table = "property_locations";

    protected $fillable = [
        'city', 
        'province',
        'property_id'
    ];
}
