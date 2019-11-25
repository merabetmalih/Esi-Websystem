<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Teacher;
class TeacherController extends Controller
{
    function store(Request $request)
    {
        Teacher::insert([
            'name'=>$request['nom'],
            'lastname'=>$request['prenom'],
            'UID'=>$request['sid'],
            'degree'=>$request['degree']
        ]);
        return response([
            'status'=>'success',
            'data'=>"hh"
        ]);

      

    }

    

    public function destroy(Request $request)
    {
        Teacher::where('id','=',$request['iddelet'])->delete();
        return response([
            'status'=>'success',
            'data'=>"hsh"
        ]);
        
    }

    public function list()
    {
        $dteacher = Teacher::all();
        return response([
            'status'=>'success',
            'data'=>$dteacher
        ]);
        
    }
}
