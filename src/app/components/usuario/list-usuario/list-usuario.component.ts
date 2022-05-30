import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { UsuarioI } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {
  public users: UsuarioI[] = []
  public displayedColumns: string[] = ["nombre", "correo", "telefono", "direccion"]
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarUsuarios()
  }
  mostrarUsuarios() {
    this.usuarioService.getAllUsuario()
    .subscribe({
      next: (data)=>{
        this.users = data.user
        console.log(this.users)
      }
    })
  }

}
