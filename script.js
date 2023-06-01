const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
/*culorile folosite pt a colora patratelele din body*/
const container = document.querySelector('#board');
/*declaram o constanta pe a genera propriu-zis containerulnostru*/
const SQUARE_NUMBER = 500;
/*declaram o constanta care va stoca nr de elemente pe care vrem sa i-l atribuim constantei container declarate mai sus*/

for(let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div'); /*cream o constanta square care stocheaza un element div*/
    square.classList.add('square');  /*asignam/adaugam clasa square constantei square definita mai sus*/
    square.addEventListener('mouseover', () => setColor(square)); /*implementam functia mouseover care va face hover peste square*/
    square.addEventListener('mouseleave', () => removeColor(square)); /*implementam functia mouseleave care va face leave peste square*/
    container.append(square); /*containerului ii atasam constanta square*/
}

 /*definim mai jos clasele noastre*/
 function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;  /*setam random culoare*/
    element.style.boxShadow = '0 0 2px ${color}, 0 0 10px ${color}';  /*setam random boxShadow*/
 }

 function removeColor(element) {
    element.style.backgroundColor = '#1e1e1e'; /*eliminam culoarea initiala definita in css*/
    element.style.boxShadow = '0 0 2px #000'
 }

  /*generam random niste culori*/
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length); /*cream o constanta index (nr intreg) cu ajutorul caruia sa putem accesa culori din lista tinand cont de lungimea ei*/
    return colors[index];
}