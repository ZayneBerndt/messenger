(function() {
 
     function ModalCtrl(Room, $uibModalInstance) {
         
         this.create = function() {
             Room.add(this.newRoom);
             $uibModalInstance.close();
         };
 
         this.cancel = function () {
             $uibModalInstance.dismiss();
         };
     }
 
     angular
         .module('messenger')
         .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
 })();         
 
