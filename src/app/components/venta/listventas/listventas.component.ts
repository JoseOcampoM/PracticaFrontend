import { Component, OnInit } from '@angular/core';
import { VentaI } from 'src/app/models/venta';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';
import { data } from 'jquery';

@Component({
  selector: 'app-listventas',
  templateUrl: './listventas.component.html',
  styleUrls: ['./listventas.component.css']
})
export class ListventasComponent implements OnInit {

  public ventas:VentaI[] = []
  public displayedColumns: string[] = ["id", "fechaVenta", "valorTotal", "tipoPago", "Usuario", "Acciones"]
  constructor(
    private ventaService: VentaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarVentas()
  }
  mostrarVentas(){
    this.ventaService.getAllVenta()
      .subscribe({
        next: (data) => {
          this.ventas = data.venta
          console.log(this.ventas)
        }
      })
  }

}
