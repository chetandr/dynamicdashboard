var chartApp = angular.module("chartApp");
chartApp.service('dataService',function($scope,$http){
    $scope.getData=function(){
        $http.get("chartData.json").then(function(response){
            $scope.myData=response.data;
        })
    }
})