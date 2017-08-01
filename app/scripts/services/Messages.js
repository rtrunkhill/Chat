(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
      messages.$add(newMessage);
      newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
      console.log(newMessage.sentAt);
    };

    return Message;

  }

  angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message]);
})();
