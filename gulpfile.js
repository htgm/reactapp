const gulp = require('gulp');
const spawn = require('child_process').spawn;

let server;
gulp.task('server', () => {

  if (server) {
    server.kill('SIGKILL');
  }
  else {
    gulp.watch('src/*.js', ['server']);
  }


  server = null;
  spawn('npm', ['run', 'build'], { stdio: 'inherit' })
    .on('exit', code => {
      if (code === 0) {
        server = spawn('node', ['src/server.js'], { stdio: 'inherit' });
      }
    });

});
