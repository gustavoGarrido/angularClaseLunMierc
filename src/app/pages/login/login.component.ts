import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder, private usuariosService:UsuariosService, private authService:AuthService) { }

  formLogin = this.fb.group({
    email:["",[Validators.required, Validators.email]],
    password:["", Validators.required]
  })

  ejecutarLogin(){
    if(this.formLogin.valid){
      this.usuariosService.login(this.formLogin.value).subscribe((dataBackend:any)=>{

        if(dataBackend["mensaje"]=="usuario encontrado"){
          localStorage.setItem("token", dataBackend["token"]);
          this.authService.authenticate();
          console.log(this.authService.isAuthenticate())
        }
        else{
          console.log(this.authService.isAuthenticate())
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
