module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['scripts/*'],
        dest: '_site/scripts/main.js',
        options: {
          separator: ';'
        }
      }
    },
    uglify: {
      js: {
        src: 'scripts/main.js',
        dest: '_site/scripts/main.min.js'
      }
    },
    watch: {
      js: {
        files: ['scripts/**/*.js'],
        tasks: ['default'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['watch', 'concat', 'uglify']);
};