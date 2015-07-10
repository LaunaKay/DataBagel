
app.factory('DataFactory', ['$http', '$location', function($http, $location)
{
    return{
        getLanguages: function(callback)
        {
            console.log('DataFactory getLanguages');
            $http.get('/languages').success(function(response)
            {
                callback(response);
            })
        },
        getDojos: function(callback)
        {
            console.log('DataFactory getDojos');
            $http.get('/dojo').success(function(response)
            {
                callback(response);
            })
        }
    }
}]);

