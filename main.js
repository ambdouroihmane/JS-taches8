let tr = document.querySelector("#tr");
let tr1 = document.querySelector("#tr1");
let tr2 = document.querySelector("#tr2");
let tr3 = document.querySelector("#tr3");

let tab1 = [];
let newTab1 = [];
let tab2 = [];

// Saisie du tableau 1 par l'utilisateur
for(let i=0; i<5; i++){
    let a = parseInt(prompt("Saisie un nombre pour le tableau 1"));
    if(!isNaN(a)){
        tab1.push(a);
    }
}

// Saisie du tableau 2 par l'utilisateur
for(let i=0; i<5; i++){
    let a = parseInt(prompt("Saisie un nombre pour le tableau 2"));
    if(!isNaN(a)){
        tab2.push(a);
    }
}



// filtre de nombre positif du tableau 1 pour l'ajouter sur newTab
newTab1 = tab1.filter((element) => element >= 0);

// Affichage des tableau
afficheTableau(tab1,tr);
afficheTableau(tab2,tr1);
afficheTableau(newTab1,tr2)


// Remplacer les éléments de tab 2 par 0 sans utiliser le boucle
tab2 = tab2.map((element) => element * 0);
afficheTableau(tab2,tr3);

// fonction Affiche Tableau
function afficheTableau(tab,div){
    let ta = "";
    tab.map((x) => {
        ta += `
            <td class="fs-3 fw-semibold">${x}</td>
        `;
    })
    div.innerHTML = ta;
}