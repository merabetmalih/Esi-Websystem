<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
       
        // dd(\app\Student::all());
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
        Student::insert([
            'name'=>$request['nom'],
            'lastname'=>$request['prenom'],
            'UID'=>$request['sid'],
            'degree'=>$request['degree']
        ]);
        return response([
            'status'=>'success',
            'data'=>"hh"
        ]);

       /* dd($name,$lastname,$UID,$degree);*/

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        /*$request['uiddelet'];*/
        Student::where('UID','=',$request['uiddelet'])->delete();
        return response([
            'status'=>'success',
            'data'=>"hsh"
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
