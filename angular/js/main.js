angular .module("app", [])
        .controller("mainCrtl", ["$scope", function($scope){
           $scope.ingredients = [
                {name:"rhum"},
                {name:"jus de citron"},
                {name:"vin rouge"}
               
            ];
            $scope.addIng = function() {
                $scope.ingredients.push({name : $scope.txting});
            }
            $scope.supIng = function(){
                $scope.ingredients.pop({name});
            }
            $scope.tabselection = [];
            $scope.addSelec = function() {
                $scope.tabselection.push({name : $scope.selection});
            }
            $scope.supSelec = function(){
                $scope.tabselection.pop({name});
            }
            $scope.recette = [];
            $scope.addRec = function(){
                $scope.recette.push($scope.selection + $scope.textRec);
            }
            $scope.supRec = function(){
                $scope.recette.pop({name});
            }
        }]);

