fetch('./datos.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

document.getElementById("carta").addEventListener('click', function(){
    const textos = document.getElementsByClassName("contenido");
        for(let i = 0; i<textos.length;i++){
            textos[i].style.display="none";
        };
    document.getElementById("cuerpo").style.display="block";
});

document.getElementById("infopersonal").addEventListener('click', function(){
    const textos = document.getElementsByClassName("contenido");
        for(let i = 0; i<textos.length;i++){
            textos[i].style.display="none";
        };
    document.getElementById("info").style.display="block";
});

document.getElementById("antecedentes").addEventListener('click', function(){
    const textos = document.getElementsByClassName("contenido");
        for(let i = 0; i<textos.length;i++){
            textos[i].style.display="none";
        };
    document.getElementById("anteced").style.display="block";
});

document.getElementById("conocimientos").addEventListener('click', function(){
    const textos = document.getElementsByClassName("contenido");
        for(let i = 0; i<textos.length;i++){
            textos[i].style.display="none";
        };
    document.getElementById("conocim").style.display="block";
});

document.getElementById("educacion").addEventListener('click', function(){
    const textos = document.getElementsByClassName("contenido");
        for(let i = 0; i<textos.length;i++){
            textos[i].style.display="none";
        };
    document.getElementById("educac").style.display="block";
});

document.getElementById("cursos").addEventListener('click', function(){
    const textos = document.getElementsByClassName("contenido");
        for(let i = 0; i<textos.length;i++){
            textos[i].style.display="none";
        };
    document.getElementById("curs").style.display="block";
});

