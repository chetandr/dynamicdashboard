var chartApp = angular.module("chartApp", []);
chartApp.service('formService', function('dataService'){
                this.getlable = function() {
                //myData={location:['goa','karnataka'],projects:['aaa','bbb'],age:[10,7]}
               var myData=dataService.getData();
               
                    var dataKeys[]=Object.keys(myData);
                    for(var key in dataKeys){
                        var data[]=myData[key];
                        if(typeof(data[0]!=="number")
                        {
                            $scope.lable[]=data[0];
                            continue;
                        }
                        else
                        {
                            continue;
                        }
                
                    }
				 
				 
                    }
                       
                       
         });  