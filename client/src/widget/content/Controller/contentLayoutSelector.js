var contentApp=angular.module("contentApp",[]);
contentApp.controller('contentCtrl',['$scope',function($scope){
	$scope.imageNET="Images/shalvi.jpg";
	$scope.person={
			imageUrl:"Images/shalvi.jpg",
			firstname:"Shalvi",
			lastname:"Kubal",
			Age:22,
			Country:"India",
			Address:"Brahma-Xelpem,Mapusa 403507",
			Phone:"+91-9823457890"
	};
	
	
	$scope.layout1=true;
	$scope.layout2=false;
	$scope.layout3=false;
	$scope.layout4=false;
	
	$scope.showLayout1=function(){
		$scope.layout1=true;
		$scope.layout2=false;
		$scope.layout3=false;
		$scope.layout4=false;};
		
	$scope.showLayout2=function(){
		$scope.layout2=true;
		$scope.layout1=false;
		$scope.layout3=false;
		$scope.layout4=false;};
		
	$scope.showLayout3=function(){
		$scope.layout3=true;
		$scope.layout2=false;
		$scope.layout1=false;
		$scope.layout4=false;};
		
	$scope.showLayout4=function(){
		$scope.layout4=true;
		$scope.layout2=false;
		$scope.layout3=false;
		$scope.layout1=false;};
	
		$scope.json={
				"cols": [
					"firstname",
					"lastname",
					"Age",
					"Country",
					"Address",
					"Phone",
					"Profilepic"
				],
				"data": [
					[
						"Chelsea",
						"Grimes",
						43,
						"Gambia",
						"Ap #226-5196 Arcu Road",
						"201-0068",
						"Images/shalvi.jpg"
					],
					[
						"Galvin",
						"Miles",
						28,
						"Bahamas",
						"P.O. Box 320, 2224 Ut, Rd.",
						"490-5286",
						"Images/shalvi.jpg"
					],
					[
						"Joy",
						"Bond",
						21,
						"Syria",
						"1879 Nunc Ave",
						"256-3778",
						"Images/shalvi.jpg"
					],
				]
			};
}])