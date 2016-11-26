'use strict';

const elixir = require('laravel-elixir');
const gulp = require('gulp');
const inject = require('gulp-inject');
const fs = require('fs');

const publicDirectory = './public';
const buildDirectory = `./${publicDirectory}/build`;
const target = `${publicDirectory}/index.html`;
const jsonManifest = `${buildDirectory}/rev-manifest.json`;

const Task = elixir.Task;

elixir.extend('inject', files => {
    new Task('inject', () => {
        if (fs.existsSync(jsonManifest)) {
            let json = fs.readFileSync(jsonManifest);
            let manifest = JSON.parse(json);
            let sources = [];

            files.forEach(file => {
                if (manifest[file]) {
                    sources.push(`${buildDirectory}/${manifest[file]}`);
                }
            });

            let src = gulp.src(sources,{read: false});
            gulp.src(target)
                .pipe(inject(src, {ignorePath: 'public'}))
                .pipe(gulp.dest(publicDirectory));
        }
    });
});
