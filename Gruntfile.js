// Project configuration.

module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        //specifying the settings for watch
        watch: {
            scripts: {
                files: 'public/*.*',
                //tasks: ['default'],
                options: {
                    spawn:false,
                    event:['all']
                },
            },
        },
        pagespeed: {
            options: {
                nokey: true,
                url: "https://vr360-tourguide.herokuapp.com"
            },
            paths: {
                options: {
                    paths: "/index",
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            }
        },
        uncss: {
            dist: {
                files: {
                    'public/tidy.css': ['public/index.html']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-pagespeed');

};
