const form=document.getElementById('search-form');
const searchField=document.getElementById("search-keyword");
const responseContainer=document.getElementById("response-container");
let searchedForText;

form.addEventListener('submit',function(e){
    e.preventDefault();
    responseContainer.innerHTML='';
    searchedForText = searchField.value;
    getNews();
});

function getNews(){
    const articleRequest= new XMLHttpRequest();
articleRequest.open('GET',`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<32bdcc00c11948dfb7ac92fde0d2924f>`);
    articleRequest.onload=addNews;
    articleRequest.onerror=handleError;
    articleRequest.send();
}
function handleError(){
    console.log('seha presntado un error');
}
function addNews(){
    const data = JSON.parse(this.responseText);
    console.log(data);
}
