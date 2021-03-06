# generator-ftbpro [![Build Status](https://secure.travis-ci.org/igoldny/generator-ftbpro.png?branch=master)](https://travis-ci.org/igoldny/generator-ftbpro)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-ftbpro from npm, run:

```
$ npm install -g generator-ftbpro
```

Finally, initiate the generator:

```
$ yo ftbpro
```

## Generators
### All

```
$ yo ftbpro:all FooBar
```
Creates presenter, view, template, stylesheets, spec

```
$ yo ftbpro:all FooBar --hash
```
Creates presenter, view, model, template, stylesheets, spec for view with hash

```
$ yo ftbpro:all FooBar --model
```
Creates presenter, view, model, template, stylesheets, spec for view with model, spec for model

```
$ yo ftbpro:all FooBar --collection
```
Creates presenter, view, model, collections, template, stylesheets, spec for view with model and collections, spec for model, spec for collections

### Presenter

```
$ yo ftbpro:presenter FooBar
```
Creates presenter

### View

```
$ yo ftbpro:view FooBar
```
Creates view

### Model

```
$ yo ftbpro:model FooBar
```
Creates model

### Collections

```
$ yo ftbpro:collections FooBar
```
Creates collections

### Template

```
$ yo ftbpro:template FooBar
```
Creates template

### Css

```
$ yo ftbpro:css FooBar
```
Creates css

### Spec

```
$ yo ftbpro:spec FooBar
```
Creates spec for view

```
$ yo ftbpro:spec FooBar --hash
```
Creates spec for view with hash

```
$ yo ftbpro:spec FooBar --model
```
Creates spec for view with model, spec for model

```
$ yo ftbpro:spec FooBar --collection
```
Creates spec for view with model and collection, spec for model, spec for collection

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
