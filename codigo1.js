
window.onload = function(){
  alert('he cargado completamente la pagina');
  $('#onload').fadeOut(); 
  $('body').removeClass('hidden');
}



window.onscroll = function(){
  console.log(document.documentElement.scrollTop);
  if(document.documentElement.scrollTop > 100) {
    document.querySelector('.go-top-container').classList.add('show');
     
  }
  else{
    document.querySelector('.go-top-container').classList.remove('show');
  }
}
 
document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

