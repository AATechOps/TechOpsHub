'use strict';

require.config({
    baseUrl: './src',
    
    paths: {
        angular: 'vendor/angular/angular',
        ngRoute: 'vendor/angular-route/angular-route',
        ngResource: 'vendor/angular-resource/angular-resource'
    },
    
    shim: {
        angular: {
            exports: 'angular'
        },
        
        ngRoute: ['angular'],
        ngResource: ['angular']
    },
    
    deps: [
        'angular',
        'ngRoute',
        'ngResource'
    ],
    
    callback: function () {
        if (window.console) {
            window.console.log('Configuration loaded...');
        }
        
        require(['app']);
    }
});