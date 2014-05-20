'use strict';

require.config({
    baseUrl: './src',
    
    paths: {
        angular: 'vendor/angular/angular',
        ngRoute: 'vendor/angular-route/angular-route',
        ngResource: 'vendor/angular-resource/angular-resource',
        ngStrap: 'vendor/angular-strap/dist/angular-strap',
        ngStrapTpl: 'vendor/angular-strap/dist/angular-strap.tpl'
    },
    
    shim: {
        angular: {
            exports: 'angular'
        },
        ngStrap: ['angular'],
        ngStrapTpl: ['ngStrap'],
        ngRoute: ['angular'],
        ngResource: ['angular']
    },
    
    deps: [
        'angular',
        'ngRoute',
        'ngResource',
        'ngStrap',
        'ngStrapTpl'
    ],
    
    callback: function () {
        if (window.console) {
            window.console.log('Configuration loaded...');
        }
        
        require(['app']);
    }
});