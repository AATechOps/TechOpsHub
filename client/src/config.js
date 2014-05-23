'use strict';

require.config({
    baseUrl: './src',
    
    paths: {
        rx: '//cdnjs.cloudflare.com/ajax/libs/rxjs/2.2.20/rx.lite',
        angular: 'vendor/angular/angular',
        ngAnimate: 'vendor/angular-animate/angular-animate',
        ngRoute: 'vendor/angular-route/angular-route',
        ngResource: 'vendor/angular-resource/angular-resource',
        ngStrap: 'vendor/angular-strap/dist/angular-strap',
        ngStrapTpl: 'vendor/angular-strap/dist/angular-strap.tpl',
        underscore: 'vendor/underscore/underscore'
    },
    
    shim: {
        angular: {
            exports: 'angular'
        },
        underscore: {
            exports: '_'
        },
        ngAnimate: ['angular'],
        ngStrap: ['angular'],
        ngStrapTpl: ['ngStrap'],
        ngRoute: ['angular'],
        ngResource: ['angular']
    },
    
    deps: [
        'rx',
        'angular',
        'ngAnimate',
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