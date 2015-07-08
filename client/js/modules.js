var app = angular.module('app', ['ngRoute']);
console.log('app', app);

app.config(function($routeProvider)
{
    $routeProvider
    .when('/', {
        templateUrl: '/partials/viz.partials.html',
    })
    .when('/viz1', {
        // controller: 'HomeController'
        templateUrl: '/partials/viz1.partials.html',
    })
    .when('/viz2', {
        templateUrl: '/partials/viz2.partialshtml',
    })
    .otherwise('/')
})