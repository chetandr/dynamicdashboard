
var pieLabels = ["January", "February", "March", "April", "May", "June", "July"];
var pieData =[28, 48, 40, 19, 86, 27, 90];

chartApp.directive('pieChart', createPieChart);
function createPieChart() {
      return {
        scope: true,
        controller: function($scope) {
          $scope.labels =angular.copy(pieLabels);
          $scope.data =angular.copy(pieData);
          },
        templateUrl:  'pieChart.html'
      }
    }
