var reiniciar = document.getElementById("iniciar");
iniciar.addEventListener("click", inicio2);



var numero = document.getElementsByClassName("numero");
for (var i = 0; i<numero.length;i++){
	numero[i].addEventListener("click", cercania);
}
var vacio = document.getElementsByClassName("vacio");
for(var i = 0 ; i<vacio.length; i++){
	vacio[i].addEventListener("click", seguir);
}
var bomba = document.getElementsByClassName("bomba");
for(var i = 0; i<bomba.length; i++){
  bomba[i].addEventListener("click", explotar);
}

function explotar (){

 var explot = document.createElement("img");
  explot.src = "bombi.jpg";
  explot.style ="width : 40px"
  this.appendChild(explot);

  
}

function seguir (){
    
    this.style.backgroundColor='#FFFF00';
}

function cercania (){
    
    this.innerText=this.value;

}

function inicio2(){
	location.reload();
}