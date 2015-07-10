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
    .when('/sales', {
        templateUrl: '/partials/viz2.partials.html',
    })
    .when('/gitHub', {
        templateUrl: '/partials/viz3.partials.html',
    })
    .otherwise('/')
})