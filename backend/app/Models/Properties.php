<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Properties extends Model
{
    use HasFactory;

    public function developers() {
        return $this->hasOne(Developers::class, 'id', 'developer_id');
    }
    public function locations() {
        return $this->hasOne(Property_locations::class, 'id', 'location_id');
    }

    protected $table = "properties";

    protected $fillable = [
        'property_name',
        'developer_id',
        'square_meter',
        'price',
        'required_income',
        'location_id'
    ];
}
