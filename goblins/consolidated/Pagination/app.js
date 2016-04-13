var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination']);

app.controller('MainCtrl', [
'$scope', '$http', 'uiGridConstants', function($scope, $http, uiGridConstants) {

  var paginationOptions = {
    pageNumber: 1,
    pageSize: 25,
    sort: null
  };

  $scope.gridOptions = {
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 25,
    useExternalPagination: true,
    useExternalSorting: true,
    columnDefs: [
      { name: 'firstName' },
      { name: 'lastName'  },
      { name: 'Age' },
      { name: 'Country' },
      { name: 'Address'  },
      { name: 'Phone' }
      
    ],
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
        if (sortColumns.length == 0) {
          paginationOptions.sort = null;
            console.log("hello")
        } else {
          paginationOptions.sort = sortColumns[0].sort.direction;
            console.log("hello11")
        }
        getPage();
      });
      gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
        paginationOptions.pageNumber = newPage;
        paginationOptions.pageSize = pageSize;
        getPage();
      });
    }
  };

  var getPage = function() {
    var url;
    switch(paginationOptions.sort) {
      case uiGridConstants.ASC:
        url = 'dataUsers.json';
        break;
      case uiGridConstants.DESC:
        url = 'dataUsers.json';
        break;
      default:
        url = 'dataUsers.json';
        break;
    }

    $http.get(url)
    .success(function (data) {
      $scope.gridOptions.totalItems = 100;
      var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
      $scope.gridOptions.data = data.slice(firstRow, firstRow + paginationOptions.pageSize);
    });
  };

  getPage();
}
]);
