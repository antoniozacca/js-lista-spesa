'use strict';
const listaDellaSpesa = ["pasta", "zucchine", "patate", "fagioli", "carne"];
let i = 0;
let ul = document.getElementById('lista');
while (i < listaDellaSpesa.length ) {
    const li = document.createElement("li");
    li.innerText = listaDellaSpesa[i];
    ul.append(li);
    i++;
}