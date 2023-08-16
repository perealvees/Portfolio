const navbarMenu = document.querySelector('.navbar');
function toggle(){
  if(navbarMenu.classList.contains('menuMobileNone') == true ){
    navbarMenu.classList.remove('menuMobileNone')
  }else{
    navbarMenu.classList.add('menuMobileNone');
  }
}

function typeWrite(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i)=>{
    setTimeout(()=>{
      elemento.innerHTML += letra;
    }, 75 * i)
  })
}
const titulo = document.querySelector('.info-titulo h2');
typeWrite(titulo);


