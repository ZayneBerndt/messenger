(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
      
   //add room function    
    Room.add = function(room) {
        room.$add(room);
        
    }
        
    return Room;
   }
  
    

  angular
    .module('messenger')
    .factory('Room', ['$firebaseArray', Room]);
})();
    