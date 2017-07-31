(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
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
      this.messages = Message.getByRoomId(this.activeRoom.$id);
      // this.messages.username = blocChatCurrentUser;
    };
  }



  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
