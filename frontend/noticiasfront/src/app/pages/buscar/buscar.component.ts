import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticia-response';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  public texto: string ='';
  public noticias: Noticia[] = [];

  constructor(private activedRoute: ActivatedRoute,
              private noticiaservice: NoticiasService){}

  ngOnInit(): void {

    this.activedRoute.params.subscribe( params =>{
      this.texto=params["texto"];
      this.noticiaservice.buscarNoticias(params["texto"]).subscribe( resp =>{
        
        this.noticias=resp.results;
        console.log(this.noticias);
      });
      
      
    })

    

  }


}
