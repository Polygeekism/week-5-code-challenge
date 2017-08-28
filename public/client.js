console.log('client has been sourced');
var messageApp = angular.module('MessageApp', []);


messageApp.controller('MessageController', ['$http', function($http){
    console.log('Message controller loaded');
    var self = this;
    self.newMessage = {};
}])