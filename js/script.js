// Ajout/supprime ingrédient recette

function ajout()
		{
            ingre = document.getElementById("listeingredient");
            ingre = document.getElementById("ingredients").value;
            nouveauli = document.createElement("li");
            nouveauli.innerHTML = ingre;
            liste.appendChild(nouveauli);
		}
    function supprime()
    {
        
        ingre = document.getElementById("listeingredient");
        if (document.getElementsByTagName("li").length > 0)
            {
                liste.removeChild(liste.lastChild);
            }
    }
     
        
        liste = document.getElementById("listerecette");
            texte = document.getElementById("recette").value;