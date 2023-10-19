<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Properties extends Model
{
    use HasFactory;

    protected $table = "properties";

    protected $fillable = [
        'property_name',
        'developer_id',
        'sqaure_meters',
        'price',
        'required_income'
    ];
}
