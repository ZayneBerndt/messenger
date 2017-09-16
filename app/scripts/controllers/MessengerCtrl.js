(function() {
    function MessengerCtrl($scope, $cookies, Room, $uibModal, Message) {

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
        
//        this.sendMessage = function(newMessage) {
//        Message.send = (newMessage , this.currentRoomId);
//        
//        }
        $scope.message = Message
    }

angular
    .module('messenger')
    .controller('MessengerCtrl', ['$scope','$cookies', 'Room','$uibModal', 'Message',  MessengerCtrl]);



})();



 
 
 
 