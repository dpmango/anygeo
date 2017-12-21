var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var config        = require('../config');

gulp.task('server', function(){
  browserSync({
    proxy: 'http://tech.anygeo.ru',
    files: [config.dest.css + '*.css'],
    middleware: require('serve-static')('./dist'),
    rewriteRules: [
      {
        match: new RegExp('</head>'),
        fn: function(){
          return '<script async="" src="/browser-sync/browser-sync-client.js?v=2.18.13"></script><link rel="stylesheet" type="text/css" href="http://localhost:8080/css/index.css">'
        }
      }
    ],
    port: 8080
  })
})
