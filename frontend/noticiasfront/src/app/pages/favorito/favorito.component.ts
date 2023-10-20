import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia-response';
import { NoticiasService } from 'src/app/services/noticias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent {

  noticias:Noticia[]=[];

  page: number=0;
  totalpage:number=0;

  atras: boolean = false;
  siguiente: boolean= false;

  constructor(private noticiaservice:NoticiasService){}

  ngOnInit(){  
    this.cargarfavoritoini();
    
  }

  cargarfavoritoini(){
    this.noticiaservice.getNoticiafavorito(this.page).subscribe(resp=>{
      this.page=2;
      this.noticias=resp.content;  
      this.totalpage=resp.totalPages;        
    });
  }

  delete(id:number){
    this.noticiaservice.deleteNoticiafavorite(id).subscribe(resp=>{      
      Swal.fire('Se eliminó',"", 'success');  
      this.cargarfavoritoini();        
    },err=>{
      Swal.fire('Erro al eliminar  favoritos',"", 'error');     
    });    
  }

  onNext(){ 
    this.noticiaservice.getNoticiafavorito(this.page).subscribe( resp =>{
    this.page+=1;
    this.noticias=resp.content;
    }); 
    
    
    
  }

  onPrevios(){
    if(this.page<0)
      return;
    this.page-=1;
    this.noticiaservice.getNoticiafavorito(this.page).subscribe( resp => {
      this.noticias=resp.content;
    });

  }

}
