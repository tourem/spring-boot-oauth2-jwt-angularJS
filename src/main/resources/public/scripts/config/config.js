(function() {
    'use strict';

    angular.module('employeeManagerApp').constant('API_BASE', 'http://localhost:8080/api');
    angular.module('employeeManagerApp').constant('API_BASE_AUTH', 'http://localhost:8080/oauth/token');
})();
