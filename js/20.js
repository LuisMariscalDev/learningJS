
// Métodos con propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar : function() {
        console.log("Pausando canción...");
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo Playlist ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(123);
reproductor.pausar();
reproductor.borrarCancion(20)
reproductor.crearPlaylist("Corridos bélicos, plebe");
reproductor.reproducirPlaylist("de corridos");

