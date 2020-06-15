let bougePost=false

let resizePost=false
let x 
let y
let monPostit = new postIt (275,200,575,100,'yellow','black','Faire L\'exo',25,90,50,'Notes')

monPostit.affichePostit()


monPostit.modifContenu('- trouver la gestion des addEventListener')
monPostit.modifContenu(monPostit.contenu +'- faire virer julien -')
monPostit.modifContenu(monPostit.contenu +'- retrouver Marc au PMU -')


document.body.addEventListener('mousemove',(event)=>{

     x=event.clientX
     y=event.clientY

     console.log(y+' '+x)
if(bougePost){
    monPostit.bougePostit(x-50,y-50)
    monPostit.affichePostit()
}

if(resizePost){

    monPostit.taillePostit(x/*-monPostit.departX*/,y/*-monPostit.departY*/)
    monPostit.affichePostit()

}



})














    


