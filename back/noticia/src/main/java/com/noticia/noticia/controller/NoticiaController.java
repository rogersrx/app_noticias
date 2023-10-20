package com.noticia.noticia.controller;

import com.noticia.noticia.dto.FiltroDto;
import com.noticia.noticia.dto.NoticiaDTO;
import com.noticia.noticia.entity.Noticia;
import com.noticia.noticia.service.NoticiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/noticia")
public class NoticiaController {

    @Autowired
    private NoticiaService noticiaService;

    @PostMapping
    public ResponseEntity<?> guardar(@RequestBody NoticiaDTO noticiaDTO){
        Map<String,Object> response = new HashMap<>();

        try{
            noticiaService.guardar(noticiaDTO);
        }catch (DataAccessException e){
            response.put("message","Error al insertar datos!!");
            response.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return  new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);

        }
        response.put("message","se registro correctamente");
        response.put("code", HttpStatus.OK.value());


        return new ResponseEntity(response, HttpStatus.OK);

    }

    @PostMapping("/listar")
    public ResponseEntity<?>listarUsuario(@RequestBody FiltroDto dto){
        int page= dto.getPage() >1 ? dto.getPage()-1 : 0;
        Pageable pageable= PageRequest.of(page,10);

      return  new ResponseEntity(noticiaService.listarNombre(pageable), HttpStatus.OK);

    }

    @GetMapping
    public ResponseEntity<?> listar(){
        Map<String,Object> response = new HashMap<>();

        response.put("data", noticiaService.listar());

        return  new ResponseEntity<>(response,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id){
        Map<String,Object> response= new HashMap<>();

        Noticia noticia= noticiaService.buscarId(id);

        if(noticia == null){
            response.put("message","No existe noticia para eliminar!");
            return  new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
        }

        try {
            noticiaService.eliminar(id);
        }catch (DataAccessException e){
            response.put("message","Error al intentar eliminar noticia con ID: "+id);
            response.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return  new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("message","se elimino el registro correctamente!!");

        return  new ResponseEntity<>(response,HttpStatus.OK);
    }


}
