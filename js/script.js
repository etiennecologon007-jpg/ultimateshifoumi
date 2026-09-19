let bouton=document.querySelectorAll('.bouton')
let texteAffiche=document.getElementById('texte');
let coupJoueur=document.getElementById('coupjoueur');
let coupDeIA=document.getElementById('coupia');
let resultat=document.getElementById('result');
let afficheVictoire=document.getElementById('victoire');
let afficheDefaite=document.getElementById('defaite');
let afficheEgalite=document.getElementById('egalite');


let tab=['pierre','feuille','ciseau'];
nbreVictoire=0;
nbreDefaite=0;
nbreEgalite=0;
afficheVictoire.textContent=nbreVictoire;
afficheDefaite.textContent=nbreDefaite;
afficheEgalite.textContent=nbreEgalite;
bouton.forEach(bouton => {
    bouton.addEventListener('click',(event)=>{
        let choix=event.currentTarget.dataset.choix;
        game(choix);
    });
});


function ia(){
   return  tab[Math.floor(Math.random() *3)];
}
function win(){
    nbreVictoire++;
    afficheVictoire.textContent=nbreVictoire;
    
    resultat.textContent="Victoire";
}

function game(choix){
    choixIA=ia();
    coupDeIA.textContent=choixIA;
    coupJoueur.textContent=choix;
    if(choix==choixIA){
        nbreEgalite++;
        afficheEgalite.textContent=nbreEgalite;
        resultat.textContent="Egalité";
    }else if(choix=="ciseau" && choixIA=="feuille"){
        win();
    }else if(choix=="pierre" && choixIA=="ciseau"){
        win();
    }else if(choix=="feuille" && choixIA=="pierre"){
        win();
    }else{
         resultat.textContent="Perdue";
         nbreDefaite++;
         afficheDefaite.textContent=nbreDefaite;
    }
}