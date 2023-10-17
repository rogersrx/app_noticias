package com.noticia.noticia.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Noticia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String url;
    @Column(nullable = false)
    private String image_url;
    private String news_site;
    @Column(nullable = false, length = 1000)
    private String summary;
    private Date published_at;
    private Date updated_at;
    private Date fec_register;
    private String usuario;

}
