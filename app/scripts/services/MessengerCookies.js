(function() {
  function MessengerCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('MessengerCurrentUser');
    if (!currentUser || currentUser === '') {
  if (!currentUser || currentUser === '') {
         $uibModal.open({
                 templateUrl: '/../../templates/usernameModal.html',
                 size: 'sm',
                 controller: 'ModalCtrl as modal'
             });
    }
  }
  }
  angular
    .module('messenger')
    .run(['$cookies','$uibModal', MessengerCookies]);
})();