let bougePost=false

let resizePost=false

let modif=false

let titre=false

let creaJaune=false

let tabPostIt=[]

let numPostit


//[a-zA-Z0-9]
// document.cookie = ‘user=Julien’



var xPos 
var yPos


/*function setInterval(() => {


    
}, interval);*/


/* code cours */

document.querySelector(".cookies").addEventListener('click',(event)=>{

    createCookie("test","bordel je ne comprends rien aux cookies",30)

})


window.addEventListener('load',(event)=>{

console.log(readCookie("test")) 

})


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

/* code cours */

document.querySelector(".buttonOption2").addEventListener('click',(event)=>{
    
    creaJaune=!creaJaune
    console.log(creaJaune)
    
    let monPostit = new postIt (275,200,575,100,'yellow','black','A ne pas oublier!',25,'Notes',tabPostIt.length+1)
    
    tabPostIt.push(monPostit)
    monPostit.affichePostit()
   



})

document.querySelector(".buttonOption1").addEventListener('click',(event)=>{
    
    
    
    let monPostit = new postIt (275,200,275,100,'green','black','A ne pas oublier!',25,'Notes',tabPostIt.length+1)
    
    tabPostIt.push(monPostit)
    monPostit.affichePostit()
   



})




document.querySelector(".buttonOption").addEventListener('click',(event)=>{
    
    
    
    let monPostit = new postIt (275,200,675,100,'red','black','A ne pas oublier!',25,'Notes',tabPostIt.length+1)
    
    tabPostIt.push(monPostit)
    monPostit.affichePostit()
   



})



document.querySelector(".buttonOption3").addEventListener('click',(event)=>{
    
    
    
    let monPostit = new postIt (275,200,675,300,'darkblue','black','A ne pas oublier!',25,'Notes',tabPostIt.length+1)
    
    tabPostIt.push(monPostit)
    monPostit.affichePostit()
   



})

document.body.addEventListener('mousemove',(event)=>{

    xPos=event.clientX
     yPos=event.clientY

    
if(bougePost){
    tabPostIt[numPostit-1].bougePostit(xPos-50,yPos-50)
    tabPostIt[numPostit-1].affichePostit()
}

if(resizePost){

    tabPostIt[numPostit-1].taillePostit((+tabPostIt[numPostit-1].largdep)+(+xPos-tabPostIt[numPostit-1].departX),(+tabPostIt[numPostit-1].hautdep)+(+yPos-tabPostIt[numPostit-1].departY))
    tabPostIt[numPostit-1].affichePostit()
    

}



})


document.body.addEventListener('keydown',(event)=>{

modifText=event.key

if(modif){
   
    console.log(event.key)

if(event.key=='Backspace'){
    
//console.log(monPostit.contenu.substr(0,1))

tabPostIt[numPostit-1].modifContenu( tabPostIt[numPostit-1].contenu.substr(0, tabPostIt[numPostit-1].contenu.length-1))



}

else if(event.key=='Enter'){
    
    //console.log(monPostit.contenu.substr(0,1))
    
    tabPostIt[numPostit-1].modifContenu( tabPostIt[numPostit-1].contenu+"<br>")
    
    
    
    }

else{
    tabPostIt[numPostit-1].modifContenu( tabPostIt[numPostit-1].contenu + modifText)
}

tabPostIt[numPostit-1].affichePostit()

}



})

document.body.addEventListener('keydown',(event)=>{

    modifTitre=event.key
    
    if(titre){
       
        //console.log(event.keyCode)
    
    if(event.key=='Backspace'){
        
    //console.log(monPostit.contenu.substr(0,1))
    
    tabPostIt[numPostit-1].modifTitre( tabPostIt[numPostit-1].titre.substr(0, tabPostIt[numPostit-1].titre.length-1))
    
    
    
    }
    
    else{

        tabPostIt[numPostit-1].modifTitre( tabPostIt[numPostit-1].titre + modifTitre)

    }
    
    tabPostIt[numPostit-1].affichePostit()
    
    }
    
    
    
    })












    


