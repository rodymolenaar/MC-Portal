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
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.registerTask('default', ['watch']);
     };
