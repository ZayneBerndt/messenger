(function() {
 	function Message($cookies,$firebaseArray) {
 		var Message = {};
 		
 		var ref = firebase.database().ref().child("messages");
 		Message.messages = $firebaseArray(ref);
 		//filter messages by roomId
        console.log(Message.messages)
 		Message.getByRoomId = function(roomId) {
 			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
 		}
 		
        
        Message.send = function(newMessage, currentRoomID) {
            console.log("sending")
             var d = new Date();
//             var messages = $firebaseArray(ref);
//             Message.messages.$add({
//                 content: newMessage,
//                 sentAt: d.toTimeString(),
//                 username: $cookies.get('messengerCurrentUser'),
//                 roomID: currentRoomID
//             })
                Message.messages.$add({
                 content: "",
                 sentAt: 12345,
                 username: 'toast',
                 roomID: 'fbhjkwdbf'
             })
        }
        
 		return Message;
 		
 	}
 	angular
 		.module('messenger')
 		.factory('Message', ['$cookies','$firebaseArray', Message]);
 })(); 