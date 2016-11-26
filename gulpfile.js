const elixir = require('laravel-elixir');
const inject = require('./gulp/inject');

elixir((mix) => {

  // Copy index to public folder
  mix.copy('index.html', 'public/index.html');

  // Mix styles
  mix.sass('app.scss', 'public/css/app.css');

  // Mix scripts
  mix.scripts([
    'analytics.js',
    'app.js'
  ], 'public/js/app.js');

  // Versioning files
  mix.version([
    'css/app.css',
    'js/app.js'
  ]);

  mix.inject(['css/app.css', 'js/app.js']);

});
