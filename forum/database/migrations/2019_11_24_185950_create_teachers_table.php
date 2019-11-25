<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersTable extends Migration
{
    
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->String('name',120);
            $table->String('lastname',120);
            $table->String('UID',20);
            $table->String('degree',20);
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('teachers');
    }
}
