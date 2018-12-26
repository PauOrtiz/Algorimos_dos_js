function saludo(enOtroIdioma){
 enOtroIdioma();
}

saludo(function(){ /*función anónima*/
 console.log(“bonjour”);
});

