const form=document.getElementById('search-form');
const searchField=document.getElementById("search-keyword");
const responseContainer=document.getElementById("response-container");
let searchedForText;

form.addEventListener('submit',function(e){
    e.preventDefault();
    responseContainer.innerHTML='';
    searchedForText = searchField.value;
    getNesws();
});

function getNesws(){
    const articleRequest= new XMLHttpRequest();
    articleRequest.open('GET','http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<tu KEY>');
    articleRequest.onload=addNews;
    articleRequest.onerror=headleError;
    articleRequest.send();
}
