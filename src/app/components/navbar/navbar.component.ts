import { Component, OnInit, Input } from '@angular/core';
interface zapatillas{
  id:number;
  precio:number;
  nombre:string;
  img:string;
  cantidadPares:number;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input () cantidad:number = 0;
  @Input () precioPar:number = 0;
  @Input () resultadoX:number = 0;
  @Input () carrito:boolean = false;
  @Input () arrayCarrito:zapatillas[] = [];
  @Input () cantidadCarrito:number = 0;
  constructor() { }

  abierto:boolean = false;
  escondido:boolean = false;
  ngOnInit(): void {
  }


  abrirCarrito(){
    this.abierto = !this.abierto
  }

  borrarPar(index:any){
    this.arrayCarrito.splice(index,1)
  }
  
  esconderAvatar(){
    this.escondido = !this.escondido
  }
}
