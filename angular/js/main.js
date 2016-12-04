angular .module("app", [])
        .controller("mainCrtl", ["$scope", function($scope){
           $scope.ingredients = [
                {name:"rhum"},
                {name:"jus de citron"},
                {name:"vin rouge"}
            ];
            $scope.addIng = function() {
                $scope.ingredients.push($scope.textIng);
            }
            $scope.supIng = function(){
                $scope.ingredients.pop({name});
            }
            $scope.selection = [];
            $scope.recette = [];
            $scope.addRec = function(){
                $scope.recette.push($scope.selection + $scope.textRec);
            }
        }]);
