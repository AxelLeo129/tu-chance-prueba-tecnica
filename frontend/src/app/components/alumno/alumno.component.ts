import { Component } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.scss'
})
export class AlumnoComponent {

  nombre = '';
  edad!: number;
  grado = '';
  alumnos: Alumno[] = [];

  constructor(private generalService: GeneralService) {}

  agregarAlumno() {
    const nuevoAlumno = { nombre: this.nombre, edad: this.edad, grado: this.grado };
    this.generalService.post<Alumno, Alumno>('/crear-alumno', nuevoAlumno).then(() => {
      alert('Alumno agregado');
      this.obtenerAlumnos();
    });
  }

  obtenerAlumnos() {
    this.generalService.get<Alumno[]>('/consultar-alumno/' + this.grado).then((data: Alumno[] | undefined) => {
      if(data && data?.length > 0) this.alumnos = data;
    });
  }

}
