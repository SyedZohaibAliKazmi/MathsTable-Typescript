let inpuForm = document.querySelector("#tableForm") as HTMLFormElement
let input = document.querySelector("#Inp") as HTMLInputElement
let table = document.querySelector(".time-table")as HTMLDivElement

inpuForm?.addEventListener( "submit", function (event) {

event?.preventDefault()

let tableOf:any = input.value;

 table.innerHTML =""

 for(let i = 1; i <=12; i++){
    const Ans = `${tableOf} x ${i} = ${tableOf *i}`
    table.innerHTML += `${Ans} <br>`

 }
 inpuForm.reset()
})