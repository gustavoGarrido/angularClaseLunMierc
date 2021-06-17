import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder, private usuariosService:UsuariosService, private authService:AuthService, private router:Router) { 
    console.log("ejecuto constructor")
  }

  formLogin = this.fb.group({
    email:["",[Validators.required, Validators.email]],
    password:["", Validators.required]
  })

  ejecutarLogin(){
    if(this.formLogin.valid){
      this.usuariosService.login(this.formLogin.value).subscribe((dataBackend:any)=>{

        if(dataBackend["mensaje"]=="usuario encontrado"){
          this.authService.authenticate(dataBackend["token"]);
          this.router.navigate(['/paginaInicio'])
          // localStorage.setItem("token", dataBackend["token"]);
        }
        else{
          console.log(this.authService.isAuthenticate())
        }
      })
    }
  }

  verificarToken(){
    this.usuariosService.verificarToken().subscribe(resp=>{
      console.log(resp)
    })
  }

  ngOnInit(): void {
    console.log("ejecuto ngOnInit")
    //retorna algo

    this.formLogin.get("email")?.setValue("ingindustrial.gustavo@gmail.com")
  }

  ngAfterContentInit(){
    console.log("ejecuto ngAfterContentInit")
  }

  ngAfterViewInit(){
    console.log("ejecuto ngAfterViewInit")
  }

  ngOnDestroy(){
    console.log("ejecuto ngOnDestroy")
  }

}
