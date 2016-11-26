const elixir = require('laravel-elixir');

elixir((mix) => {

  // Mix styles
  mix.sass('app.scss', 'public/css/app.css');

  // Mix scripts
  mix.scripts([
    'analytics.js',
    'app.js'
  ], 'public/js/app.js');

  // Copy index to public folder
  mix.copy('index.html', 'public/index.html');

  // Versioning files
  //mix.version([
  //  'css/app.css',
  //  'js/app.js'
  //]);

});