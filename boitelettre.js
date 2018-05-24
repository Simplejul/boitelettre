var courrier = "lola";

function Habitation(adresse){
    this.adresse = adresse;
    this.bal = {
        courriers: [],
        deposerCourrier: function(courrier){
	        this.courriers.push(courrier);
	        //console.log(this.courriers);
        },
        retirerCourrier: function(){
        	this.courriers = [];
    	}
    }
}
maison1 = new Habitation("Chemin des développeurs");
maison2 = new Habitation("Route de St go");



function Lettre(adresse){
	this.adresse = adresse;
	this.message = "Ceci est une lettre!";
}
lettre1 = new Lettre("Chemin des développeurs");
lettre2 = new Lettre("Route de St go");

maison1.bal.deposerCourrier(lettre1);
maison1.bal.deposerCourrier(lettre2);
console.log(maison1.bal.courriers);

maison1.bal.retirerCourrier();
console.log(maison1.bal.courriers);
