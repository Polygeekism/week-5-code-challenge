console.log('client has been sourced');
var messageApp = angular.module('MessageApp', []);


messageApp.controller('MessageController', ['$http', function($http){
    console.log('Message controller loaded');
    var self = this;
    self.newMessage = {};

    //post route
    self.postMessage = function(messageToAdd){
        console.log('ng click route is linked:', messageToAdd);
        self.newMessage={};//clear input boxes
    }
    self.getMessages = function(){
        
        $http.get('/messages', function(response){
            console.log()
        })
    }
}])