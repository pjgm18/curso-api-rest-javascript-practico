/* const $ = (id) => document.querySelector(id);
const headerSection = $('#header');
 */
//section
const headerSection = document.querySelector('#header');
const trendingPreviewSection = document.querySelector('#trendingPreview')
const categoriesPreviewSection = document.querySelector('#categoriesPreview')
const genericSection = document.querySelector('#genericList')
const movieDetailSection = document.querySelector('#movieDetail')

//Lists & Containers
const searchForm = document.querySelector('#searchForm')
const trendingPreviewMovieList = document.querySelector('.trendingPreview-movieList')
const categoriesPreviewList= document.querySelector('.categoriesPreview-list')
const movieDetailsCategoriesList= document.querySelector('#movieDetail .categories-list')
const relatedMoviesContainer= document.querySelector('.relatedMovies-scrollContainer')

//Elements

const headerTitle = document.querySelector('.header-title')
const arrowBtn = document.querySelector('.header-arrow')
const headerCategoryTitle = document.querySelector('.header-title--categoryView')

const searchFormImput = document.querySelector('#searchForm input')
const searchFormBtn = document.querySelector('#searchBtn')

const trendingBtn = document.querySelector('.trendingPreview-btn')

const movieDetailTittle = document.querySelector('.movieDetail-title')

const movieDetailDescription = document.querySelector('.movieDetail-description')
const movieDetailScore = document.querySelector('.movieDetail-score')

