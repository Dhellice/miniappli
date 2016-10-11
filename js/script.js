// Ajout/supprime ingrédient recette ajout tab for ajout li

var ingredients = [];
console.log(ingredients.length);
var recette = [];
console.log(recette.lenght);
var mix =[];
console.log(mix.length);

	function ajout_recette()
    {
            liste = document.getElementById("recette1");
            texte = document.getElementById("recette").value;
            recette[recette.length] = texte;
            console.log(recette);
            nouveauli = document.createElement("li");
            nouveauli.innerHTML = texte;
            liste.appendChild(nouveauli);
            
		}
    function supprime_recette()
    {
        liste = document.getElementById("recette1");
        if (document.getElementsByTagName("li").length > 0)
            {
                liste.removeChild(liste.lastChild);
            }
    }
	function ajout_ingredient()
		{
            liste = document.getElementById("ingredient1");
            texte = document.getElementById("igredients").value;
            ingredients[ingredients.length] = texte;
            console.log(ingredients);
            nouveauli = document.createElement("li");
            nouveauli.innerHTML = texte;
            liste.appendChild(nouveauli);
            
		}
    function supprime_ingredient()
    {
        liste = document.getElementById("ingredient1");
        if (document.getElementsByTagName("li").length > 0)
            {
                liste.removeChild(liste.lastChild);
            }
    }
    function newstab()
    {
        Array.isArray(recette[],ingredients[]);
        console.log(newstab.lenght)
    }