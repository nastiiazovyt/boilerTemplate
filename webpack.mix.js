const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');

mix.setPublicPath('./');
mix.disableNotifications();

mix.alias({
    '@': path.join(__dirname, 'src/js')
});

if (mix.inProduction()) {
    mix
        .options({
            processCssUrls: false,
            postCss: [
                require('autoprefixer'),
                require('cssnano')({
                    preset: [
                        'default', {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ]
                })
            ]
        })
    ;
}

fs.readdirSync('src/scss/pages')
    .forEach(fileName => mix
        .sass(`src/scss/pages/${fileName}`, 'assets/css')
        .options({ processCssUrls: true }));


fs.readdirSync('src/js/pages')
    .forEach(fileName => mix
        .ts(`src/js/pages/${fileName}`, 'assets/js'));

mix.browserSync({
    files: [
        './**/*.php',
        './blocks/**/*.php',
        './assets/**/*.(js|css)'
    ],
    watch: true,
    host: 'localhost',
    //Домен на локальном сервере
    proxy: 'localhost:8888'
});

