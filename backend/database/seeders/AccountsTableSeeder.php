<?php

namespace Database\Seeders;

use App\Models\Accounts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Accounts::insert([
            [
             'email' => 'me@gmail.com',
             'username' => 'jiel',
             'password'=>'jiel123'
            ],
            [
             'email' => 'me2@gmail.com',
             'username' => 'yuri',
             'password'=>'yuri1234'
            ],
            [
             'email' => 'me3@gmail.com',
             'username' => 'eldrich',
             'password'=>'eldrich123'
            ],
        ]);
    }
}
