(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        
        var modal = this;

         this.close = function() {
             $uibModalInstance.dismiss();
         };
 
         modal.createRoom = function () {
             var roomName = document.getElementById('roomName').value;
             Room.add(roomName);
              $uibModalInstance.close();
         };
     }

angular
         .module('messenger')
         .controller('ModalCtrl', ['Room', '$uibModalInstance',  ModalCtrl]);
 })();         
 
