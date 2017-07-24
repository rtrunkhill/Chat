(function() {
  function ModalCtrl(Room, $uibModalInstance) {
    this.cancel = function() {
      $uibModalInstance.dismiss();
    };
    this.submit = function() {
      Room.add();
      $uibModalInstance.close()
    };

  }

  angular
  .module('blocChat', ['ui.bootstrap'])
  .controller('ModalCtrl', ['Room', $uibModalInstance, ModalCtrl]);
})();

// will need a submit and cancel button
