/*let maVoiture = new Voiture('renault','twingoo','bordeau')

console.log(maVoiture.Marque)
console.log(maVoiture.Modele)
console.log(maVoiture.Couleur)
console.log(maVoiture.roule())*/

let maVoiture = [   new Voiture('Renault','Clio','bleue'), 
                    new Voiture('Ford','Focus','rouge'),
                    new Voiture('Honda','Civic','verte')]

for( let i in maVoiture){


    let maLigne = document.createElement('tr')
    maLigne.classList.add('titre')

    let maCellule = document.createElement('td')
    maCellule.classList.add('cel')

    let maCellule1 = document.createElement('td')
    maCellule1.classList.add('cel1')

    let maCellule2 = document.createElement('td')
    maCellule2.classList.add('cel2')

    maCellule.innerHTML=maVoiture[i].Marque

    maCellule1.innerHTML=maVoiture[i].Modele

    maCellule2.innerHTML=maVoiture[i].Couleur

    maLigne.appendChild(maCellule)
    maLigne.appendChild(maCellule1)
    maLigne.appendChild(maCellule2)

    document.getElementById('liste').appendChild(maLigne)



}