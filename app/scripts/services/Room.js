(function() {
    function Room($firebaseArray) {
        var Room = {};
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        
        Room.add = function () {
            console.log("adding")
            var roomName = document.getElementById('roomName').value;
            rooms.$add({"name": roomName});
        };
        
        return Room;
    }
    
    angular
        .module('messenger')
        .factory('Room', ['$firebaseArray', Room]);
})();
  
