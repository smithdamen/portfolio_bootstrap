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
          }
      },
      watch: {
          css: {
              files: "src/less/*.less",
              tasks: ["less"]
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
      },
      cssmin: {
          target: {
              files: [{
                  expand: true,
                  cwd: 'src/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'src/css',
                  ext: '.min.css'
              }]
          }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['less']);
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['cssmin']);
};