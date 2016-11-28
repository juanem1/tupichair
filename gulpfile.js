const elixir = require('laravel-elixir');
const inject = require('./gulp/inject');

elixir((mix) => {

  // Copy index to public folder
  mix.copy('index.html', 'public/index.html');

  // Mix sass styles
  mix.sass('app.scss', 'public/css/app.css');

  // Mix css styles
  mix.styles([
    './node_modules/bulma/css/bulma.css',
    './node_modules/animate.css/animate.min.css',
    './node_modules/photoswipe/dist/photoswipe.css',
    './node_modules/photoswipe/dist/default-skin/default-skin.css',
    './public/css/app.css'
  ], 'public/css/app.css');

  // Mix scripts
  mix.scripts([
    'analytics.js',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/photoswipe/dist/photoswipe.min.js',
    './node_modules/photoswipe/dist/photoswipe-ui-default.min.js',
    'app.js',
    //'photoswipe.js'
  ], 'public/js/app.js');

  // Versioning files
  mix.version([
    'css/app.css',
    'js/app.js'
  ]);

  // Copy Photoswipe assets
  mix.copy(
    './node_modules/photoswipe/dist/default-skin/default-skin.svg', 
    'public/build/css/default-skin.svg'
  );

  mix.inject(['css/app.css', 'js/app.js']);

});
