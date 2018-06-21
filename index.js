
const form=document.getElementById('search-form');//formulario de busqueda
const searchField=document.getElementById("search-keyword");//buscar palabra clave
const responseContainer=document.getElementById("response-container");//contenedor de respuesta
let searchedForText;//buscado por texto

form.addEventListener('submit',function(e){
    e.preventDefault();//esto es para que la info  que ingresa en el input palabra no desaparesca.
    responseContainer.innerHTML='';
    searchedForText = searchField.value;
    getNews();
});
function getNews(){
    const articleRequest= new XMLHttpRequest();//Solicitud de artículo...se cra el objeto xhr
    articleRequest.open('GET',`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=32bdcc00c11948dfb7ac92fde0d2924f`);//se le dice que informacion solicitatar
    articleRequest.onload=addNews;//agregar noticias ..se configura el manejador de exito
    articleRequest.onerror=handleError;//manejar el error..se configura el manejador de error
    articleRequest.send();//se envia la solicitud
}
function handleError(){
    console.log('se ha presntado un error');
}
function addNews(){
    const data=JSON.parse(this.responseText);
    const article=data.response.docs[0];
    const title=article.headline.main;
    const snippet=article.snippet;

    let li=document.createElement("li");
    li.className='articleClass';
    li.innerText=snippet;
    responseContainer.appendChild(li);
}
