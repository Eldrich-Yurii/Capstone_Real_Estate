<?php

namespace App\Http\Controllers;

use App\Http\Resources\DevelopersResource;
use App\Models\Developers;
use Illuminate\Http\Request;

class DevelopersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(["data" => DevelopersResource::collection(Developers::all())]);
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
        $developer = new Developers();

        $developer->company = $request->company;
       
        $developer->save();

        return response()->json([
            "message" => "Succesful",
            "data" => $developer,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function show(Developers $developers)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function edit(Developers $developers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Select * from developers where id = $id
        $developer = Developers::find($id);

        $developer->company = $request->company;
        $developer->save();

        return response()->json
        ([
            "message" => "Updated Succefully!",
            "data" => $developer
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Developers  $developers
     * @return \Illuminate\Http\Response
     */
    public function destroy(Developers $id)
    {
        // Select * from developers where id = $id
        $developer = Developers::find($id);

        $developer->delete();

        return response()->json
        ([
            "message" => "Deleted Successfully!",
            "data" => $developer
        ]);

    }
}
