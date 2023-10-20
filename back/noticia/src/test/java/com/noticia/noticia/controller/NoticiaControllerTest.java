package com.noticia.noticia.controller;

import com.noticia.noticia.dto.FiltroDto;
import com.noticia.noticia.dto.NoticiaDTO;
import com.noticia.noticia.entity.Noticia;
import com.noticia.noticia.service.NoticiaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
class NoticiaControllerTest {

    @Mock
    private NoticiaService noticiaService;

    @InjectMocks
    private NoticiaController noticiaController;

    private Noticia noticia;

    private NoticiaDTO noticiaDTO;

    private FiltroDto filtroDto;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        noticia = new Noticia();

        noticia.setId(2l);
        noticia.setTitle("China launches new Yunhai remote sensing satellite");
        noticia.setUrl("https://spacenews.com/china-launches-new-yunhai-remote-sensing-satellite/");
        noticia.setImage_url("https://spacenews.com/wp-content/uploads/2023/10/Yunhai1-04-CZ2D-JSLC-15oct2023-OS1-300x200.jpg");
        noticia.setNews_site("SpaceNews");
        noticia.setSummary("China added to its series of Yunhai remote sensing satellites late Saturday with a launch from the Gobi Desert.");
        noticia.setUsuario("rsolier");
        noticia.setFec_register(new Date());


        noticiaDTO = new NoticiaDTO();


        noticiaDTO.setTitle("China launches new Yunhai remote sensing satellite");
        noticiaDTO.setUrl("https://spacenews.com/china-launches-new-yunhai-remote-sensing-satellite/");
        noticiaDTO.setImage_url("https://spacenews.com/wp-content/uploads/2023/10/Yunhai1-04-CZ2D-JSLC-15oct2023-OS1-300x200.jpg");
        noticiaDTO.setNews_site("SpaceNews");
        noticiaDTO.setSummary("China added to its series of Yunhai remote sensing satellites late Saturday with a launch from the Gobi Desert.");
        noticiaDTO.setUsuario("rsolier");
        noticiaDTO.setFec_register(new Date());
        noticiaDTO.setImage_url("");

        filtroDto = new FiltroDto();
        filtroDto.setPage(1);

    }

    @Test
    void guardar() {
        Mockito.doNothing().when(noticiaService).guardar(noticiaDTO);
        noticiaController.guardar(noticiaDTO);
    }

    @Test
    void listarUsuario() {
        int page = 0;
        Pageable pageable = PageRequest.of(page, 10);

        List<Noticia> lista = new ArrayList<>();
        lista.add(noticia);

        Page<Noticia> pagedResponse = new PageImpl(lista);
        Mockito.when(noticiaService.listarNombre(pageable)).thenReturn(pagedResponse);

        assertNotNull(noticiaController.listarUsuario(filtroDto));
    }

    @Test
    void listar() {

        Mockito.when(noticiaService.listar()).thenReturn(Arrays.asList(noticiaDTO));

        assertNotNull(noticiaController.listar());

    }

    @Test
    void eliminar() {

        Mockito.doNothing().when(noticiaService).eliminar(8l);

        noticiaController.eliminar(8l);

    }
}