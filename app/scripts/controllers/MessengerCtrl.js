(function() {
    function MessengerCtrl(Room, $uibModal, Message, $scope) {

        this.rooms = Room.all;
        this.currentRoomId = null;
        console.log(this.rooms)

        this.addRoom = Room.add

        this.setCurrentRoom = function (roomId){
        console.log(roomId)
        this.currentRoomId = roomId
        }
//            
//            this.CurrentRoom = function(room) {
//            room.CurrentRoom = roomName;
//          }
     
        this.setCurrentRoom = function(room) {
        this.currentRoom = room;
        
        };     
        
        this.sendMessage = function(newMessage) {
        Message.send = (newMessage);
        
        }
    }

angular
    .module('messenger')
    .controller('MessengerCtrl', [ 'Room','$uibModal', 'Message',  MessengerCtrl]);



})();



 
 
 
 