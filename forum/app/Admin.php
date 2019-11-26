<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
}
