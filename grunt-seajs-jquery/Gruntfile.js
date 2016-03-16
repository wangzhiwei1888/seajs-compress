module.exports = function (grunt) {
    grunt.initConfig({
        //任务
        concat:{
            sea3:{
                files:{
                    //输出文件的地址
                    //后者是要合并的文件名字
                    './dist/js/main.js':['.build/js/main.js','.build/js/jquery.js','.build/js/data.js','.build/js/Person.js','.build/js/user.js']

                }
            }
        },
        //任务名字
        transport:{
            sea3:{
                options:{
                    //配置增加id头
                    idleading:'./dist/'
                },
                files:{
                    '.build/':['./js/main.js','./js/jquery.js','./js/data.js','./js/Person.js','./js/user.js']
                }
            }
        },
        uglify:{
            sea3:{
                files:{
                    './dist/js/main.js':'./dist/js/main.js'
                }
            }
        }
    })
    //注册插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //grunt.registerTask('default',['concat']);
    // grunt.registerTask('default',['transport']);
    // grunt.registerTask('default',['transport','concat','uglify']);
    grunt.registerTask('default',['transport','concat','uglify']);




    
}