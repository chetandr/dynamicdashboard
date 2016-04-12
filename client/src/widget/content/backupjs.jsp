<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="contentApp">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Insert title here</title>
	 <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	
	<!-- Latest compiled JavaScript -->
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	
	<script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular.min.js"></script>
	<script src="Controller/contentLayoutSelector.js"></script>
	 <link rel="stylesheet" href="Css/modalStyle.css"></link> 
	<style>
		
	</style>
</head>
<body ng-controller="contentCtrl">
	<div class="container" align="center">
	  <div class="panel panel-primary">
	      <div class="panel-heading"> <h2>Choose Content Layout</h2></div>
      </div>
	  	<div class="panel panel-default">
	  		<div class="panel-body" align="center" >           
	 			 <img src="Images/l1.png" title="Content below and image above" class="img-thumbnail" alt="Cinque Terre" width="80" height="80" ng-click="showLayout1()" > &nbsp;&nbsp;&nbsp;&nbsp;
	 			 <img src="Images/l2.png" title="Content left and image right"  class="img-thumbnail" alt="Cinque Terre" width="80" height="80" ng-click="showLayout2()" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	 			 <img src="Images/l3.png" title="Content only"  class="img-thumbnail" alt="Cinque Terre" width="80" height="80" ng-click="showLayout3()" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	 			 <img src="Images/l4.png" title="Image only"  class="img-thumbnail" alt="Cinque Terre" width="80" height="80" ng-click="showLayout4()" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	 		</div>
		</div>
		 <div class="panel panel-primary">
	      <div class="panel-heading">Search Entry:<input type="text" ng-model="searchString" style="color: black;"></div>
      </div>
		<div>
		
				<div ng-show="layout1" ng-repeat="employee in json.data |filter:searchString">
				<div class="panel panel-default">
				<div class="panel panel-primary">
				
				 <input type="text" ng-model="employee[6]"/>
				 
	          		<div class="card">
						  <img class="card-img-top" ng-src={{employee[6]}} alt="Card image cap" data-toggle="modal" data-target="#myModal" ng-init="modalindex=$index">
					</div>
					<h4 class="card-title">{{employee[0]}} &nbsp;{{employee[1]}}</h4>
					<p class="card-text">Hi my name is  {{employee[0]}} &nbsp;{{employee[1]}}.I am {{employee[2]}}years old. I am proud persistent employee. <br><br>
						I am from {{employee[3]}}.<br>
						My permamnent Address is {{employee[4]}}.<br><br>
						Please contact me on:{{employee[5]}}.
					</p>	
				</div>	
				</div>
	          	</div>
	          	<div ng-show="layout2" ng-repeat="employee in json.data|filter:searchString">
	          	<div class="panel panel-default">
				<div class="panel panel-primary">
		          	<div class="container-fluid">
	  					<div class="row content">
		  					<div class="col-sm-3">
		  						 <div class="card-block">
									    <h4 class="card-title">{{employee[0]}} &nbsp;{{employee[1]}}</h4>
									    <p class="card-text">Hi my name is {{employee[0]}} &nbsp;{{employee[1]}}.I am {{employee[2]}}years old. I am proud persistent employee. <br><br><br><br>
											I am from {{employee[3]}}.<br>
											My permamnent Address is {{employee[4]}}.<br><br><br>
											Please contact me on:{{employee[5]}}.
										</p>							 
								</div>
							</div>
							
							<div class="col-sm-9">
								<div class="card">
									  <img class="card-img-top" src="{{employee[6]}}" alt="Card image cap" data-toggle="modal" data-target="#myModal">
								</div>
							</div>
						</div>
					</div>
					</div>
					</div>
	          	</div>
	          	<div ng-show="layout3" ng-repeat="employee in json.data|filter:searchString">
	          	<div class="panel panel-default">
				<div class="panel panel-primary">
	          		<div class="card">
						  <div class="card-block">
						    <h4 class="card-title">{{employee[0]}} &nbsp;{{employee[1]}}</h4>
						 				<p class="card-text">Hi my name is {{employee[0]}} &nbsp;{{employee[1]}}.I am {{employee[2]}}years old. I am proud persistent employee. <br><br><br><br>
											I am from {{employee[3]}}.<br>
											My permamnent Address is {{employee[4]}}.<br><br><br>
											Please contact me on:{{employee[5]}}.
										</p>							 
						  </div>
					</div>
				</div>
				</div>
	          	</div>
	          	<div ng-show="layout4" ng-repeat="employee in json.data|filter:searchString">
	          	<div class="panel panel-default">
				<div class="panel panel-primary">
	          		<div class="card">
						  <img class="card-img-top" src="{{employee[6]}}" alt="Card image cap" data-toggle="modal" data-target="#myModal">
					</div>
					<h4 class="card-title">{{employee[0]}} &nbsp;{{employee[1]}}</h4>			
	          	</div>
	          	</div>
	          	</div>
		</div> 
			<!-- Modal for layout1-->
	  <!-- <div class="modal modal-lfade" id="myModal" role="dialog" >
	    <div class="modal-dialog">
	      Modal content
	      <div class="modal-content">
	        <div class="modal-header">
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	          <h4 class="modal-title">Welcome to my world!</h4>
	        </div>
	        <div class="modal-body">
	          	<div ng-show="layout1">
					<h4 class="card-title" >{{modalindex}}</h4>
					
					<input type="text" ng-model="imageNET"/>	
	          	</div>
	          	<div ng-show="layout2">
		          	<div class="container-fluid">
	  					<div class="row content">
		  					<div class="col-sm-3">
		  						 <div class="card-block">
									   <h4 class="card-title">{{employee[0]}} &nbsp;{{employee[1]}}</h4>
									    <input type="text" ng-model="imageNET"/>						 
								</div>
							</div>
							
							<div class="col-sm-9">
								<div class="card">
									  <img class="card-img-top" src="{{person.imageUrl}}" alt="Card image cap">
								</div>
							</div>
						</div>
					</div>
	          	</div>
	          	<div ng-show="layout3">
	          		<div class="card">
						  <div class="card-block">
						    <h4 class="card-title">{{employeee[0]}} &nbsp;{{employee[1]}}</h4>
						    <input type="text" ng-model="imageNET"/>							 
						  </div>
					</div>
	          	</div>
	          	<div ng-show="layout4">
	          		<div class="card">
						  <img class="card-img-top" src="{{person.imageUrl}}" alt="Card image cap">
					</div>
					<h4 class="card-title">{{employee[0]}} &nbsp;{{employee[1]}}</h4>		
					<input type="text" ng-model="imageNET"/>
	          	</div>
	        </div>
	        <div class="modal-footer">
	          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        </div>
	      </div> 
	    </div>
	  </div>
	   -->
	</div>

	
</body>
</html>