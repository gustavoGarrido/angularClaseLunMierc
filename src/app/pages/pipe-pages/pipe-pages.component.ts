import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-pages',
  templateUrl: './pipe-pages.component.html',
  styleUrls: ['./pipe-pages.component.css']
})
export class PipePagesComponent implements OnInit {

  constructor() { }

  pipeDate = new Date();
  pipeUpper = 'texto minuscula';
  pipeSlice = '123456789';
  pipeNumber = 3.141615;
  pipeCurrency = 30000;
  pipePersonalizado = 0;

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('llego tarde'), 5000)
  })

  ngOnInit(): void {
  }

}
