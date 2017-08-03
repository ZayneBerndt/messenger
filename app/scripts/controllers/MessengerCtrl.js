(function() {
    function MessengerCtrl(Room, $uibModal) {
    
        var room = this;
          room.rooms = Room.all;
         
         
         room.newRoom = function() {
             $uibModal.open({
                 templateUrl: '/templates/modal.html',
                 size: 'sm',
                 controller: 'ModalCtrl as modal'
             });
         }
          
      }


angular
    .module('messenger')
    .controller('MessengerCtrl', [ 'Room','$uibModal', MessengerCtrl]);



})();



 
 
 
 