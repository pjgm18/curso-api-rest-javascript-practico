const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'aplication/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    }
})

// Utils
function movieContainer(section,movies){
    section.innerHTML = ''
     
     
    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')
        movieContainer.addEventListener('click', ()=>{
            location.hash = '#movie='+movie.id
        })

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt',movie.title)
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path)
        
        movieContainer.appendChild(movieImg)
        section.appendChild(movieContainer)


    }
      );

}

function createCategories(genres, container){

    container.innerHTML = ''
    genres.forEach(genres =>{

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTittle = document.createElement('h3')
        categoryTittle.classList.add('category-title')
        categoryTittle.setAttribute('id', 'id'+genres.id)
        categoryTittle.addEventListener('click', ()=>{
            location.hash =`#category=${genres.id}-${genres.name}`
        })
        const categoryTittleText = document.createTextNode(genres.name)

        categoryTittle.appendChild(categoryTittleText)
        categoryContainer.appendChild(categoryTittle)
        container.appendChild(categoryContainer)

        
    })
}

//Llamados a la api

async function getTrendingMoviesPreview(){
    const {data} = await api('trending/movie/day')
    

    const movies = data.results
    console.log({data, movies})
    movieContainer(trendingPreviewMovieList,movies)


     /* trendingPreviewMovieList.innerHTML = ''

    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt',movie.title)
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path)
        
        movieContainer.appendChild(movieImg)
        trendingPreviewMovieList.appendChild(movieContainer)


    }); */
}


async function getCategoriesPreview(){
    const {data} = await api('/genre/movie/list')
   

    console.log("categorias")
    console.log(data)

    const genres = data.genres

    createCategories(genres,categoriesPreviewList)
    /* categoriesPreviewList.innerHTML = ''

    genres.forEach(genres =>{

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTittle = document.createElement('h3')
        categoryTittle.classList.add('category-title')
        categoryTittle.setAttribute('id', 'id'+genres.id)
        categoryTittle.addEventListener('click', ()=>{
            location.hash =`#category=${genres.id}-${genres.name}`
        })
        const categoryTittleText = document.createTextNode(genres.name)

        categoryTittle.appendChild(categoryTittleText)
        categoryContainer.appendChild(categoryTittle)
        categoriesPreviewList.appendChild(categoryContainer)

        
    }) */


}


 async function getMoviesByCategory(id){ 
    const {data} = await api('discover/movie',{
        params:{
            with_genres: id,
        },
    })

    const movies = data.results
    console.log('getMoviesByCategory')
    console.log({data, movies})
    
    movieContainer(genericSection,movies)
     /* genericSection.innerHTML = ''
     
    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt',movie.title)
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path)
        
        movieContainer.appendChild(movieImg)
        genericSection.appendChild(movieContainer)


    }
      ); */
}

async function getMovieBySearch(query){ 
    const {data} = await api('search/movie',{
        params:{
            query,
        },
    })

    const movies = data.results
    console.log({data, movies})
    
    movieContainer(genericSection,movies)
 }


 async function getTrendingMovies(){
    const {data} = await api('trending/movie/day')
    

    const movies = data.results
    movieContainer(genericSection,movies)

}
 async function getMovieById(id){
    const {data:movie} = await api('movie/'+id)

   const movieImgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
   console.log(movieImgUrl)
   headerSection.style.background =  `
   linear-gradient(
       180deg,
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%), 

   url(${movieImgUrl})
   
   `

    console.log(movie.title)
     movieDetailTittle.textContent = movie.title;
     movieDetailDescription.textContent = movie.overview;
     movieDetailScore.textContent = movie.vote_average;

     createCategories(movie.genres, movieDetailsCategoriesList)

     getRelatedMoviesId(id)

   

}
async function getRelatedMoviesId(id){
    const {data} = await api( `movie/${id}/similar` )
    const relatedMovies= data.results

    movieContainer(relatedMoviesContainer,relatedMovies)
}


 