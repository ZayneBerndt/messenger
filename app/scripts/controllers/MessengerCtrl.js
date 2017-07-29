(function() {
    function MessengerCtrl(Room) {
        
    this.rooms = Room.all;
    
     }


angular
    .module('messenger')
    .controller('MessengerCtrl', [ "Room", MessengerCtrl]);



})();



 
 
 
 