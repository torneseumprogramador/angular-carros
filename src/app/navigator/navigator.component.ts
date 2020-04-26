import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html'
})
export class NavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.q = urlParams.get('q')
  }

  public q;

  public buscar(){
  	if(!this.q) this.q = "";
  	window.location.href = `?q=${this.q}`
  }
}
