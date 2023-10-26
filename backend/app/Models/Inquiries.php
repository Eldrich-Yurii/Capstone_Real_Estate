<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiries extends Model
{
    use HasFactory;


    public function status() {
        return $this->hasOne(Status::class, 'id', 'status_id');
    }

    protected $table = "inquiries";

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'birth_date',
        'contact_number',
        'email',
        'property_id',
        'monthly_salary',
        'status_id'
    ];

    protected $casts = [
        'property_id' => 'int'
    ];
}
