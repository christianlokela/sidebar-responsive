let toggle = document.getElementById("toggle"); /*on recupère .toggle */
let body = document.querySelector('body'); /* on recupère la balise body*/

toggle.addEventListener('click',function(){ /*quand on clique sur la toggle*/
    body.classList.toggle('open'); /*on crée une classe sur la balise body "open" */
    
})