package com.noticia.noticia.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class NoticiaDTO {
    private Long id;
    private String title;
    private String url;
    private String image_url;
    private String news_site;
    private String summary;
    private Date published_at;
    private Date updated_at;
    private Date fec_register;
    private String usuario;

}
