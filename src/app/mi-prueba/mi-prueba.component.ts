import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {DateAdapter } from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Grados {
  name: string;
}
interface Gerencias {
  name: string;
}
@Component({
  selector: 'app-mi-prueba',
  templateUrl: './mi-prueba.component.html',
  styleUrls: ['./mi-prueba.component.css'],
})
export class MiPruebaComponent {

  nombreControl= new FormControl('', Validators.required);
  apellidoPaternoControl= new FormControl('', Validators.required);
  apellidoMaternoControl= new FormControl('', Validators.required);
    rutControl= new FormControl('',[Validators.required, Validators.maxLength(8)]);
  gradoControl= new FormControl('', Validators.required);
    emailControl= new FormControl('', [Validators.required,Validators.email,]);
  gerenciaControl= new FormControl('', Validators.required);
  fechaControl= new FormControl(new Date());
  puestoControl= new FormControl('', Validators.required);



  serializedDate = new FormControl(new Date().toISOString());
  
  //selectFormControl = new FormControl('', Validators.required);
  grados: Grados[] = [
    { name: 'General de Aviación' },
    { name: 'Comandante de Grupo' },
    { name: 'Suboficial Mayor' },
    { name: 'Sargento 1°' },
    { name: 'Cabo' },
  ];
  
  //select2FormControl = new FormControl('', Validators.required);
  gerencias: Gerencias[] = [
    { name: 'Gerencia 1' },
    { name: 'Gerencia 2' },
    { name: 'Gerencia 3'},
    { name: 'Gerencia 4' },
    { name: 'Gerencia 5' },
  ];
  matcher = new MyErrorStateMatcher();
  //cambio de idioma datepicker
   constructor(private dateAdapter: DateAdapter<Date>) {
     this.dateAdapter.setLocale('es-mx');
   }
}



