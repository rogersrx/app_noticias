import { Component, Input,AfterViewInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit  {

  @Input() noticias: Noticia[] = [];
  mySwiper: Swiper = new Swiper('.swiper',{});
  constructor(){}
  
 
  ngAfterViewInit():void{
    this.mySwiper = new Swiper('.swiper', {
      // Optional parameters     
      loop: true          
    });
  }

  ngOnInit(): void{
    console.log(this.noticias);
  }


   onClickNext() {
    this.mySwiper.slideNext();
   
  }

  onClickPrevius(){
    this.mySwiper.slidePrev();
  }


}
