<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alumno;

class AlumnoController extends Controller
{

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string',
            'edad' => 'required|integer',
            'grado' => 'required|string',
        ]);

        $alumno = Alumno::create($request->all());

        return response()->json($alumno, 201);
    }

    public function show($grado)
    {
        $alumnos = Alumno::where('grado', $grado)->get();
        return response()->json($alumnos);
    }

}
