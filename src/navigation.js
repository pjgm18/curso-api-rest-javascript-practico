searchFormBtn.addEventListener('click', ()=> {
    location.hash = '#search='+ searchFormImput.value 
})
trendingBtn.addEventListener('click', ()=> {
    location.hash = '#trends'
})

/* Solucion para regresar al home si venimos de otra URL y ademas regresar a la pagina anterior si estamos
dentro de la aplicacion */
//https://developer.mozilla.org/es/docs/Web/Security/Same-origin_policy
arrowBtn.addEventListener('click', ()=> {
/* if(document.domain != 'localhost'){
    location.hash= '#home';
}else{
    history.back();
} */
history.back()
})
//la funcion tambien cargara cuando cargue el DOM
window.addEventListener('DOMContentLoaded', navigator, false)
//La funcion que queremos ejecutar cada vez que cambie el hash
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location})

    if(location.hash.startsWith('#trends')){
        trendsPage()
    } else if(location.hash.startsWith('#search=')){
        searchPage()

    }else if(location.hash.startsWith('#movie=')){
        movieDetailPage()

    }else if(location.hash.startsWith('#category=')){
        categoriesPage()

    } else{
        homePage()
    }
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function homePage(){
    console.log('Estamos en el home')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.add('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerCategoryTitle.classList.add('inactive')
    headerTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getCategoriesPreview()
    getTrendingMoviesPreview()

}


function categoriesPage(){
/*     window.scrollTo(0,0)
 */    console.log('Estamos en categorias')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

  /*  const url = location.hash.split('=') //['category', 'id-name']
    const urlPage = url[0]
    const urInfo = url[1]
 */
    

    const [_,categoryData] = location.hash.split('=')
    const [categoryId,categoryName] = categoryData.split('-')
    headerCategoryTitle.innerHTML= categoryName;

    getMoviesByCategory(categoryId)
    console.log(categoryName)
    



}
function movieDetailPage(){
    console.log('Estamos en detalles peliculas')

    headerSection.classList.add('header-container--long')
/*     headerSection.style.background = ''
 */     arrowBtn.classList.remove('inactive')
      arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

    //['#movie', '21566']
    const [_, movieId] = location.hash.split('=')
    getMovieById(movieId)

}
function searchPage(){
    console.log('Estamos en busquedas')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')

    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    //['#search=', 'platzi']
    const [_, query] = location.hash.split('=')
    getMovieBySearch(query);

}
function trendsPage(){
    console.log('Estamos en trends')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')

    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    headerCategoryTitle.innerHTML= 'Tendencias';

    getTrendingMovies()
}