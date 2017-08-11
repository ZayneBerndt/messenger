(function() {
    function SigninCtrl($scope , $firebaseAuth) {
    

    
    // Validate email and password   
        
        
        
 
  
//SignUp Button 
function handleSignUp() {       
        
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
        
 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
 })
                                                                       
//SignIn
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

}}
 
angular
    .module('messenger')
    .controller('SigninCtrl', [ SigninCtrl]);

})();