import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usando-spinner',
  templateUrl: './usando-spinner.component.html',
  styleUrls: ['./usando-spinner.component.css']
})
export class UsandoSpinnerComponent implements OnInit {

  constructor(public dialog:MatDialog, public usuariosService:UsuariosService) { }



  usarBackend(){

    const spinner = this.dialog.open(SpinnerComponent,{
      disableClose:true,
      closeOnNavigation:false,
    })

    const obj = {email:"ingindustrial.gustavo@gmail.com", password:"test"}
    
    this.usuariosService.login(obj).subscribe(
      
      (dataBackend:any)=>{
        
        spinner.close();
        console.log(dataBackend)
      },
      (error:any)=>{
        console.log(error)
      }
    )

    // const spinner = this.dialog.open(SpinnerComponent,{
    //   disableClose:true,
    //   closeOnNavigation:false,
    // })
  }

  ngOnInit(): void {
  }

}
