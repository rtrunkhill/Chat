(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    console.log(Room.all);
    this.rooms = Room.all;
    this.activeRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

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
    };

    this.sendMessage = function() {
      this.newMessage.roomId = this.activeRoom.$id;
      this.newMessage.username = this.currentUser;
      Message.send(this.newMessage);
    };

  }



  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
