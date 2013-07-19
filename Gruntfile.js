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
        files: ['!_scss/*', '!_scss/**/*', 'templates/*', 'templates/**/*', 'templates/**/**/*'],
        tasks: ['jekyll:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('dev', ['compass:dev', 'jekyll:dev']);
  grunt.registerTask('default', 'dev');
};