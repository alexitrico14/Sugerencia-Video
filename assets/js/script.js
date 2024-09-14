let VideoModule = (() => {
    let setVideoUrl = (url, id) => {
      let iframe = document.getElementById(id);
      if (iframe) {
        iframe.setAttribute("src", url);
      }
    };
  
    return {
      loadVideo: (url, id) => setVideoUrl(url, id),
    };
  })();
  
  class Multimedia {
    constructor(url) {
      let _url = url;
  
      this.getUrl =( ) => _url;
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    playMultimedia() {
      VideoModule.loadVideo(this.getUrl(), this.id);
    }
  
    setInicio(tiempo) {
      let urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
      VideoModule.loadVideo(urlConTiempo, this.id);
    }
  }

  let musica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
  let pelicula = new Reproductor("https://www.youtube.com/embed/TcMBFSGVi1c", "peliculas");
  let serie = new Reproductor("https://www.youtube.com/embed/eOrNdBpGMv8", "series");
  
  musica.playMultimedia();
  pelicula.playMultimedia();
  serie.playMultimedia();
  
  musica.setInicio(60);
  pelicula.setInicio(33);
  serie.setInicio(75);
 