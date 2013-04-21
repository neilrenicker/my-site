// source: https://gist.github.com/dannygarcia/3753650
// source: https://gist.github.com/decthomas/5336734
// https://github.com/dannygarcia/grunt-jekyll
 
/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    jekyll: {
      dev: {
        src: 'templates',
        dest: 'site'
      }
    },
 
    watch: {
      jekyll: {
        files: ['templates/*'],
        tasks: ['jekyll:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', 'jekyll:dev');
};