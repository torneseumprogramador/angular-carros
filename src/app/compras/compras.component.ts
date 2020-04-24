import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private REST_API_SERVER = "https://api-monolitico-para-angular.herokuapp.com/pedidos.json";

  public pedidos = []

  ngOnInit(): void {
  	this.http.get(this.REST_API_SERVER).subscribe((data: any[])=>{
      this.pedidos = data;
    });
  }

}
