class postIt { 
    
    largeur; 
    hauteur; 
    x;
    y;
    couleurFond;
    couleurTexte;
    titre;
    taille;
    

    constructor(largeur,hauteur,x,y,couleurFond,couleurTexte,titre,taille,){

    this.y=y;
    this.x=x;
    this.hauteur=hauteur;
    this.largeur=largeur;
    this.couleurFond=couleurFond;
    this.couleurTexte=couleurTexte;
    this.titre=titre
    this.taille=taille
    

    
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

    document.getElementById('post-it').appendChild(blocPostit)
    
    }


 

}