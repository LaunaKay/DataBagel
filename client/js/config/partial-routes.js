app.config(function($routeProvider)
{
    $routeProvider
    .when('/', {
        templateUrl: '/partials/viz3.partials.html',
    })
    .when('/stack', {
        // controller: 'HomeController'
        templateUrl: '/partials/viz.partials.html',
    })
    .when('/over', {
        templateUrl: '/partials/viz2.partials.html',
    })
    .when('/gitHub', {
        templateUrl: '/partials/viz3.partials.html',
    })
    .when('/stack2', {
        templateUrl: '/partials/viz4.partials.html',
    })
    .when('/react', {
        templateUrl: '/partials/viz5.partial.html'
    })
    .otherwise('/')
})