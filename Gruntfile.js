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

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      stylesheets: {
        files: ['templates/_scss/*'],
        tasks: ['compass:dev']
      },

      jekyll: {
        files: ['templates/*', 'templates/**/*', '!templates/_scss/*'],
        tasks: ['jekyll:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
 
  grunt.registerTask('default', 'jekyll:dev');
  grunt.registerTask('dev', ['watch:stylesheets', 'watch:jekyll']);
};