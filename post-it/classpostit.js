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
    contenu;
   

    

    constructor(largeur,hauteur,x,y,couleurFond,couleurTexte,titre,taille,largeurZoneText,hauteurZoneText,contenu){

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
    this.contenu=contenu
    
    }

    

    affichePostit(){

    let blocPostit=document.getElementById('post')
   

    if(blocPostit===null){

        blocPostit = document.createElement('div');
        blocPostit.id='post';

    }
    
    blocPostit.style.width=this.largeur+"px";
    blocPostit.style.height=this.hauteur+"px";
    blocPostit.style.left=this.x+"px";
    blocPostit.style.top=this.y+"px";
    blocPostit.style.position="absolute";
    blocPostit.style.backgroundColor=this.couleurFond;
    blocPostit.innerHTML=' '
    

    let monTitre = document.createElement('h1')
    monTitre.style.color=this.couleurTexte;
    monTitre.style.fontSize=this.taille+'px';
    monTitre.innerHTML=this.titre
    blocPostit.appendChild(monTitre)


    let monText=document.createElement('textarea')
    monText.id='text';
    monText.style.width=this.largeurZoneText+'%';
    monText.style.height=this.hauteurZoneText+'%';
    monText.style.backgroundColor=this.couleurFond;
    monText.innerHTML = this.contenu;
    blocPostit.appendChild(monText)

    let divBoutton = document.createElement('div');
    divBoutton.className='divB'

    let monBoutonBouge=document.createElement('button')
    monBoutonBouge.className='bouton';
    let maValue = document.createElement('i')
    maValue.classList.add("fas")
    maValue.classList.add( "fa-arrows-alt")
    

    let monBoutonSupp=document.createElement('button')
    monBoutonSupp.className='bouton';
    let maValue1 = document.createElement('i')
    maValue1.classList.add("fas")
    maValue1.classList.add( "fa-trash-alt")
    

    let monBoutonRedimension=document.createElement('button')
    monBoutonRedimension.className='bouton';
    let maValue2 = document.createElement('i')
    maValue2.classList.add("fas")
    maValue2.classList.add("fa-expand-arrows-alt")
    
    


    let monBoutonEdition=document.createElement('button')
    monBoutonEdition.className='bouton';
    let maValue3 = document.createElement('i')
    maValue3.classList.add("fas")
    maValue3.classList.add("fa-edit")
    


    monBoutonBouge.appendChild(maValue)
    monBoutonSupp.appendChild(maValue1)
    monBoutonRedimension.appendChild(maValue2)
    monBoutonEdition.appendChild(maValue3)



    divBoutton.appendChild(monBoutonBouge)
    divBoutton.appendChild(monBoutonSupp)
    divBoutton.appendChild(monBoutonRedimension)
    divBoutton.appendChild(monBoutonEdition)
    


    blocPostit.appendChild(divBoutton)
    

    document.getElementById('post-it').appendChild(blocPostit)

    
    }




    bougePostit(newX,newY){

        this.x = newX
        this.y =newY

    }

    taillePostit(newLargeur,newHauteur){

        this.largeur=newLargeur
        this.hauteur=newHauteur
    }

    modifContenu(newContenu){

        this.contenu=newContenu

    }




}