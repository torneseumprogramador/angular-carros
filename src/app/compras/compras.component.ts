import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private REST_API_SERVER = `${GlobalConstants.HOST}/pedidos.json`

  public pedidos = []

  ngOnInit(): void {
  	this.http.get(this.REST_API_SERVER).subscribe((data: any[])=>{
      this.pedidos = data;
    });
  }

}
