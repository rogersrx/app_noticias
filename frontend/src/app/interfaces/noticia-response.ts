export interface NoticiaResponse {
    count:    number;
    next:     string;
    previous: string;
    results:  Noticia[];
}

export interface Noticia {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    usuario?:      string;
    launches:     Launch[];
    events:       any[];
}

export interface Launch {
    launch_id: string;
    provider:  string;
}

