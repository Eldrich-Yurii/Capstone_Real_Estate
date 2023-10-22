<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Http\Resources\AccountsResource;
use App\Models\Accounts;
use Illuminate\Http\Request;

class AccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(["data" => AccountsResource::collection(Accounts::all())]);
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
        $account = new Accounts();

        $account->email = $request->email;
        $account->username = $request->username;
        $account->password = $request->password;
        $account->userType = $request->userType;
    
        $account->save();

        return response()->json([
            "message" => "Succesful",
            "data" => $account,
        ]);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Accounts  $accounts
     * @return \Illuminate\Http\Response
     */
    public function show(Accounts $accounts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Accounts  $accounts
     * @return \Illuminate\Http\Response
     */
    public function edit(Accounts $accounts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Accounts  $accounts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Select * from accounts where id = $id;
        $account = Accounts::find($id);

        $account->email = $request->email;
        $account->username = $request->username;
        $account->password = $request->password;
        $account->userType = $request->userType;

    
        $account->save();

        return response()->json
        ([
            "message" => "Updated Successfully!",
            "data" => $account,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Accounts  $accounts
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Select * from accounts where id = $id;
        $account = Accounts::find($id);

        $account->delete();

        return response()->json
        ([
            "message" => "Deleted Successfully!",
            "data" => $account
        ]);
    }

    public function login(Request $request)
    {
        $user = Accounts::where(['username'=> $request->username,])->first();
        if(!Hash::check($request->password, $user->password))
        {
            return [
                'sucess'=>'false',
                'message'=>'Email & Password not matched!!!',
            ];
        } 

        return response()->json([
            'sucess'=>'true',
            'message'=>'You are logged in',
            'data'=>$user
        ]);
    }

    public function signup(Request $request)
    {
        $user = Accounts::create([
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password)
        ]);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Registration failed',
            ]);
        }
        
        return response()->json([
            'success' => 'true',
            'message' => 'Registered successfully',
        ]);
    }
}
