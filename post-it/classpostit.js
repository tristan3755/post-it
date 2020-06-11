class postIt { 
    
    largeur; 
    hauteur; 
    x;
    y;
    couleurFond;
    couleurTexte;
    titre;
    taille;
    largeurZoneText;
    hauteurZoneText;
   

    

    constructor(largeur,hauteur,x,y,couleurFond,couleurTexte,titre,taille,largeurZoneText,hauteurZoneText){

    this.y=y;
    this.x=x;
    this.hauteur=hauteur;
    this.largeur=largeur;
    this.couleurFond=couleurFond;
    this.couleurTexte=couleurTexte;
    this.titre=titre
    this.taille=taille
    this.largeurZoneText=largeurZoneText
    this.hauteurZoneText=hauteurZoneText
    
    

    
    }

    

    affichePostit(){

    let blocPostit = document.createElement('div');
    blocPostit.id='post';
    blocPostit.style.width=this.largeur+"px";
    blocPostit.style.height=this.hauteur+"px";
    blocPostit.style.left=this.x+"px";
    blocPostit.style.top=this.y+"px";
    blocPostit.style.position="fixed";
    blocPostit.style.backgroundColor=this.couleurFond;
    

    let monTitre = document.createElement('h1')
    monTitre.style.color=this.couleurTexte;
    monTitre.style.fontSize=this.taille+'px';
    monTitre.innerHTML=this.titre
    blocPostit.appendChild(monTitre)


    let monText=document.createElement('textarea')
    
    monText.style.width=this.largeurZoneText+'%';
    monText.style.height=this.hauteurZoneText+'%';
    monText.style.backgroundColor=this.couleurFond;
    

    blocPostit.appendChild(monText)


    
    document.getElementById('post-it').appendChild(blocPostit)
    
    }


 

}