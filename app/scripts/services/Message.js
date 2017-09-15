(function() {
 	function Message($firebaseArray) {
 		var Message = {};
 		
 		var ref = firebase.database().ref().child("Messages");
 		Message.messages = $firebaseArray(ref);
 		//filter messages by roomId
 		Message.getByRoomId = function(roomId) {
 			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
 		}
 		
        
        Message.send = function(newMessage) {
             var messages = $firebaseArray(ref);
             messages.$add({
                 content: newMessage,
                 sentAt: '1:43 pm',
                 username: 'Zayne',
                 roomID: '-Kh8c8l6gU_I5f_2BSjQ'
             })
        }
        
 		return Message;
 		
 	}
 	angular
 		.module('messenger')
 		.factory('Message', ['$firebaseArray', Message]);
 })(); 