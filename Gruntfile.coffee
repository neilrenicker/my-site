#global module:false

module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    watch:
      stylesheets:
        files: ["templates/_scss/**/*"]
        tasks: ["compass:dev"]

      jekyll:
        files: ["templates/**/*", "!templates/_scss/**/*"]
        tasks: ["jekyll:dev"]

    compass:
        dev:
          options:
            config: "config.rb"
            environment: 'dev'
        dist:
          options:
            config: "config.rb"
            environment: 'production'

    clean:
      all:
        src: "site/*"
        dot: true # clean hidden files

    jekyll:
      dev:
        src: "templates"
        dest: "site"
      dist:
        src: "templates"
        dest: "site"

  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-jekyll"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-compass"

  grunt.registerTask "dev", ["clean:all", "compass:dev", "jekyll:dev"]
  grunt.registerTask "dist", ["clean:all", "compass:dist", "jekyll:dist"]
  grunt.registerTask "default", "dev"