(function() {
    function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('messenger', {
                 url: '/messenger',
                 controller: 'MessengerCtrl as messenger',
                 templateUrl: '/templates/messenger.html'
             });
        
       
     }
    
    
    
     angular
         .module('messenger', ['ui.router', 'firebase', 'ui.bootstrap'])
         .config(config); 
 })();