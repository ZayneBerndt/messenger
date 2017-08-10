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
             })
        
               $stateProvider
             .state('signin', {
                 url: '/signin',
                 controller: 'SigninCtrl as signin',
                 templateUrl: '/templates/signin.html'
             });
        
       
     }
    
    
    
     angular
         .module('messenger', ['ui.router', 'firebase', 'ui.bootstrap'])
         .config(config); 
 })();