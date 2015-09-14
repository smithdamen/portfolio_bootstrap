module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
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
                tasks: ['build']
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

    // Default task(s).
    grunt.registerTask('default', ['watch','build']);
    grunt.registerTask('build', ['less','cssmin']);
    
};