module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      less: {
          dev: {
              options: {
                  paths: ["src/css"]
              },
              files: {
                  "src/css/styles.css": "src/less/main.less"
              }
          },
          uglify: {
              options: {
                    mangle: false
              },
              build: {
                  files: {
                      'src/css/styles.min.css': ['src/css/styles.css']
                  }
              }
          }
      },
      watch: {
          css: {
              files: "src/less/*.less",
              tasks: ["less"]
          }
      }
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};