app=angular.module('layoutApp',[]);

app.controller('countCtrl',['$scope',function($scope){
    $scope.dtype="";
    $scope.range=function(total) {
    total = parseInt(total);
    var input=[];
    for (var i=0; i<total; i++) {
      input.push(i);
    }
    return input;
  };
    
    
    
    
}]);


