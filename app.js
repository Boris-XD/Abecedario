const contenedor = document.getElementById("contenedor");
const resultado = document.getElementById("resultado");

const arrayABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


let arrayPibote = [...arrayABC];
arrayABC.forEach(element => {
    const rnd  = Math.floor(Math.random() * arrayPibote.length);
    console.log(arrayPibote[rnd]);

    const leter = document.createElement("div");
    leter.textContent = arrayPibote[rnd];
    leter.classList.add("letras");
    contenedor.appendChild(leter);
    const arrayMinificado =  arrayPibote.filter(item => item!=arrayPibote[rnd]);
    arrayPibote = [...arrayMinificado];
});


contenedor.addEventListener("click", e => {
    if(e.target.textContent.length==1){
        console.log(e.target.textContent.length);
        const leter = document.createElement("div");
        leter.textContent = e.target.textContent
        leter.classList.add("letrasSelect");
        resultado.appendChild(leter);
        e.target.classList.add("check");
        //e.target.remove;
    }
});