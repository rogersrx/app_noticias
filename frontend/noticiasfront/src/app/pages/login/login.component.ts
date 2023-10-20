import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/interfaces/usuario-request';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  erros: string="";

  usuario: UsuarioLogin={ nombreUsuario: '',password: ''}

  constructor(private usuarioservice: UsuarioService,private router: Router){}

  login(){
    this.usuarioservice.login(this.usuario).subscribe(resp =>{
      localStorage.setItem('dato',JSON.stringify(resp) );
      this.router.navigate(['/favorito'])
      console.log(resp);
    },err=>{
      this.erros=err.error.message+" : "+"Usuario o Contraseña incorrecta";        
    }
    
    );
  }

  limpiar(){
    this.erros="";
  }

}
