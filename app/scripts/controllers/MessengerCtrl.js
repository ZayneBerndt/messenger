(function() {
    function MessengerCtrl(Room, $uibModal) {
     
    
    this.rooms = Room.all;
        
        this.addRoom = function() {
            $uibModal.open ({
                 templateUrl: '/templates/modal.html',
                 controller: 'ModalCtrl as modal'
            });
     }
    }


angular
    .module('messenger')
    .controller('MessengerCtrl', [ 'Room','$uibModal', MessengerCtrl]);



})();



 
 
 
 