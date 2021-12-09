const cards = [
    {
        name: " Grå vardag",
        content: "Grå Vardag bildades 2016 i ren frustration mot samhället och dess kapitalistiska och egoistiska människor. De fem medlemmarna som är bosatta i Linköping/Norrköping ser punken som sin enda utväg från den vardagliga tristessen och finner sin inspiration i det verkliga livet där översittare och skithögar tar alldeles för stor plats! Med en energifylld och rak punkrock levererar bandet samhällskritiska texter, ganska ofta riktade mot problemen i vardagen, sociala medier och det kapitalistiska systemet. ", 
    },
    {
        name: "Simon Lindström",
        content: "Solo artist från Lidköping med insperation från Håkan hällström och Lars vinebäck ", 
    },
    {
        name: " Nackspärr",
        content: " Punkband från Norrköping som spelar svensk trallpunk", 
    },
    {
    name: " Servitude",
    content: " Servitude är ett progressivt metalband som bildades i Motala Östergötland 2019. Bandet är starkt inspirerat av den amerikanska och svenska progscenen. Band som tex Dream Theater, Pain of Salvation och Symphony X är stora inspirationskällor som formar Servitudes låtskrivande. Bandet tänker gärna utanför ramarna och går efter mottot More is more och menar att alla låtar under fem minuter bara är ett intro.", 
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
    
    document.querySelector(".modal-header").innerHTML=` <span onClick="closeModal()"> X </span> `;
};





