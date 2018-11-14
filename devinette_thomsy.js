
// Activité 1 Open class room Apprenez à coder avec javascript.

/* Jeu de devinette : programme qui propose à l'utilisateur d'entrer un nombre compris entre 0 et 100.
Six essais sont proposés à l'utilisateur pour trouver le bon nombre. Après chaque essai le programme indique si le nombre à deviner et "plus petit" ou "plus grand" que le nombre entré par l'utilisateur.
Si l'utilisateur devine le bon nombre dans les six essais qui lui sont accordés le programme affiche un message "bravo" sinon le programme s'arrête après la dernière tentative et affiche  "Perdu... la solution était : .." */


// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme


var nombre = Number(prompt("Bienvenue dans ce jeu de devinette !\nEntrez un nombre entre 0 et 100.\n(Vous avez droit à 6 essais.)"));
var tentative = 1 ;

while ( (nombre !== solution) && ( tentative < 6) ) {

    if ( nombre < solution){
    console.log(nombre + " est trop petit");    
    var nombre = Number(prompt(nombre + " est trop petit.\nEssai n° " + ( tentative + 1) + " : " ));   
    }

    else(nombre > solution ){
    console.log(nombre + " est trop grand");    
    var nombre = Number(prompt(nombre + " est trop grand.\nEssai n° " + (tentative + 1) + " : " ));    
    }

    tentative++;
}

if (nombre !== solution){
console.log("Perdu... la solution était " + solution);
alert("Perdu... la solution était " + solution + ".");
}

else {
console.log("Bravo! La solution était " + solution);
console.log("Vous avez trouvé en " + tentative + " essai(s)");
alert("Bravo!");    
}

    