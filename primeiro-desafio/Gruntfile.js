module.exports = function(grunt) {
   grunt.initConfig({
        copy:{
        	public:{
        		cwd: 'public',
        		src: '**',
        		dest: 'dist',
        		expand: true
        	}
        },
        clean:{
        	dist:{
        		src:'dist'
        	}
        },
        useminPrepare:{
        	html: 'dist/**/*.html'
        },
        usemin:{
       		html: 'dist/**/*.html'
        },
        imagemin:{
        	public:{
        		expand:true,
        		cwd:'dist/assets/images',
        		src:'**/*.{png,jpg,gif}',
        		dest:'dist/assets/images'
        	}
        },
        sass:{
        	dist:{
        		files:{
                    'public/assets/css/main.css' : 'public/assets/css/sass/main.scss'
                }
        	}
        },
        watch:{
        	sass:{    
        		options:{
        			event:['added','changed']
        		},

        		files:'public/assets/css/sass/**/*.scss',
        		tasks:'sass:dist'
        	}
        }
        
  });

   grunt.registerTask('dist', ['clean','copy']);
   grunt.registerTask('minifica', ['useminPrepare','concat','cssmin','usemin','imagemin']);
   grunt.registerTask('default', ['dist','minifica']);


   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-usemin');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
}