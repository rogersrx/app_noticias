import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario-request';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  errors: string ="";
  succes: string ="";

  usuario: Usuario= {nombre:'',
    nombreUsuario:'',
    email:'',
    password:'',
    roles: ['user']};

  constructor(private usuarioservice: UsuarioService,private router: Router){}

  guardar(){
    this.usuarioservice.registrarUsuario(this.usuario).subscribe(resp=>{
      this.succes=resp.mensaje;
      this.errors="";

      setTimeout(() => {
        this.router.navigate(['/login'])
       }, 1500);
      
    },err=>{
      this.errors=err.error.mensaje;
      this.succes="";
    }     
    );   
  }


  inicializar(){
    this.errors="";
    this.succes="";
  }

}
