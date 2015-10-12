module.exports = function(grunt) {
         grunt.initConfig({
             watch: {
                files: ['less/**/*.less'],
                tasks: ["less"]
             },
             less: {
                 standard: {
                     options: {
                         paths: ["less"],
                         strictMath: true,
                         sourceMap: true,
                         outputSourceFiles: true,
                         sourceMapURL: 'dist/css/mc-portal.css.map',
                         sourceMapFilename: 'dist/css/mc-portal.css.map'
                     },
                     files: {"dist/css/mc-portal.css": "less/mc-portal.less"}
                 }
             },
             compress: {
              main: {
                options: {
                  archive: 'MC-Portal.zip'
                },
                files: [
                  {src: ['dist/**'], dest: 'MC-Portal/'}, // includes files in path and its subdirs
                  {src: ['index.html'], dest: 'MC-Portal/'},
                  {src: ['README.md'], dest: 'MC-Portal/'},
                  {src: ['LICENSE'], dest: 'MC-Portal/'}
                ]
              }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-contrib-compress');
         grunt.registerTask('default', ['watch']);
     };
