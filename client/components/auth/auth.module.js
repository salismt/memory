'use strict';

angular.module('memoryApp.auth', [
  'memoryApp.constants',
  'memoryApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
