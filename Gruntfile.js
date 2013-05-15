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
};