import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private REST_API_SERVER = `${GlobalConstants.HOST}/carros.json`

  public carros = []

  ngOnInit(): void {
  	this.http.get(this.REST_API_SERVER).subscribe((data: any[])=>{
      this.carros = data;
    });
  }

}
