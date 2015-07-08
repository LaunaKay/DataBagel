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
        }
    }
}])