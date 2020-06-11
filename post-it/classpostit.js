class postIt { 
    
    largeur; 
    hauteur; 
    x;
    y;
    couleurFond;
    couleurTexte;

    constructor(largeur,hauteur,x,y,couleurFond,couleurTexte){

    this.y=y;
    this.x=x;
    this.hauteur=hauteur;
    this.largeur=largeur;
    this.couleurFond=couleurFond;
    this.couleurTexte=couleurTexte;

    
    }

    affichePostit() {
        let blocPostit = document.createElement('div');
        blocPostit.id='post';
        blocPostit.style.width=this.largeur+"px";
        blocPostit.style.height=this.hauteur+"px";
        blocPostit.style.left=this.x+"px";
        blocPostit.style.top=this.y+"px";
        blocPostit.style.position="fixed";
        blocPostit.style.backgroundColor=this.couleurFond;
        blocPostit.style.color=this.couleurTexte;
    
    
    document.getElementById('post-it').appendChild(blocPostit)
    
    }


 

}