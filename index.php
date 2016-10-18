<!DOCTYPE html>
<html>
	<head>
		<title>CocktailsMania</title>
		<meta charset="UTF-8">
		
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
    <div class="recette">
        <form method="post">
          <h1>Ingrédients</h1>
            <input id="igredients" type="textarea" name="content" placeholder="content">
          <br>
            <input type="button" value="Ok" onclick="ajout_ingredient()">
            <input type="button" value="supprime" onclick="supprime_ingredient()">
        </form>
    </div>
    <div class="recette2">
        <h2>Ingredients</h2>
        <ul id="ingredient1">
        </ul>
    </div>
    <div class="row"></div>
    <div class="recette">
        <form method="post">
          <br>
            <h1>Recette</h1>
          <input id="recette" type="textarea" name="content" placeholder="content">
            <br>
            <select id="Select">
            </select>
            <br>
            <input type="button" value="add" onclick="add_selection()">
            <input type="button" value="delete" onclick="delete_selection()">
        </form>
        <input type="button" value="Ajouter recette" onclick="createRecette()">
    </div>
    <div class="recette2">
        <h2>Recette</h2>
        <ul id="recette1">
        </ul>
            <h2>Les ingrédients choisis</h2>
        <ul id="selection1">
        </ul>

    </div>
        <div class="row"></div>
    <div class="regroupementrecette">
        <ul id="listerecette">
        </ul>
    </div>


    <script src="js/script.js"></script>
</body>
</html>
