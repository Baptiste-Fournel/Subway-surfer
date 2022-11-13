let perso = 1
const key ="character"

function addPerso() {
    const button = document.getElementById("jouer");
    const perso = document.getElementById("container");
    if(!sessionStorage.getItem('Playing')){
        button.addEventListener("click", () => {
            sessionStorage.setItem('Playing', true);
            button.style.display="none";
            perso.style.display="flex";
            perso.style.flexDirection="column-reverse"
        });
    } else {
        button.style.display="none";
        perso.style.display="flex";
        perso.style.flexDirection="column-reverse"
    };
}


function changePerso(select) {
    const image = document.getElementsByName("imgPerso")[0];
    image.setAttribute("src", "images/"+select.value+".png" )
    image.setAttribute("alt", select.value)
    image.setAttribute("id", (select.value).toLowerCase()+"Img")
    image.setAttribute("class", (select.value).toLowerCase()+"Img")
}


function nvPerso(select) {
    const divCardContainer = document.getElementById("cardcontainer")
    const cardToAdd = document.getElementById("exampleCard")

    const cardWillBeAdded = cardToAdd.cloneNode(true);

    const image = cardWillBeAdded.getElementsByTagName("img")[0]

    image.setAttribute("src", "images/"+select.value+".png" )
    image.setAttribute("alt", select.value)
    image.setAttribute("id", (select.value).toLowerCase()+"Img")
    image.setAttribute("class", (select.value).toLowerCase()+"Img")

    cardWillBeAdded.classList.remove("hidden")

    divCardContainer.appendChild(cardWillBeAdded)
}

function deletePerso(select) {
    const divCardContainer = document.getElementById("cardcontainer")
    const cardSelect = document.getElementById("exampleCard")
    
    divCardContainer.removeChild(cardSelect)
}




