let bougePost=false

let monPostit = new postIt (275,200,75,100,'yellow','black','Faire L\'exo',25,90,50,'Notes')

monPostit.affichePostit()

monPostit.taillePostit(500,200)
monPostit.modifContenu('- trouver la gestion des addEventListener')
monPostit.modifContenu(monPostit.contenu +'- faire virer julien -')
monPostit.modifContenu(monPostit.contenu +'- retrouver Marc au PMU -')


document.body.addEventListener('mousemove',(event)=>{

    let x=event.clientX
    let y=event.clientY

    console.log(event.clientX,event.clientY)
if(bougePost){
    monPostit.bougePostit(x-50,y-50)
    monPostit.affichePostit()
}

})















    


