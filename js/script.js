// Ajout/supprime ingrédient recette ajout tab for ajout li
var ingredients = ["rhum", "jus de citron", "vin rouge"]
for (var i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
    liste = document.getElementById("ingredient1");
    nouveauli = document.createElement("li");
    nouveauli.innerHTML = ingredients[i];
    liste.appendChild(nouveauli);
}
var recette = [];
var recette_2 = [];
var selection = [];
function ajout_recette() {
    liste = document.getElementById("recette1");
    titre = document.getElementById("recette").value;
    recette_2[recette_2.length] = titre;
    tab2 = recette_2.concat(selection); // tentative avec un join et un concat
    recette[recette.length] = tab2;
    console.log(recette);
    nouveauli = document.createElement("li");
    nouveauli.innerHTML = tab2;
    liste.appendChild(nouveauli); 
}

function supprime_recette() {
    liste = document.getElementById("recette1");
    if (document.getElementsByTagName("li").length > 0) {
        liste.removeChild(liste.lastChild);
        var monTableau = recette;
        var dernier = monTableau.pop();
    }
}

function ajout_ingredient() {
    liste = document.getElementById("ingredient1");
    texte = document.getElementById("igredients").value;
    ingredients[ingredients.length] = texte;
    console.log(ingredients);
    nouveauli = document.createElement("li");
    nouveauli.innerHTML = texte;
    liste.appendChild(nouveauli);
}

function supprime_ingredient() {
    liste = document.getElementById("ingredient1");
    if (document.getElementsByTagName("li").length > 0) {
        liste.removeChild(liste.lastChild);
        var monTableau = ingredients;
        var dernier = monTableau.pop();
    }
}

function add_selection(){
    liste = document.getElementById("selection1");
    var y = document.getElementById("Select").options[0].text; //[0] à défaut pour ledebug
    selection[selection.length] = y;
    console.log(selection);
    nouveauli = document.createElement("li");
    nouveauli.innerHTML = y;
    liste.appendChild(nouveauli);
}
function Select() {
    for (var a = 0; a < ingredients.length; a++) {
        var x = document.getElementById("Select");
        var option = document.createElement("option");
        option.innerHTML = ingredients[a];
        x.add(option);
    }
}
Select();
function delete_selection(){
    liste = document.getElementById("selection1");
    if (document.getElementsByTagName("li").length > 0) {
        liste.removeChild(liste.lastChild);
    }
    var monTableau = selection;
    var dernier = monTableau.pop();
}