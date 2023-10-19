<?php

namespace Database\Seeders;

use App\Models\Developers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DevelopersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Developers::insert([
            [
                'company' => 'Apec'
            ],
            [
                'company' => 'Raemulan'
            ],
            [
                'company' => 'Lumina'
            ],
            [
                'company' => 'Solar Resource'
            ],
            [
                'company' => 'Ayala Land'
            ],
            [
                'company' => 'SMDC'
            ],
            [
                'company' => 'DMCI'
            ],
            [
                'company' => 'Megaworld'
            ],
        ]);
    }
}
