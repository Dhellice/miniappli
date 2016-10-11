<!DOCTYPE html>
	<html>
	<head>
		<title>CocktailsMania</title>
		<meta charset="UTF-8">
		<script src="js/script.js"></script>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
		<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
	</head>
	<body>
    <nav class="navbar navbar-inverse navbar-default navbar-static-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Cocktails</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Ingredients<span class="sr-only">(current)</span></a></li>
        <li><a href="#">Recette</a></li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Contact</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

  <div class="recette">
    <form method="post">
      <br>
    <h1>Recette</h1>
      <input id="recette" type="textarea" name="content" placeholder="content">
      <br>
      <input type="button" value="Ok" onclick="ajout_recette()">
        <input type="button" value="supprime" onclick="supprime_recette()">
      <h1>Ingrédients</h1>
      <input id="igredients" type="textarea" name="content" placeholder="content">
      <br>
        <input type="button" value="Ok" onclick="ajout_ingredient()">
        <input type="button" value="supprime" onclick="supprime_ingredient()">
        <select class="selection" onclick="newstab()">
        <option></option>
        </select>
    </form>
  </div>
<div class="recette2">
    <h2>Recette</h2>
    <ul id="recette1">
        <li>Pouet</li>
    </ul>
    <h2>Ingredients</h2>
    <ul id="ingredient1">
        <li>lol</li>
    </ul>
</div>

<footer class="footer-distributed">

      <div class="footer-left">

        <p class="footer-links">
          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">CocktailsMania</p>

      </div>

      <div class="footer-right">

        <form method="get" action="#">
          <input placeholder="Search our website" name="search" />
          <i class="fa fa-search"></i>
        </form>

      </div>
<script src="js/jquery-latest.js"></script>
<script src="js/bootstrap.min.js"></script>
    </footer>
	</body>
	</html>
