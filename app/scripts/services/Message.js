(function() {
 	function Message($firebaseArray) {
 		var Message = { };
 		
 		var ref = firebase.database().ref().child("Messages");
 		Message.messages = $firebaseArray(ref);
 		//filter messages by roomId
 		Message.getByRoomId = function(roomId) {
 			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
 		}
 		
 		return Message;
 		
 	}
 	angular
 		.module('messenger')
 		.factory('Message', ['$firebaseArray', Message]);
 })(); 