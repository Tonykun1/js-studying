const box=document.getElementById("box");
const input=document.getElementById("Input");
const inputsize=document.getElementById("InputSize")
const backgroungInBox=()=>{
    const color=input.value
    box.style.background=color;
}
const sizeInBox=()=>{
    const sizeBox=inputsize.value
        box.style.width=sizeBox+ "px";
        box.style.height=sizeBox+ "px";
}
input.addEventListener("input",backgroungInBox)
inputsize.addEventListener("input",sizeInBox)