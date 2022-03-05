import { Component, OnInit } from '@angular/core';

interface zapatillas{
  id:number;
  precio:number;
  nombre:string;
  img:string;
  cantidadPares:number;
}

@Component({
  selector: 'app-price-section',
  templateUrl: './price-section.component.html',
  styleUrls: ['./price-section.component.scss']
})
export class PriceSectionComponent implements OnInit {

  constructor() { }
cantidad:number = 0;
precioPar:number = 125;
resultadoX:number = 0;
carrito:boolean = false;
cantidadCarrito:number = 0;
//CREO UN OBJETO PAR1 CON LA INFO O DATA DEL PRODUCTO EN ESTE CASO COMO ES UN SOLO PAR, LO CREO ASÍ.

par1:zapatillas = {
  id:1,
  precio:125,
  nombre:'Fall Limite Edition Sneakers',
  img:'../../../assets/images/image-product-1-thumbnail.jpg',
  cantidadPares:0
}

//CREO UN ARRAY DE OBJETOS DE PARES, PARA SUMAR LA CANTIDAD A MEDIDA QUE VAYA TOCANDO EL BOTON PARA AGREGAR PRODUCTOS

arrayCarrito:zapatillas[] = []

  ngOnInit(): void {
    
  }

  sumarPar(){
    this.cantidad = this.cantidad + 1
  }

  restarPar(){
    if(this.cantidad > 0){
      this.cantidad = this.cantidad - 1
    }
  }

  agregarCarrito(){
  
    if(this.arrayCarrito.includes(this.par1)){
      this.par1.cantidadPares = this.cantidad;
      this.resultadoX = this.precioPar * this.cantidad;
      this.cantidadCarrito = this.cantidad;
    }else{
      this.carrito = true;
      this.arrayCarrito.push(this.par1)
      this.par1.cantidadPares = this.cantidad;
      this.cantidadCarrito = this.cantidad;
      this.resultadoX = this.precioPar * this.cantidad;
    }
  }
}
