<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inquiries', function (Blueprint $table) {
            $table->inquiries_id();   // id int PRIMARY AUTO_INCREMENT
            $table->string("first_name");  // first_name varchar(255)
            $table->string("middle_name"); // middle_name varchar(255)
            $table->string("last_name");  // last_name varchar(255)
            $table->dateTime("birth_date"); 
            $table->integer("contact_number");  // contact_number integer
            $table->integer("property_id");  // property_id integer
            $table->foreign("property_id")->references("id")->on("properties");
            $table->integer("monthly_salary");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inquiries');
    }
};
