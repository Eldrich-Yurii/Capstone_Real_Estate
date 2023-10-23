<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InquiriesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" =>$this->id,
            "first_name" =>$this->first_name,
            "middle_name"=>$this->middle_name,
            "last_name"=>$this->last_name,
            "birth_date" =>$this->birth_date,
            "contact_number"=>$this->contact_number,
            "email" =>$this->email,
            "property"=>$this->property_id,
            "monthly_salary"=>$this->monthly_salary,
            "created_at" =>$this->created_at
        ];
    }
}
