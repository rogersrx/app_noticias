import { Component, HostListener } from '@angular/core';
import { Noticia, NoticiaResponse } from 'src/app/interfaces/noticia-response';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 public noticias: Noticia[] = [];
 public noticiasSlideshow: Noticia[] = [];

 public noticiaTotal: NoticiaResponse = {count:  0,
  next:     '',
  previous: '',
  results:  []};

 @HostListener('window:scroll',['$event'])
 onScroll(){
  const pos = (document.documentElement.scrollTop || document.body.scrollTop)+1300;
  const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
  /*
  if(pos > max){
      this.noticiaservice.getNoticias().subscribe( resp =>{
        this.noticias.push(...resp.results);
      });
  }*/

 }

  constructor (private noticiaservice : NoticiasService){

    }

    ngOnInit():void {
      this.noticiaservice.getNoticias()
      .subscribe(resp =>{
        //console.log(resp);
        this.noticias= resp.results;
        this.noticiasSlideshow= resp.results;
      })

      this.noticiaservice.getNoticia()
      .subscribe( resp =>{
        this.noticiaTotal=resp;
      })
    }

}
