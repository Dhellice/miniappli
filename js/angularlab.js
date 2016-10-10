var app = angular.module('AngularLab',['ui.router','ngAnimate','ui.materialize','angularUtils.directives.uiBreadcrumbs','factories','ui.tree','LocalStorageModule']);
var serverPort = 8080;
var serverUrl = 'http://localhost:'+serverPort;

//uglifyjs angularlab.js -o angularlab.min.js

var maxLengthOfName = 30;
var maxLengthOfTitle = 72;

//Configuration des états de l'application
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'templates/home.html',
		params:{
			name: 'home'
		},
		controller:'HomeCtrl',
		data: {
			displayName: 'Accueil',
		},
		module:'public'
	});

	$stateProvider.state('login',{
		url:'/login',
		templateUrl:'templates/login.html',
		params:{
			name: 'login'
		},
		controller:'AuthCtrl',
		data: {
			displayName: 'Connexion',
		},
		module:'public'
	})
	$stateProvider.state('edit',{
		url:'/edit',
		templateUrl:'templates/edit.html',
		params:{
			name: 'edit'
		},
		controller:'ReportCtrl',
		data: {
			displayName: 'Edition',
		},
		module:'private'
	})
	$stateProvider.state('reports',{
		url:'/reports',
		templateUrl:'templates/reports.html',
		params:{
			name: 'reports'
		},
		controller:'ReportCtrl',
		data: {
			displayName: 'Reportings',
		},
		module:'private'
	})
	$stateProvider.state('validate',{
		url:'/validate',
		templateUrl:'templates/validate.html',
		params:{
			name: 'validate'
		},
		controller:'ReportCtrl',
		data: {
			displayName :'Consultation'
		},
		module:'private'
	})
	.state('management',{
		url:'/management',
		templateUrl:'templates/management.html',
		controller:'ManageCtrl',
		data:{
			displayName:'Gestion'
		},
		params:{
			name: 'management'
		},
		module:'private'
	});
	$urlRouterProvider.otherwise('home');
}]);
app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider
	.setPrefix('drink_ss_')
	.setNotify(true, true)
});

app.directive('vSpace',function(){
	return{
		template:'<div class="row"><p class="flow-text"></p></div>',
		restrict: 'E'
	}
});
//focus directive
app.directive('myFocus', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			scope.$watch(attr.myFocus, function (n, o) {
				if (n != 0 && n) {
					element[0].focus();
				}
			});
		}
	};
});
//blur directive
app.directive('myBlur', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			element.bind('blur', function () {
				//apply scope (attributes)
				scope.$apply(attr.myBlur);
				//return scope value for focusing to false
				scope.$eval(attr.myFocus + '=false');
			});
		}
	};
});

//Filter d'ordonnancement objets par propriété
app.filter('orderObjectBy', function(){
	return function(input, attribute) {
		if (!angular.isObject(input)) return input;

		var array = [];
		for(var objectKey in input) {
			array.push(input[objectKey]);
		}

		array.sort(function(a, b){
			a = parseInt(a[attribute]);
			b = parseInt(b[attribute]);
			return a - b;
		});

		return array;
	}
});

//Filter d'ordonnancement objets par propriété
app.filter('inArray', function($filter){
    return function(list, arrayFilter, element){
    	var array = [];
    	if(arrayFilter && arrayFilter.length !== 0){
    		for(var i = 0; i < list.length; i++){
	    		for(var j = 0; j < arrayFilter.length; j++){
	    			for(var k = 0; k < list[i].ingredients.length; k++){
	    				//console.log([list[i].ingredients[k], arrayFilter[j]])
		    			if(list[i].ingredients[k] === arrayFilter[j]){
		    				array.push(list[i]);
		    			}
	    			}
	    		}
	    	}
	    	//console.log(array);
    		return array;
    	}
    	else return list;
    	
        /*if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }*/
    };
});
//Enregistre une clé avec une valeur attribué dans le locale storage /!\ Ne pas modifier localStorageService
function submit(localStorageService, key, val){
	return localStorageService.set(key, val);
}
function submitCookie(localStorageService, key, val, cookieDay){
	return localStorageService.cookie.set(key, val, cookieDay);
}
//Récupère la valeur d'une clé du locale storage /!\ Ne pas modifier localStorageService
function getItem(localStorageService, key){
	return localStorageService.get(key);
}
function getCookie(localStorageService, key){
	return localStorageService.cookie.get(key);
}
//Supprime le cookie
function deleteCookie(localStorageService, key){
	return localStorageService.cookie.remove(key);
}

//TEST - Charge en locale toute les tables nécessaires au stockage des informations
//Ne pas éditer localStorageService
//keys [array] : attribuer le nom des clé que vous désirez utiliser
//values [array] : attribue la valeur des clé que vous désirez utiliser
function checkLocalStorage(localStorageService, keys, values){
	for (var i = 0; i < keys.length; i++){
		//Vérification si la clé existe et si elle n'est pas vide
		if(getItem(localStorageService,keys[i]) !== null) console.log('no table to add');
		else{
			//console.log('load table ' + keys[i]);
			submit(localStorageService, keys[i], values[i]);
		}
	}
	//Optionnel : affichage des table dans la console
	/*var lsKeys = localStorageService.keys();
	//console.log(lsKeys);*/
}

function loadTable(localStorageService,table){
	//console.log("table mise à jour " + table);
	return getItem(localStorageService,table);
}

app.controller('MainCtrl',['$scope','$rootScope','db','$interval','$state','$stateParams','localStorageService',function($scope,$rootScope,db,$interval,$state,$stateParams,localStorageService){
	console.log('Main');

}]);

app.controller('ManageCtrl', [
	'$scope',
	'$state',
	'$rootScope',
	'$filter',
	'localStorageService',
	,function($scope,$state,$rootScope,$filter,localStorageService){
	
	}]);

	app.controller('ReportCtrl', ['$q','$scope','$state','$rootScope','reports','sites','branches','users','localStorageService','userRequest',function($q,$scope,$state,$rootScope,reports,sites,branches,users,localStorageService,userRequest){

	}]);

	app.controller('HomeCtrl',['$state','$scope','$rootScope','localStorageService',function ($state,$scope,$rootScope,localStorageService){
		$scope.recipes = [];
		$scope.ingredients = ['Rhum','gin'];
		$scope.item;
		$scope.myItem;
		$scope.recipeIngredients = [];
		$scope.myIngredientsList = [];

		$scope.init = function(){
			console.log('init');
			$scope.recipeName = "";
			$scope.recipeDescription = "";
			$scope.item = "";
			$scope.myItem = "";
			$scope.recipeIngredients = [];
			$scope.myIngredientsList = [];
		}

		$scope.addIngredient = function(){
			if($scope.ingredientName.length > 0 && $scope.ingredientName !== undefined){
				$scope.ingredients.push($scope.ingredientName);
				$('#ingredientModal').closeModal();
			}
		}

		$scope.deleteIngredient = function(ingredient){
			for(var i = 0; i < $scope.ingredients.length; i++){
				if($scope.ingredients[i] === ingredient){
					$scope.ingredients.splice(i, 1);
				}
			}
		}

		$scope.deleteRecipeIngredient = function(ingredient){
			for(var i = 0; i < $scope.recipeIngredients.length; i++){
				if($scope.recipeIngredients[i] === ingredient){
					$scope.recipeIngredients.splice(i, 1);
				}
			}
		}

		$scope.deleteMyIngredient = function(ingredient){
			for(var i = 0; i < $scope.myIngredientsList.length; i++){
				if($scope.myIngredientsList[i] === ingredient){
					$scope.myIngredientsList.splice(i, 1);
				}
			}
		}

		$scope.addToRecipe = function(){
			$scope.recipeIngredients.push($scope.item);
		}

		$scope.submitRecipe = function(){
			var newRecipe = {
				name: $scope.recipeName,
				description: $scope.recipeDescription,
				ingredients: $scope.recipeIngredients
			};
			$scope.recipes.push(newRecipe);
			$('#recipeModal').closeModal();
		}

		$scope.myIngredient = function(){
			$scope.myIngredientsList.push($scope.myItem);
		}

		$scope.init($scope.recipes);
	}]);

	//Test d'affichage des utilisateurs (voir page /test)
	app.controller('UserCtrl',['$scope','$rootScope','$state','localStorageService',function($scope,$rootScope,$state,localStorageService){

	}]);

	//Messagerie
	app.controller('MsgCtrl',['$scope','$rootScope','localStorageService','mail','$state',function($scope,$rootScope,localStorageService,mail,$state){

	}]);

//Authentification front
app.controller('AuthCtrl',['$scope','$state','$http','localStorageService','$window','$location',function($scope,$state,$http,localStorageService,$window,$location){

}]);
