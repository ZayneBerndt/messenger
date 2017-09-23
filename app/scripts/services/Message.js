(function() {
 	function Message($cookies,$firebaseArray) {
 		var Message = {};
 		
 		var ref = firebase.database().ref().child("messages");
 		Message.messages = $firebaseArray(ref);
 		//filter messages by roomId
        console.log(Message.messages)
 		Message.getByRoomId = function(roomId) {
 			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            
            
        var displayCurrentTime = function() {
        var date = new Date();
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM" ;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        time = hours + ":" + minutes + " " + am_pm;
            return time;
            
        };
            
 		}
 		
        
        Message.send = function(newMessage, currentRoomID) {
            console.log("sending")
             
                Message.messages.$add({
                 content: newMessage,
                 sentAt: 12345,
                 username: $cookies.get('messengerCurrentUser'),
                 roomID: 'khkhohpoj',
             })
        }
        
 		return Message;
 		
 	}
    
    
    
    
 	angular
 		.module('messenger')
 		.factory('Message', ['$cookies','$firebaseArray', Message]);
 })(); 