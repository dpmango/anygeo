
var gulp = require('gulp');

gulp.task('default', function (callback) {
  runSequence(['build:development'], 'watch', 'server',
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('build:production',
    callback
  )
})

// Watch
gulp.task('watch',
  ['sass:watch']
);
