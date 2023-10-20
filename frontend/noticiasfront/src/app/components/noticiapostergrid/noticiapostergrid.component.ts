import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia, NoticiaResponse } from 'src/app/interfaces/noticia-response';
import { NoticiasService } from 'src/app/services/noticias.service';
import Swal from 'sweetalert2';


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


      constructor(private noticiaservice: NoticiasService,private router: Router){}

      ngOnInit(): void{
        this.noticias=this.noticiaTotal.results;
      }
      

      onNext(){
        this.page+=10      
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
        
        if(localStorage.getItem('dato') == null){
          this.router.navigate(['/usuario'])
        }else{
          this.noticiaservice.guardarfavorito(dato).subscribe(resp =>{
            Swal.fire('Se agrego a favoritos',"", 'success');          
            },err=>{
              Swal.fire('Erro al agregar  favoritos',"", 'error'); 
            }
          );
        }
      }


}
