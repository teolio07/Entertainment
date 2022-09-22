var input_searcher = document.getElementById('input_searcher');
var template = ``;
var filtroOne = [];
var filtro = [];
var filtroLibro=[];
var filtroSerie=[];


input_searcher.addEventListener('keydown',async (e)=>{
    filtroOne = [];
    template = ``;
        console.log(e.key)

 
        
        
        request = await (await fetch('https://peliculas-alvaro.herokuapp.com/api/v1/peliculas/getPeliculas')).json()
        filtro = request.filter(pelicula => pelicula.nombrePeli[0] == input_searcher.value ||
            pelicula.nombrePeli[0]+pelicula.nombrePeli[1] == input_searcher.value || 
            pelicula.nombrePeli[0]+pelicula.nombrePeli[1]+pelicula.nombrePeli[2] == input_searcher.value || 
            pelicula.nombrePeli[0]+pelicula.nombrePeli[1]+pelicula.nombrePeli[2]+pelicula.nombrePeli[3] == input_searcher.value ||
            pelicula.nombrePeli[0]+pelicula.nombrePeli[1]+pelicula.nombrePeli[2]+pelicula.nombrePeli[3]+pelicula.nombrePeli[4] == input_searcher.value ||
            pelicula.nombrePeli[0]+pelicula.nombrePeli[1]+pelicula.nombrePeli[2]+pelicula.nombrePeli[3]+pelicula.nombrePeli[4]+pelicula.nombrePeli[5] == input_searcher.value);

            request = await (await fetch('https://peliculas-alvaro.herokuapp.com/api/v1/books/getBooks')).json()
            filtroLibro = request.filter(pelicula => pelicula.nombreLibro[0] == input_searcher.value ||
            pelicula.nombreLibro[0]+pelicula.nombreLibro[1] == input_searcher.value || 
            pelicula.nombreLibro[0]+pelicula.nombreLibro[1]+pelicula.nombreLibro[2] == input_searcher.value || 
            pelicula.nombreLibro[0]+pelicula.nombreLibro[1]+pelicula.nombreLibro[2]+pelicula.nombreLibro[3] == input_searcher.value ||
            pelicula.nombreLibro[0]+pelicula.nombreLibro[1]+pelicula.nombreLibro[2]+pelicula.nombreLibro[3]+pelicula.nombreLibro[4] == input_searcher.value ||
            pelicula.nombreLibro[0]+pelicula.nombreLibro[1]+pelicula.nombreLibro[2]+pelicula.nombreLibro[3]+pelicula.nombreLibro[4]+pelicula.nombreLibro[5] == input_searcher.value);

            request = await (await fetch('https://peliculas-alvaro.herokuapp.com/api/v1/series/getSeries')).json()
            filtroSerie = request.filter(pelicula => pelicula.nombreSerie[0] == input_searcher.value ||
            pelicula.nombreSerie[0]+pelicula.nombreSerie[1] == input_searcher.value || 
            pelicula.nombreSerie[0]+pelicula.nombreSerie[1]+pelicula.nombreSerie[2] == input_searcher.value || 
            pelicula.nombreSerie[0]+pelicula.nombreSerie[1]+pelicula.nombreSerie[2]+pelicula.nombreSerie[3] == input_searcher.value ||
            pelicula.nombreSerie[0]+pelicula.nombreSerie[1]+pelicula.nombreSerie[2]+pelicula.nombreSerie[3]+pelicula.nombreSerie[4] == input_searcher.value ||
            pelicula.nombreSerie[0]+pelicula.nombreSerie[1]+pelicula.nombreSerie[2]+pelicula.nombreSerie[3]+pelicula.nombreSerie[4]+pelicula.nombreSerie[5] == input_searcher.value);
                
         for (let i = 0; i < filtro.length; i++){
        
                template += `<div class="item-buscador"><div class='title_img'>${filtro[i].nombrePeli}</div>
                                        <img id='imagen' src='${filtro[i].imagen}'/>
                                        <div class='title_img'>Pelicula</div></div>`
        
        }
        for (let i = 0; i < filtroLibro.length; i++){
        
            template += `<div class="item-buscador"><div class='title_img'>${filtroLibro[i].nombreLibro}</div>
                                    <img id='imagen' src='${filtroLibro[i].imagen}'/>
                                    <div class='title_img'>Libro</div></div>`
    
        }
        for (let i = 0; i < filtroSerie.length; i++){
        
            template += `<div class="item-buscador"><div class='title_img'>${filtroSerie[i].nombreSerie}</div>
                                    <img id='imagen' src='${filtroSerie[i].imagen}'/>
                                    <div class='title_img'>Serie</div></div>`
    
        }

        if (e.key == "Shift") {
            template = ``
        }
        document.getElementById('search_container').innerHTML = template
        

})
input_searcher.addEventListener("blur",()=>{
        document.getElementById('search_container').innerHTML =``;
        filtro=[]

        console.log("funcionaaa")

})