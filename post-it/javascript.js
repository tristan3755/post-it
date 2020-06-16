let bougePost=false

let resizePost=false

let modif=false



var xPos 
var yPos
let monPostit = new postIt (275,200,575,100,'yellow','black','A ne pas oublier!',25,90,50,'Notes')

monPostit.affichePostit()


monPostit.modifContenu('- trouver la gestion des addEventListener')
monPostit.modifContenu(monPostit.contenu +'- faire virer julien -')
monPostit.modifContenu(monPostit.contenu +'- retrouver Marc au PMU -')


document.body.addEventListener('mousemove',(event)=>{

    xPos=event.clientX
     yPos=event.clientY

    
if(bougePost){
    monPostit.bougePostit(xPos-50,yPos-50)
    monPostit.affichePostit()
}

if(resizePost){

    monPostit.taillePostit((+monPostit.largdep)+(+xPos-monPostit.departX),(+monPostit.hautdep)+(+yPos-monPostit.departY))
    monPostit.affichePostit()
    

}



})














    


