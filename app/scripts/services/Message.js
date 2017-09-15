(function() {
 	function Message($cookies,$firebaseArray) {
 		var Message = {};
 		
 		var ref = firebase.database().ref().child("messages");
 		Message.messages = $firebaseArray(ref);
 		//filter messages by roomId
 		Message.getByRoomId = function(roomId) {
 			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
 		}
 		
        
        Message.send = function(newMessage, currentRoom) {
             var d = new Date();
             var messages = $firebaseArray(ref);
             messages.$add({
                 content: newMessage,
                 sentAt: d.toTimeString(),
                 username: $cookies.get('messengerCurrentUser'),
                 roomID: currentRoom
             })
        }
        
 		return Message;
 		
 	}
 	angular
 		.module('messenger')
 		.factory('Message', ['$cookies','$firebaseArray', Message]);
 })(); 