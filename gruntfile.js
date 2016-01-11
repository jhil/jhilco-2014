module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {"css/main.css": "css/main.less"}
            },
        },
        watch: {
            files: ['**/*.less'],
            tasks: ['less'],
        },
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};