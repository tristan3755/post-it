let bougePost=false

let resizePost=false

let modif=false



var xPos 
var yPos


let monPostit = new postIt (275,200,575,100,'yellow','black','A ne pas oublier!',25,'Notes')

monPostit.affichePostit()



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


document.body.addEventListener('keypress',(event)=>{

modifText=event.key

if(modif){
    monPostit.modifContenu(monPostit.contenu + modifText)
    

if(event.key=="Backspace"){

String.length(monPostit.modifContenu(monPostit.contenu + modifText)-1)

}

monPostit.affichePostit()

}



})














    


