import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  irLogin(){
    this.router.navigate(['/login'])
  }

  irCrearUsuario(){
    this.router.navigate(['/crearUsuario'])
  }

  back(){
    this.router.navigate(['/'])
  }

  logaut(){
    this.authService.logoat();
    this.router.navigate(['/'])
  }


  ngOnInit(): void {
  }

}
