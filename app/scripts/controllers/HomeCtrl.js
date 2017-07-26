(function() {
  function HomeCtrl(Room, $uibModal) {
    console.log(Room.all);
    this.rooms = Room.all;
    this.activeRoom = null;

    this.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    };
    this.setRoom = function(room) {
      this.activeRoom = room;
    };
  };



  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})()
