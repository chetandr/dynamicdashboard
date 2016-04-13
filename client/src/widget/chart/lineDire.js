var lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
var lineSeries = ['Series A', 'Series B'];
var lineData = [
  [65, 59, 80, 81, 56, 55, 40],
  [28, 48, 40, 19, 86, 27, 90]
];
chartApp.directive('lineChart', createLineChart);
function createLineChart() {
      return {
        scope: true,
        controller: function($scope) {
          $scope.labels =angular.copy(lineLabels);
          $scope.series=angular.copy(lineSeries);
          $scope.data =angular.copy(lineData);
          },
        templateUrl:  'lineChart.html'
      }
    }
