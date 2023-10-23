<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PropertiesResource extends JsonResource
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
            "property_id" => $this->id,
            "name" => $this->property_name,
            "developer_name" => $this->developers->company,
            "sqm" => $this->square_meter,
            "price" => $this->price,
            "required_income" => $this->required_income,
            "created_at" => $this->created_at,
        ];
    }
}
