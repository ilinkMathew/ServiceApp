(function(){
    
var myServiceApp = angular.module("myServiceApp",['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    
    $routeProvider.when('/Create', {
     templateUrl:'templates/Create.html',
     controller:"createController"
     }).
     when('/LookUp', {
         templateUrl:'templates/LookUp.html',
         controller:"lookupController"
     }).
     when('/Fix', {
         templateUrl:'templates/Fix.html'
     }).
     otherwise({
         redirectTo:'/'
     });
}])
.controller('createController',['$scope',function($scope){
   var show = false;
    $scope.preview= false;
      console.log("create controller!!!1");
    $scope.showPreview = function(){
  $scope.preview =!$scope.preview ;  
  console.log("You called me!!");        
  console.log("show value " +$scope.preview );
    };    
}])
.controller('lookupController',['$scope',function($scope){
  var compNumb = 1;
    console.log("lookup controller!!!");
    $scope.panelPreview = false;
    $scope.alertPreview = false;
    $scope.searchComplaint = function(number){
      
        if ( parseInt(number) === compNumb){
              $scope.panelPreview = true;
          $scope.CompliantInfo = {
              ProdName : "Prestige" ,
              ProdDes :"Mixie"
          };
         $scope.Status = "Fixed";
          $scope.Resolution = [ {
              spare :"Cupler",
              price : 10
          },
            {
              spare :"Bush",
              price:20    
                            } ];
          
      }
     else{
         console.log("Complaint not found!");
        $scope.alertPreview = true;
     }
    };
 $scope.clearSearch = function(){
     console.log("clearSearch function ");
      $scope.panelPreview = false;
     $scope.cmpNumber = null;
     $scope.alertPreview = false;
 };    
    
}])
.controller('fixController',['$scope',function($scope){
   console.log("fix controller!");
 var cmp = 1 // dummy value 
 
    $scope.complaintNumber = 1;   
 
    
    $scope.spares = [];
$scope.total = 0;    
if($scope.spares.length === 0)
    $scope.spareInfoView = false;
    else
        $scope.spareInfoView = true;

$scope.addSpare = function(spare,price){
    console.log("add Spare function!!!");
    
    var temp = { 
        Spare :spare,
        Price : parseInt(price)  };
    $scope.spares.push(temp);
    $scope.spareInfoView = true;
    $scope.spare = null;
    $scope.price = null;
    $scope.total+= parseInt(price);
};

$scope.removeSpare = function(){
    console.log("remove function");
 var temp  =  $scope.spares.pop();
    console.log(temp);
    
    if($scope.spares.length === 0){
    $scope.spareInfoView = false;
    $scope.total = 0;
    }
    else{
        $scope.spareInfoView = true;
    $scope.total -= parseInt(temp.Price) ;
    }

};    

}]);



})();













