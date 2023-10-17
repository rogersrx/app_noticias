import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia-response';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent {

  noticias:Noticia[]=[];

  constructor(private noticiaservice:NoticiasService){}


  ngOnInit(){

    this.noticiaservice.getNoticiafavorito().subscribe(resp=>{
      this.noticias=resp.data;
      console.log(resp);
    });

  }

  delete(id:number){

    this.noticiaservice.deleteNoticiafavorite(id).subscribe(resp=>{
      
      console.log(resp);
    });

    
  }



}
