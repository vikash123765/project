const cards = [
    {
        name: " Grå vardag",
        content: "information om bandet ", 
    },
    {
        name: "Simon Lindström",
        content: "annan info om bandet ", 
    },
    {
        name: " Nackspärr",
        content: " mer info om ett nytt bandet ", 
    },
    {
    name: " Servitude",
    content: "sista info om bandet", 
    },

];



const cardElements = cards 
.map((card, index)=> `<div class ="card" onClick= "openModal(${index})"><h2>${card.name}</h2> </div>`)
.join(""); 


document.querySelector("#cards-wrapper").innerHTML= cardElements;



const openModal = (index) => {
    for(x in cards[index]){
        let h3 = document.createElement("H3");
        let p  = document.createElement("P");
        switch(x) {
            case "name":
                h3.innerHTML= cards[index][x]
                document.querySelector(".modal-header").append(h3);
                break ;
                default: 
                p.innerHTML= cards[index][x]
                document.querySelector("#modal-body").append(p);


        } 


    }
    document.querySelector("#modal-wrapper").style.display= "flex" ;
}
const closeModal = () => {
    document.querySelector("#modal-wrapper").style.display = "none";
    document.querySelector("#modal-body").innerHTML= "";
    //document.querySelector(".modal-header").innerHTML= "";
};



