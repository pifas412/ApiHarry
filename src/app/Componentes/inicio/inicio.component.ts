import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Servicio/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router, private service: ServiceService) { }

  listaH: any[];
ngOnInit(): void {
  this.service.lista().subscribe(data =>{
    this.listaH = data;
  })
}


}