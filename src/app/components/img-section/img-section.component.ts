import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-section',
  templateUrl: './img-section.component.html',
  styleUrls: ['./img-section.component.scss']
})
export class ImgSectionComponent implements OnInit {

  defaultImage:string = '../../../assets/images/image-product-1.jpg';
  backgroundAmpliado:boolean = false;

  thumbnail1:string = '../../../assets/images/image-product-1.jpg';
  thumbnail2:string = '../../../assets/images/image-product-2.jpg';
  thumbnail3:string = '../../../assets/images/image-product-3.jpg';
  thumbnail4:string = '../../../assets/images/image-product-4.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  cambiarDefault(thumbnail:string){
    this.defaultImage = thumbnail;
    this.backgroundAmpliado = true;
  }

  cerrarImagenAmpliada(){
    this.backgroundAmpliado = false;
  }
}
