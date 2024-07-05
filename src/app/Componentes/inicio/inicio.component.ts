import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Servicio/service.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
constructor(private router: Router, private service: ServiceService ){}
}