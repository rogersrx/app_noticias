package com.noticia.noticia.serviceimpl;

import com.noticia.noticia.dto.NoticiaDTO;
import com.noticia.noticia.entity.Noticia;
import com.noticia.noticia.repository.NoticiaRepository;
import com.noticia.noticia.service.NoticiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class NoticiaServiceImpl implements NoticiaService {

    @Autowired
    private NoticiaRepository noticiaRepository;

    @Override
    public void guardar(NoticiaDTO noticiaDTO) {

        noticiaRepository.save(convertDTOtoModel(noticiaDTO));

    }

    @Override
    public List<NoticiaDTO> listar() {

        return convertModelToDTO(noticiaRepository.findAll());

    }

    @Override
    public Page<Noticia> listarNombre(String usuario, Pageable pageable) {

        return noticiaRepository.findAll(pageable);
 }

    @Override
    public Noticia buscarId(Long id) {
        return noticiaRepository.findById(id).orElse(new Noticia());
    }

    @Override
    public void eliminar(Long idNoticia) {

        noticiaRepository.deleteById(idNoticia);


    }

    private Noticia convertDTOtoModel(NoticiaDTO noticiaDTO){
        Noticia noticia= new Noticia();

        noticia.setTitle(noticiaDTO.getTitle());
        noticia.setUrl(noticiaDTO.getUrl());
        noticia.setImage_url(noticiaDTO.getImage_url());
        noticia.setNews_site(noticiaDTO.getNews_site());
        noticia.setSummary(noticiaDTO.getSummary());
        noticia.setPublished_at(noticiaDTO.getPublished_at());
        noticia.setUpdated_at(noticiaDTO.getPublished_at());
        noticia.setFec_register(new Date());
        noticia.setUsuario(noticiaDTO.getUsuario() !=null ? noticiaDTO.getUsuario().toLowerCase() : "");

        return noticia;

    }

    private List<NoticiaDTO> convertModelToDTO(List<Noticia> lista){

        List<NoticiaDTO> listanueva=new ArrayList<>();
        if(!lista.isEmpty()){

            for (Noticia noticia : lista ) {
                NoticiaDTO dto= new NoticiaDTO();

                dto.setId(noticia.getId());
                dto.setTitle(noticia.getTitle());
                dto.setUrl(noticia.getUrl());
                dto.setImage_url(noticia.getImage_url());
                dto.setNews_site(noticia.getNews_site());
                dto.setSummary(noticia.getSummary());
                dto.setPublished_at(noticia.getPublished_at());
                dto.setUpdated_at(noticia.getPublished_at());
                dto.setUsuario(noticia.getUsuario());
                listanueva.add(dto);
            }
        }

        return listanueva;
    }
}
