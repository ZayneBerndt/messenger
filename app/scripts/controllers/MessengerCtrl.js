(function() {
    function MessengerCtrl(Room, $uibModal, Message) {
    
        this.rooms = Room.all;
        this.currentRoomId = null;
        console.log(this.rooms)


        this.addRoom = Room.add

//        this.showRoom = function(room) {
//            this.currentRoom = room;
//        }
        
        this.setCurrentRoom = function (roomId){
            console.log(roomId)
            this.currentRoomId = roomId
        }
   
    }

angular
    .module('messenger')
    .controller('MessengerCtrl', [ 'Room','$uibModal', 'Message', MessengerCtrl]);



})();



 
 
 
 