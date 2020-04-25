import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cliente = this.buildClient()
    this.loadClients()
  }

  public cliente;
  public clientes = []
  public mensagem = ""

  private buildClient(){
    return { id: '', nome: '', telefone: '' }
  }

  public edit(id:Number){
    this.http.get(`${GlobalConstants.HOST}/clientes/${id}.json`).subscribe((data: any)=>{
      this.cliente = data
    })
  }

  public save() {
    if(this.cliente.id === ''){
      this.http.post(`${GlobalConstants.HOST}/clientes.json`, this.cliente).subscribe(()=>{
        this.cliente = this.buildClient()
        this.mensagem = "Cadastrado com sucesso"
        setTimeout(()=> this.mensagem = "", 3000)
        this.loadClients()
      })
    }
    else{
      this.http.put(`${GlobalConstants.HOST}/clientes/${this.cliente.id}.json`, this.cliente).subscribe(()=>{
        this.cliente = this.buildClient()
        this.mensagem = "Atualizado com sucesso"
        setTimeout(()=> this.mensagem = "", 3000)
        this.loadClients()
      })
    }
  }

  public loadClients(){
    this.http.get(`${GlobalConstants.HOST}/clientes.json`).subscribe((data: any[])=>{
      this.clientes = data
    })
  }

  public excluir(id:Number){
    if(confirm("Confirma ?")){
      this.http.delete(`${GlobalConstants.HOST}/clientes/${id}.json`).subscribe(()=>{
        this.http.get(`${GlobalConstants.HOST}/clientes.json`).subscribe((data: any[])=>{
          this.clientes = data
        })
      });
    }
  }
}
