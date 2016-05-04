var barLabels = ["January", "February", "March", "April", "May", "June", "July"];
var barSeries = ['Series A', 'Series B','Series c'];
var barData = [
  [65, 59, 80, 81, 56, 55, 40],
  [28, 48, 40, 19, 86, 27, 90],
  [28, 48, 40, 19, 86, 27, 90]
];

chartApp.directive('barChart', createBarChart);
function createBarChart() {
      return {
        scope: true,
        controller: function($scope) {
          $scope.labels =angular.copy(barLabels);
          $scope.series =angular.copy(barSeries);
          $scope.data =angular.copy(barData);
          $scope.onClick = function (points, evt) {  console.log(points, evt);  };
        },
        templateUrl:  'barchart.html'
      }
    }
