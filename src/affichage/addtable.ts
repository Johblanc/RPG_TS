export function addRow(): void{
    console.log("test addrow");
    const table = document.getElementById("tableau")
    let newElementTr = document.createElement("tr")
    let newElementTh = document.createElement("th")
    let newElementTd1 = document.createElement("td")
    let newElementTd2 = document.createElement("td")
    let newElementTd3 = document.createElement("td")

    newElementTr.appendChild(newElementTh)
    newElementTr.appendChild(newElementTd1)
    newElementTr.appendChild(newElementTd2)
    newElementTr.appendChild(newElementTd3)

    console.log(newElementTr);
    
    table.appendChild(newElementTr)
    
}