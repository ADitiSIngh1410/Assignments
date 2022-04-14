let panel1=document.getElementById("panel-1")
let panel2=document.getElementById("panel-2")
let panel3=document.getElementById("panel-3")
let panel4=document.getElementById("panel-4")
let panel5=document.getElementById("panel-5")
let panel6=document.getElementById("panel-6")

function resetActivePanel(){
    panel1.classList.remove('active')
    panel2.classList.remove('active')
    panel3.classList.remove('active')
    panel4.classList.remove('active')
    panel5.classList.remove('active')
    panel6.classList.remove('active')
}
function selectPanel(panelId){
   resetActivePanel()
   document.getElementById(panelId).classList.add('active');
}