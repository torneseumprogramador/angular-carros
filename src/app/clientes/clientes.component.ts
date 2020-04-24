import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private REST_API_SERVER = "http://localhost:3002/clientes.json";

  public clientes = []

  ngOnInit(): void {
  	this.http.get(this.REST_API_SERVER).subscribe((data: any[])=>{
      this.clientes = data;
    });
  }

}
