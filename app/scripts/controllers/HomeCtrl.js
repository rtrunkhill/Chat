(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    console.log(Room.all);
    this.rooms = Room.all;
    this.activeRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');
    var d = new Date();
    var datestring = ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "-" +
        d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

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
      this.newMessage.sentAt = datestring;
      Message.send(this.newMessage);
    };

  }



  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
