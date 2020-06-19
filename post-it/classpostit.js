class postIt {

    largeur;
    hauteur;
    x;
    y;
    couleurFond;
    couleurTexte;
    titre;
    taille;
    contenu;
    departX;
    departY;
    id;




    constructor(largeur, hauteur, x, y, couleurFond, couleurTexte, titre, taille, contenu, id) {

        this.y = y;
        this.x = x;
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.couleurFond = couleurFond;
        this.couleurTexte = couleurTexte;
        this.titre = titre
        this.taille = taille
        this.id = id
        this.contenu = contenu
        this.departX = 0
        this.departY = 0

    }



    affichePostit() {

        let blocPostit = document.getElementById('post' + this.id)



        if (blocPostit === null) {

            blocPostit = document.createElement('div');
            blocPostit.id = 'post' + this.id;
            blocPostit.addEventListener('click', () => {

                bougePost = !bougePost
                numPostit = this.id
                resizePost = false
                modif = false

            })


        }

        blocPostit.style.width = this.largeur + "px";
        blocPostit.style.height = this.hauteur + "px";
        blocPostit.style.left = this.x + "px";
        blocPostit.style.top = this.y + "px";
        blocPostit.style.position = "absolute";
        blocPostit.style.backgroundColor = this.couleurFond;
        blocPostit.innerHTML = ' '

        blocPostit.classList.add("mesPostit")

        let monTitre = document.createElement('h1')
        monTitre.style.color = this.couleurTexte;
        monTitre.style.fontSize = this.taille + 'px';
        monTitre.innerHTML = this.titre
        blocPostit.appendChild(monTitre)


        let monText = document.createElement('p')
        monText.id = 'text';
        monText.style.backgroundColor = this.couleurFond;
        monText.innerHTML = this.contenu;
        blocPostit.appendChild(monText)

        let divBoutton = document.createElement('div');
        divBoutton.className = 'divB'

        let monBoutonBouge = document.createElement('button')
        monBoutonBouge.className = 'bouton';
        let maValue = document.createElement('i')
        maValue.classList.add("fas")
        maValue.classList.add("fa-arrows-alt")


        let monBoutonSupp = document.createElement('button')
        monBoutonSupp.className = 'bouton';
        let maValue1 = document.createElement('i')
        maValue1.classList.add("fas")
        maValue1.classList.add("fa-trash-alt")


        let monBoutonRedimension = document.createElement('button')
        monBoutonRedimension.className = 'bouton';
        let maValue2 = document.createElement('i')
        maValue2.classList.add("fas")
        maValue2.classList.add("fa-expand-arrows-alt")


        monBoutonRedimension.addEventListener('click', (event) => {

            this.departX = xPos
            this.departY = yPos
            this.largdep = this.largeur
            this.hautdep = this.hauteur
            resizePost = !resizePost
            bougePost = false
            numPostit = this.id
            //console.log(x+' '+y)
            event.stopPropagation()

        })



        let monBoutonEdition = document.createElement('button')
        monBoutonEdition.className = 'bouton';
        let maValue3 = document.createElement('i')
        maValue3.classList.add("fas")
        maValue3.classList.add("fa-edit")

        monBoutonEdition.addEventListener('click', (event) => {

            modif = !modif
            bougePost = false
            event.stopPropagation()
            //console.log(modif)



        })

        let monBoutonTitre = document.createElement('button')
        monBoutonTitre.className = 'bouton';
        let maValue4 = document.createElement('i')
        maValue4.classList.add("fas")
        maValue4.classList.add("fa-text-height")

        monBoutonTitre.addEventListener('click', (event) => {

            titre = !titre
            bougePost = false
            numPostit = this.id
            event.stopPropagation()
            //console.log(titre)



        })


        monBoutonBouge.appendChild(maValue)
        monBoutonSupp.appendChild(maValue1)
        monBoutonRedimension.appendChild(maValue2)
        monBoutonEdition.appendChild(maValue3)
        monBoutonTitre.appendChild(maValue4)



        divBoutton.appendChild(monBoutonBouge)
        divBoutton.appendChild(monBoutonSupp)
        divBoutton.appendChild(monBoutonRedimension)
        divBoutton.appendChild(monBoutonEdition)
        divBoutton.appendChild(monBoutonTitre)



        blocPostit.appendChild(divBoutton)


        document.getElementById('post-it').appendChild(blocPostit)


    }




    bougePostit(newX, newY) {

        this.x = newX
        this.y = newY
       


    }

    taillePostit(newLargeur, newHauteur) {

        this.largeur = newLargeur
        this.hauteur = newHauteur
        
    }

    modifContenu(newContenu) {

        this.contenu = newContenu
        

    }

    modifTitre(newTitre) {

        this.titre = newTitre
        

    }


}


