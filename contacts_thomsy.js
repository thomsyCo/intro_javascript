// Javascript file for contacts programm activity on Open Class Room nov 2018
// CREER L'objet prototype Contact

var Contact = {
    init : function( nom, prenom) {
        this.nom = nom ;
        this.prenom = prenom;
    },
    
    decrire : function(option) {
        console.log( "\n1  : Lister les contacts" );
        console.log( "2  : Ajouter un contact" );
        console.log( "0  : Quitter" );     
    },
    
    decrireContact : function(contact) {
        var description =  "Nom : " + this.nom + ", prénom : " + this.prenom ;
        return description ;                                 
    },
        
    
    ajouter : function() {   
    var nom = prompt("Entrez le nom de votre contact.");
    var prenom = prompt("Entrez le prénom de votre contact.");
    var nouveauContact = Object.create(Contact);
    nouveauContact.init( nom, prenom);   
    contacts.push(nouveauContact)    
    console.log("votre contact a bien été ajouté. ");
    }  
};


// CREER contacts et tableau de contact

var contact1 = Object.create(Contact);
contact1.init ( "Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init ( "Nelsonne", "Melodie");
var contacts = [ contact1, contact2 ];

//AFFICHER message bienvenue
console.log("Bienvenue dans le gestionnaire de contacts.");

//AFFICHER les options de gestion
Contact.decrire(option);

//AFFICHER la boite choix de l'option
var option = Number(prompt("choisissez votre option."));

//LANCER la boucle des options différentes de 1 , 2 ou 0. 
while ((option !== 1) && (option !== 2) && (option !== 0))  {    
    var option = Number(prompt("choisisez votre option dans la liste !")); 
}
         
//LANCER la boucle des options  1 , 2 ou 0.
while ((option === 1) || (option === 2) || (option === 0)) {
    if (option === 1) {
    console.log("voici la liste de tous vos contacts : \n");
    contacts.forEach(function(contact) {
    console.log(contact.decrireContact()); 
        });   
  } else    
    if ( option === 2) {
    Contact.ajouter();         
  } else {
     ( option === 0) 
        console.log("\nAu revoir !");
        break;
    }
    
    Contact.decrire(option);
    var option = Number(prompt("choisisez votre option."));
    
    // boucle des options différentes de 1 , 2 ou 0. 
    while ((option !== 1) && (option !== 2) && (option !== 0))  {   
    var option = Number(prompt("choisisez votre option dans la liste !"));       
    }   
}
