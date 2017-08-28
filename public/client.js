console.log('client has been sourced');
var messageApp = angular.module('MessageApp', []);


messageApp.controller('MessageController', ['$http', function ($http) {
    console.log('Message controller loaded');
    var self = this;
    self.newMessage = {};
    self.returnedMessages = {}


    //post route
    self.postMessage = function (messageToAdd) {
        console.log('ng click route is linked:', messageToAdd);
        $http.post('/messages', messageToAdd).then(function (response) {
            //console.log('success posting: ', response)
            self.getMessages();
        })
        self.newMessage = {};//clear input boxes

    }
    self.getMessages = function () {
        $http.get('/messages').then(function (response) {
            self.returnedMessages.list = response.data;
            console.log('data from the server: ', self.returnedMessages);
        })
    }
    self.getMessages();
}])