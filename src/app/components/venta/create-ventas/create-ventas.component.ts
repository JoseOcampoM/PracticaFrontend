import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VentaService } from 'src/app/services/venta.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { VentaI } from 'src/app/models/venta';

@Component({
  selector: 'app-create-ventas',
  templateUrl: './create-ventas.component.html',
  styleUrls: ['./create-ventas.component.css']
})
export class CreateVentasComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      fechaVenta: ['', [Validators.required]],
      valorTotal: ['', [Validators.required]],
      tipoPago: ['', [Validators.required]],
      UsuarioId: ['', [Validators.required]],
    }
  )

  constructor(
    private formBuilder: FormBuilder,
    private ventaService: VentaService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    const formValue:VentaI = this.formulario.value;
    this.ventaService.create(formValue).subscribe({
      next:(res: any) => {
        this.snackBar.open('Venta Creada correctamente', 'OK', {duration:500});
        this.router.navigateByUrl('/ventas');
      },
      error:(err: any) => {
        this.snackBar.open('Error', 'ERROR', {duration:500});
        console.log(err)
        this.router.navigateByUrl('/ventas');
      }
    })
  }
}
