'use strict';
angular.module('nome', [
    'ngRoute', 'ngCookies',
    'nome.services',
    'nome.controllers',
    'nome.directives',
    'ngResource'
]).config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/jogo.html',
            controller: 'jogoCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
]);