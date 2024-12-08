import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  @Input() mode: 'department' | 'employee' = 'department';

  @Output() close =new EventEmitter<void>();

  department ={
    codigo: 0,
    nombre: ''
  }
// TODO + crear tipo de empleado como se hizo con departamento
  employee ={
    codigo: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    codigo_departamento: 0
  }

  save() {
    if(this.mode === 'department'){
      console.log("se guardo el departamento");

    }else if(this.mode === 'employee'){
      console.log("se guardo el empleado")
    }
    this.close.emit()
  }
}
