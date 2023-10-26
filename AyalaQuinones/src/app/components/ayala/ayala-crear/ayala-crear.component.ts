import { Equipaje } from './../../../models/Equipaje';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipajeService } from 'src/app/services/equipaje.service';

@Component({
  selector: 'app-ayala-crear',
  templateUrl: './ayala-crear.component.html',
  styleUrls: ['./ayala-crear.component.css'],
})
export class AyalaCrearComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  equipaje: Equipaje = new Equipaje();
  mensaje: string = '';

  estados: { value: string; viewValue: string }[] = [
    { value: 'entregado', viewValue: 'Entregado' },
    { value: 'recepcionado', viewValue: 'Recepcionado' },
    { value: 'a bordo', viewValue: 'A Bordo' },
  ];
  constructor(
    private eS: EquipajeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      weightEquipaje: ['', Validators.required],
      statusEquipaje: ['', Validators.required],
      dateReception: ['', Validators.required],
      priceEquipaje: [''],
    });
  }

  registrar() {
    if (this.form.valid) {
      this.equipaje.weightEquipaje = this.form.value.weightEquipaje;
      this.equipaje.statusEquipaje = this.form.value.statusEquipaje;
      this.equipaje.dateReception = this.form.value.dateReception;
      this.equipaje.priceEquipaje = this.form.value.priceEquipaje;

      this.eS.insert(this.equipaje).subscribe((data) => {
        this.eS.list().subscribe((data) => {
          this.eS.setList(data);
        });
      });

      this.router.navigate(['ayala/nuevo']);
    } else {
      this.mensaje = 'Ingrese todos los datos';
    }
    this.ngOnInit();
  }
  obtenerControlCampo(campo: string) {
    const control = this.form.get(campo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${campo}`);
    }
    return control;
  }
}
