var app = angular.module('app', ['ui.grid']);

app.controller('TableCrtl', ['$scope', function ($scope) {

        var myDummyData = [
                   		{
                			firstname:'Chelsea',
                			lastname:'Grimes',
                			Age:43,
                			Country:'Gambia',
                			Address:'Ap #226-5196 Arcu Road',
                			Phone:'201-0068'
                		},
                		{
                			firstname:'Galvin',
                			lastname:'Miles',
                			Age:28,
                			Country:'Bahamas',
                			Address:'P.O. Box 320, 2224 Ut, Rd.',
                			Phone:'490-5286'
                		},
                		{
                			firstname:'Joy',
                			lastname:'Bond',
                			Age:21,
                			Country:'Syria',
                			Address:'1879 Nunc Ave',
                			Phone:'256-3778'
                		},
                		{
                			firstname:'Clark',
                			lastname:'Glover',
                			Age:40,
                			Country:'Saint Pierre and Miquelon',
                			Address:'5566 Pede. St.',
                			Phone:'1-132-540-7467'
                		},
                		{
                			firstname:'Judah',
                			lastname:'Moreno',
                			Age:43,
                			Country:'Bermuda',
                			Address:'8194 Vestibulum Street',
                			Phone:'973-0483'
                		},
                		{
                			firstname:'Byron',
                			lastname:'Fletcher',
                			Age:26,
                			Country:'Grenada',
                			Address:'Ap #564-6055 Nam Ave',
                			Phone:'1-759-539-5637'
                		},
                		{
                			firstname:'Marvin',
                			lastname:'Cleveland',
                			Age:21,
                			Country:'Singapore',
                			Address:'2561 Aliquam Avenue',
                			Phone:'456-9934'
                		},
                		{
                			firstname:'Libby',
                			lastname:'Jordan',
                			Age:42,
                			Country:'Ireland',
                			Address:'4301 Nunc. Rd.',
                			Phone:'645-6100'
                		},
                		{
                			firstname:'Yael',
                			lastname:'Hudson',
                			Age:33,
                			Country:'Mongolia',
                			Address:'Ap #268-3973 Fringilla Av.',
                			Phone:'496-2580'
                		},
                		{
                			firstname:'Eagan',
                			lastname:'Norman',
                			Age:32,
                			Country:'Reunion',
                			Address:'7310 Vehicula Av.',
                			Phone:'1-781-542-7647'
                		},
                		{
                			firstname:'Dara',
                			lastname:'Zamora',
                			Age:29,
                			Country:'Germany',
                			Address:'340-2397 Tincidunt Rd.',
                			Phone:'637-8100'
                		},
                		{
                			firstname:'Linus',
                			lastname:'Barrera',
                			Age:40,
                			Country:'Ukraine',
                			Address:'6139 Arcu. St.',
                			Phone:'1-520-173-9206'
                		},
                		{
                			firstname:'Aretha',
                			lastname:'Montgomery',
                			Age:35,
                			Country:'Saint Helena, Ascension and Tristan da Cunha',
                			Address:'824-772 Ridiculus Avenue',
                			Phone:'1-547-599-5394'
                		},
                		
                		{	firstname:'Maisie',
                			lastname:'Sanchez',
                			Age:28,
                			Country:'Mayotte',
                			Address:'P.O. Box 154, 3166 Odio, Rd.',
                			Phone:'1-933-850-2070'
                		},
                		{
                			firstname:'Fitzgerald',
                			lastname:'Coffey',
                			Age:31,
                			Country:'Honduras',
                			Address:'Ap #579-1589 In Rd.',
                			Phone:'1-585-913-3709'
                		},
                		{
                			firstname:'Danielle',
                			lastname:'Hester',
                			Age:44,
                			Country:'Togo',
                			Address:'P.O. Box 521, 2975 Non Avenue',
                			Phone:'1-325-716-4370'
                		},
                		{
                			firstname:'Hayley',
                			lastname:'Gilliam',
                			Age:36,
                			Country:'Greece',
                			Address:'P.O. Box 413, 1460 Dui, Av.',
                			Phone:'163-4701'
                		},
                		{
                			firstname:'Holly',
                			lastname:'Rowe',
                			Age:40,
                			Country:'Lebanon',
                			Address:'Ap #406-7357 Mauris Rd.',
                			Phone:'346-3330'
                		},
                		{
                			firstname:'Valentine',
                			lastname:'Roberson',
                			Age:30,
                			Country:'Madagascar',
                			Address:'116-6273 Orci. Road',
                			Phone:'828-2583'
                		}
                ]
        
        $scope.filterOptions = {
            filterText: ''
        };
        
        $scope.gridOpts = {
            data: myDummyData,
            enableFiltering: true,
            columnDefs: [
                        {name: 'First Name', field: 'firstname', enableFiltering: true
                            , filter: {
                                term: $scope.filterOptions.filterText 
                            }
                        },
                        {name: 'Last Name', field: 'lastname'},
                        {name: 'Age', field: 'Age'},
                        {name: 'Country', field: 'Country'},
                        {name: 'Address', field: 'Address'},
                        {name: 'Phone', field: 'Phone'}
                    ]
        };    
    }]);


                