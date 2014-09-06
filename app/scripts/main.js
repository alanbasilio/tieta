require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        bootstrap: 'vendor/bootstrap/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['jquery', 'bootstrap'], function ($) {
    'use strict';
    // use app here
});