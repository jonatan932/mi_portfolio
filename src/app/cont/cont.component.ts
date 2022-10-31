import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.scss']
})
export class ContComponent implements OnInit {
formularioDeContacto: FormGroup | any;

constructor(private formBuilder: FormBuilder) { }


  

  
  ngOnInit() {
    this.formularioDeContacto = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      mensaje: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }

alEnviarMensaje() {
 
  if (this.formularioDeContacto.valid == true) {

    window.open('https://wa.me/' + 2214086111+ '?text=Hola, mi nombre es '
    + this.formularioDeContacto.value.nombre +
    '. Me quiero contactar con vos por lo siguiente:'
    + this.formularioDeContacto.value.mensaje, '_blank');
}
}
}
