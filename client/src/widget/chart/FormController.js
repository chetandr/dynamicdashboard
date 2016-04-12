var chartApp = angular.module('chartApp',[]);

chartApp.controller('formPieChartCntrl',['$scope',function($scope){
  //  $scope.dataLabel = formService.getlable();    
    $scope.dataLabel = ['location','projects'];
}])

