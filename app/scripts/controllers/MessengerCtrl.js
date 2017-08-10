(function() {
    function MessengerCtrl(Room, $uibModal, Message, $scope) {
    
      var room = this;
      room.rooms = Room.all;
      this.currentRoom = room;
  
    };
    
    this.addRoom = function(roomName) {
        firebase.database().ref('rooms/' + roomName).set({
          rooms: roomName  
        
             
             });
       
      }
    
   this.setRoom = function(room) {
   this. currentRoom = room;
   }
         
 


angular
    .module('messenger')
    .controller('MessengerCtrl', [ 'Room','$uibModal', 'Message', MessengerCtrl]);



})();



 
 
 
 