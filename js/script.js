let boutonPierre=document.getElementById('pierre');
let boutonFeuille=document.getElementById('feuille');
let boutonCiseau=document.getElementById('ciseau');
let texteAffiche=document.getElementById('texte');
let coupJoueur=document.getElementById('coupJoueur');
let coupDeIA=document.getElementById('coupIA');
let resultat=document.getElementById('result');
let afficheVictoire=document.getElementById('Victoire');
let afficheDefaite=document.getElementById('Defaite');
let afficheEgalite=document.getElementById('Egalite');


let tab=['pierre','feuille','ciseau'];
nbreVictoire=0;
nbreDefaite=0;
nbreEgalite=0;
afficheVictoire.textContent=nbreVictoire;
afficheDefaite.textContent=nbreDefaite;
afficheEgalite.textContent=nbreEgalite;
boutonPierre.addEventListener('click',()=>{
    game("pierre");
});
boutonFeuille.addEventListener('click',()=>{
    game("feuille");
});

boutonCiseau.addEventListener('click',()=>{
    game("ciseau");
});

function ia(){
   return  tab[Math.floor(Math.random() *3)];
}
function win(){
    nbreVictoire++;
    afficheVictoire.textContent=nbreVictoire;
    
    resultat.textContent="Victoire";
}

function game(coup){
    coupIA=ia();
    coupDeIA.textContent=coupIA;
    coupJoueur.textContent=coup;
    if(coup==coupIA){
        nbreEgalite++;
        afficheEgalite.textContent=nbreEgalite;
        resultat.textContent="égalité";
    }else if(coup=="ciseau" && coupIA=="feuille"){
        win();
    }else if(coup=="pierre" && coupIA=="ciseau"){
        win();
    }else if(coup=="feuille" && coupIA=="pierre"){
        win();
    }else{
         resultat.textContent="Perdue";
         nbreDefaite++;
         afficheDefaite.textContent=nbreDefaite;
    }
}