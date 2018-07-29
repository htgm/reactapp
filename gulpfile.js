const gulp = require('gulp');
const spawn = require('child_process').spawn;

gulp.task('default', () => {
  function goserver() {
    return spawn('node', ['src/server/server.js'], { stdio: 'inherit' });
  }
  spawn('npm', ['run', 'start'], { stdio: 'inherit' });
  let server = goserver();
  gulp.watch('src/server/*.js', () => {
    server.kill('SIGKILL');
    server = goserver();
  });
});
