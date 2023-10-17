package com.noticia.noticia.service;

import com.noticia.noticia.dto.NoticiaDTO;
import com.noticia.noticia.entity.Noticia;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface NoticiaService {

    void guardar(NoticiaDTO noticiaDTO);

    List<NoticiaDTO> listar();

    Page<Noticia> listarNombre(String usuario, Pageable pageable);

    Noticia buscarId(Long id);

    void eliminar(Long idNoticia);

}
