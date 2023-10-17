import { Component,Input } from '@angular/core';
import { Noticia, NoticiaResponse } from 'src/app/interfaces/noticia-response';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticiapostergrid',
  templateUrl: './noticiapostergrid.component.html',
  styleUrls: ['./noticiapostergrid.component.css']
})
export class NoticiapostergridComponent {
    
    @Input() noticiaTotal: NoticiaResponse = {count:  0,
      next:     '',
      previous: '',
      results:  []};

      page:number=10;
      noticias: Noticia[] = [];


      constructor(private noticiaservice: NoticiasService){}

      ngOnInit(): void{
        this.noticias=this.noticiaTotal.results;
      }
      

      onNext(){
        this.page+=10       
        console.log(this.page);
        this.noticiaservice.getNoticiasBuscar(this.page).subscribe( resp =>{
        this.noticias=resp.results;
        });        
      }

      onPrevios(){
        if(this.page<10)
          return;
        this.page-=10;
        this.noticiaservice.getNoticiasBuscar(this.page).subscribe( resp => {
          this.noticias=resp.results;
        });

      }
      
      agregarfavorito(dato:Noticia){
        this.noticiaservice.guardarfavorito(dato).subscribe(resp =>{
          console.log(resp);
          }
        );
          
      }


}
