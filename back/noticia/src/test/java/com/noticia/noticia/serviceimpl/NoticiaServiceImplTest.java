package com.noticia.noticia.serviceimpl;

import com.noticia.noticia.dto.NoticiaDTO;
import com.noticia.noticia.entity.Noticia;
import com.noticia.noticia.repository.NoticiaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
class NoticiaServiceImplTest {

    @Mock
    private NoticiaRepository noticiaRepository;

    @InjectMocks
    private NoticiaServiceImpl noticiaService;


    private Noticia noticia;

    private NoticiaDTO noticiaDTO;



    @BeforeEach
    void setUp(){
        MockitoAnnotations.initMocks(this);

         noticia= new Noticia();

        noticia.setId(2l);
        noticia.setTitle("China launches new Yunhai remote sensing satellite");
        noticia.setUrl("https://spacenews.com/china-launches-new-yunhai-remote-sensing-satellite/");
        noticia.setImage_url("https://spacenews.com/wp-content/uploads/2023/10/Yunhai1-04-CZ2D-JSLC-15oct2023-OS1-300x200.jpg");
        noticia.setNews_site("SpaceNews");
        noticia.setSummary("China added to its series of Yunhai remote sensing satellites late Saturday with a launch from the Gobi Desert.");
        noticia.setUsuario("rsolier");
        noticia.setFec_register(new Date());


         noticiaDTO=new NoticiaDTO();


        noticiaDTO.setTitle("China launches new Yunhai remote sensing satellite");
        noticiaDTO.setUrl("https://spacenews.com/china-launches-new-yunhai-remote-sensing-satellite/");
        noticiaDTO.setImage_url("https://spacenews.com/wp-content/uploads/2023/10/Yunhai1-04-CZ2D-JSLC-15oct2023-OS1-300x200.jpg");
        noticiaDTO.setNews_site("SpaceNews");
        noticiaDTO.setSummary("China added to its series of Yunhai remote sensing satellites late Saturday with a launch from the Gobi Desert.");
        noticiaDTO.setUsuario("rsolier");
        noticiaDTO.setFec_register(new Date());
        noticiaDTO.setImage_url("");

    }


    @Test
    void guardar() {

        Mockito.when(noticiaRepository.save(noticia));
    }

    @Test
    void listar() {
        Mockito.when(noticiaRepository.findAll()).thenReturn(Arrays.asList(noticia));
        assertNotNull(noticiaService.listar());
    }

    @Test
    void listarNombre() {
        int page=0;
        Pageable pageable= PageRequest.of(page,10);

        List<Noticia> lista = new ArrayList<>();
        lista.add(noticia);
        Page<Noticia> pagedResponse = new PageImpl(lista);

        Mockito.when(noticiaRepository.findAll(pageable)).thenReturn(pagedResponse);

       assertNotNull(noticiaService.listarNombre(pageable));

    }

    @Test
    void buscarId() {
        Mockito.when(noticiaRepository.findById(Mockito.anyLong())).thenReturn(Optional.of(noticia));
        assertNotNull(noticiaService.buscarId(2l));
    }

    @Test
    void eliminar() {
        Mockito.doNothing().when(noticiaRepository).deleteById(8l);
    }
}