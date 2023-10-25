<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertiesResource;
use App\Models\Properties;
use Illuminate\Http\Request;

class PropertiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $properties = Properties::with('developers')
                                ->with('locations') 
                                ->get();

        return response()->json(["data" => PropertiesResource::collection($properties)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $property = new Properties();

        $property->property_name = $request->property_name;
        $property->developer_id = $request->developer_id;
        $property->square_meter = $request->square_meter;
        $property->price = $request->price;
        $property->required_income = $request->required_income;
        $property->location_id = $request->location_id;
       
        $property->save();

        return response()->json([
            "message" => "Succesful",
            "data" => $property,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Properties  $properties
     * @return \Illuminate\Http\Response
     */
    public function show(Properties $properties)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Properties  $properties
     * @return \Illuminate\Http\Response
     */
    public function edit(Properties $properties)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Properties  $properties
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Select * from properties where id = $id;
        $property = Properties::find($id);

        $property->property_name = $request->property_name;
        $property->developer_id = $request->developer_id;
        $property->square_meter = $request->square_meter;
        $property->price = $request->price;
        $property->required_income = $request->required_income;
        $property->location_id = $request->location_id;
       
        $property->save();

        return response()->json([
            "message" => "Updated Succesfully",
            "data" => $property,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Properties  $properties
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         // Select * from properties where id = $id;
         $property = Properties::find($id);
         $property->delete();
         
         return response()->json([
            "message" => "Deleted Succesfully",
            "data" => $property,
        ]);
    }
}
