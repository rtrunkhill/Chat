(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log('current user: ' + currentUser);
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/signIn.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
