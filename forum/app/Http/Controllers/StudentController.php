<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class StudentController extends Controller
{
   
    public function store(Request $request)
    {
        Student::insert([
            'name'=>$request['nom'],
            'lastname'=>$request['prenom'],
            'UID'=>$request['sid'],
            'degree'=>$request['degree']
        ]);
        return response([
            'status'=>'success',
            'data'=>"inertion was succefully realised"
        ]);

       
    }

    
    public function destroy(Request $request)
    {
        
        Student::where('UID','=',$request['uiddelet'])->delete();
        return response([
            'status'=>'success',
            'data'=>"delet was succefully realised"
        ]);
        
    }

    public function list()
    {
        $dstudent = Student::all();
        return response([
            'status'=>'success',
            'data'=>$dstudent
        ]);
        
    }
   
}
