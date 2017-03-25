# backbonejs-es6-sass-browserify-gulp

A boilerplate using backbonejs with es6+sass+browserify+gulp

## Setup 

### Requirements

Make sure you have install the node and npm and gulp .

### Clone the repository 

```
git clone git@github.com:monjer/backbonejs-es6-sass-browserify-gulp.git
```

### Install the dependencies

```
cd backbonejs-es6-sass-browserify-gulp && npm install
```

## Usage

### dev

```
npm run dev
```
It will start the watch process of js and css files .

### dev-serve

```
npm run dev-serve
```

Besides the process of watching , it will also start browserSync. 

### dist


```
npm run dist
```
This command will bundle the js and css files , compress them use uglify , and output them to `/dist` folder.

### serve


```
npm run serve
```

This command will start the browserSync .

### clean

```
npm run clean
```
will remove `dist` folder.


## What's inside

**JavaScript framework and lib**

+ [backbonejs](backbonejs.org)
+ [underscorejs](underscorejs.org)
+ [jQuery](jquery.com)


**Build tools**

+ [Gulp](http://gulpjs.com/)
+ [Browsersync](https://browsersync.io/)
+ [Browserify](https://github.com/substack/node-browserify)
+ [Babel](babeljs.io)
