class Voiture { Marque; Modele; Couleur; 

    constructor(marque, modele, couleur) 

    { this.Marque = marque; this.Modele = modele; 

        this.Couleur = couleur; } roule() 

        { return "Vroum vroum"; } get Marque()

         { return "Voiture de marque " + this.Marque; } 

         set Marque(laMarque) { this.Marque = laMarque; } 

         get Modele() 

         { return "Voiture de modele " + this.Modele; } 

         set Modele(leModele) { this.Modele = leModele } }

         