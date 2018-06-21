
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
// function addNews(){
//     const data = JSON.parse(this.responseText);//jala la function de arriba y devuelve en texto
//     console.log(data);
// }
// function addNews(){
// const data=JSON.parse(this.responseText);
// const response= data.response;
// console.log(response);
// }
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



// function nanc(lama,lome){
//     console.log('siempre biene '+lama+' quele habra pasado');
//     console.log('siempre biene '+lome+' quele habra pasado');
// }
// let sugerencia=function(verbo){
//     console.log('deberia solo '+verbo + ' la vida');
// }
// sugerencia('disfrutar');
// nanc('renegando','alegre');

// function hermanitos(selsin,anyelon){
//     console.log("tengo dos de 17 años son "+selsin+anyelon);
// }
// let pequeñines=function(adjetivo){
//     console.log('creo que aun son muy '+ adjetivo);
// }
// pequeñines('jovenes');
// hermanitos('celso vicente jose','anyelin carme');

// function celsin(edad){
//     console.log(`oye ya tienes `+edad+` anda trabajaaa`);
// }
//     let años = function(colegio){
//         console.log('terminaste hace '+colegio);
//     }
// años(2);
// celsin(17);

// function dia(noche,dia){
//     console.log(`estamos en la `+noche+` asi que apurate`);
// }
// dia(`penumbra`);

// function tiempo(edad){
//     console.log(`hola tu edad es `+edad+` estas en el momento justo de la gloria`);
// }
// tiempo(27);


// function syle(name){
//      console.log(`hola ` +name+ ` como estas`);
// }
// syle(`julissa`);

// function suma(){
//     let resultado=(3+4)*2;
//     console.log(resultado);
// }
// suma();
// let suma =function(){
//     for(let i=0;i<100;i++){
//         console.log(i);
//     }
   
// }
// suma();















// function multiplicacion(){
//     let resultado=9*2;
//     console.log(resultado);
// }
// multiplicacion();
// for(let i=0;i<100;i++){
//     console.log(i);
// }

// function resta(){
//     let respuesta=10-2;
//     console.log(respuesta);
// }

// resta();
// for(let i =0 ;i<16;i++){
//     console.log(i);
// }


// function suma(){
//     let resultado=10;
// }
//     suma();
//     for(var i =0; i<10;i++){
//         console.log(i);
  
// }

