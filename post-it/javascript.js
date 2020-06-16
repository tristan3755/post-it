let bougePost=false

let resizePost=false

let modif=false

let titre=false



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


document.body.addEventListener('keydown',(event)=>{

modifText=event.key

if(modif){
   
    //console.log(event.keyCode)

if(event.key=='Backspace'){
    
//console.log(monPostit.contenu.substr(0,1))

monPostit.modifContenu(monPostit.contenu.substr(0,monPostit.contenu.length-1))



}

else{
    monPostit.modifContenu(monPostit.contenu + modifText)
}

monPostit.affichePostit()

}



})

document.body.addEventListener('keydown',(event)=>{

    modifTitre=event.key
    
    if(titre){
       
        //console.log(event.keyCode)
    
    if(event.key=='Backspace'){
        
    //console.log(monPostit.contenu.substr(0,1))
    
    monPostit.modifTitre(monPostit.titre.substr(0,monPostit.titre.length-1))
    
    
    
    }
    
    else{
        monPostit.modifTitre(monPostit.titre + modifTitre)
    }
    
    monPostit.affichePostit()
    
    }
    
    
    
    })












    


