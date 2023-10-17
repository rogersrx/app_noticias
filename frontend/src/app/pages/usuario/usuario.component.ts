import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario-request';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuario: Usuario= {nombre:'',
    nombreUsuario:'',
    email:'',
    password:'',
    roles: ['user']};

  constructor(private usuarioservice: UsuarioService){}

  guardar(){
    this.usuarioservice.registrarUsuario(this.usuario).subscribe(resp=>{
      console.log(resp);
    });   

    console.log(this.usuario);
  }

}
