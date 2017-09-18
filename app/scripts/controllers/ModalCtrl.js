(function() {
 
    function ModalCtrl($cookies, Room, $uibModalInstance) {
        var modal = this;  
        
        this.createRoom = function() {
            var roomName = document.getElementById('roomName').value;
            Room.add(roomName);
            $uibModalInstance.close();
        };

        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

        this.setCurrentUser = function(username) {
            $cookies.put('messengerCurrentUser', username);
            this.cancel();
        };
    }
 
     angular
         .module('messenger')
         .controller('ModalCtrl', ['$cookies','Room', '$uibModalInstance', ModalCtrl]);
 })();         
 
