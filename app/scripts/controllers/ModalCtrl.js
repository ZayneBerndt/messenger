(function() {
 
     function ModalCtrl(Room, $uibModalInstance) {
       var modal = this;  
         this.createRoom = function() {
             var roomName = document.getElementById('roomName').value;
             Room.add(roomName);
             $uibModalInstance.close();
         };
 
         this.cancel = function () {
             $uibModalInstance.dismiss();
         };
     }
 
     angular
         .module('messenger')
         .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
 })();         
 
