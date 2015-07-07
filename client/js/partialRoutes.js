var app = angular.module('app', ['ngRoute', 'angularMoment', 'ui.bootstrap', 'ngStorage']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'index.html',
        // controller: 'AppointmentController',
        // controllerAs: 'main'
    })
    .when('/viz', {
        // controller: 'HomeController'
        templateUrl: '/partials/viz.partials.html',
        // controller: 'AppointmentController',
        // controllerAs: 'dashC'
    })
    .when('/about', {
        templateUrl: '/partials/about.partials.html'
    })
    .when('/contact', {
        templateUrl: '/partials/contact.partials.html'
    })
    .otherwise('/')
})