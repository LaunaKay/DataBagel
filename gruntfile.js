module.exports = function(grunt)
{
  // Project configuration.
  grunt.initConfig(
  {
    pkg: grunt.file.readJSON('package.json'),
    shell:
    {
        multiple:
        {
            command: [
                'nodemon server.js',
            ].join('&')
        }
    },
    browserify:
    {
      js:
      {
        src:'client/js/app.js',
        dest:'client/js/app.js',
      }
    },
    copy:
    {
      all:
      {
        expand: true,
        cwd: 'client/',
        src: ['**/*.html', '**/*.css', '**/*.less'],
        dest: 'client/',
      }
    },
    watch:
    {
      options:
      {
        livereload:true,
      },
      livereload:
      {
        files:['client/**/*.html', 'client/**/*.js', 'client/**/*.less', 'server/**/*.js'],
        options:
        {
          livereload: true
        }
      },
      less:
      {
        files: '**/*.less',
        tasks:['less'],
        options:
        {
          livereload: true,
        }
      },
      files:['<%= jshint.files %>'],
      tasks:['jshint']
    },
    jshint:
    {
      files: ['gruntfile.js'],
      options:
      {
        globals:
        {
          jQuery:true,
          console:true,
          module:true
        }
      }
    },
    scripts:
      {
        files:['**/*.js'],
        tasks:['jshint'],
      }
});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'less', 'browserify']);
  grunt.registerTask('startup', ['shell', 'watch']);
};