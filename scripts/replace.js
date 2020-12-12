(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Carousel = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const Promise = require('./promise.js');

/**
 * Module to distribute function calls in a timeframe
 */
const Distribution = function () {
    this._callbacks = [];    
    this.timeframe = 1000;
    this._pointer = 0;
};

module.exports = Distribution;

/**
 * Method to add a callback
 * @param {function} callback
 */
Distribution.prototype.add = function (callback) 
{
    if (typeof callback !== 'function') {
        return console.error('Given callback is not a function.');
    }

    this._callbacks.push(callback);
    return this;
};

/**
 * Method to define the timeframe
 * @param  {number} milliseconds
 * @return {Distribution}
 */
Distribution.prototype.in = function (milliseconds)
{
    if (typeof milliseconds !== 'number') {
        return console.error('Given timeframe value is not a number.');
    }

    this.timeframe = milliseconds;
    return this;
};

/**
 * Method to run the distribution
 */
Distribution.prototype.run = function ()
{
    var self = this;

    if (this._callbacks.length === 0) {
        return console.error('No methods defined.');
    }

    return new Promise(
        function (resolve, reject) {
            try {
                self._callbacks;
                let today = new Date().getTime();
                let start = today;
                var end = today + self.timeframe;
                let timeframe = end - start;
                let interval = Math.ceil(timeframe / self._callbacks.length);

                var timing = setInterval(
                    function () {                        
                        if (self._pointer === self._callbacks.length) {
                            self._pointer = 0;
                            clearInterval(timing);
                            resolve(self);
                            return;
                        }
                        self._callbacks[self._pointer].call();
                        self._pointer++;
                    },
                    interval
                );
            } catch (err) {
                reject(err)
            }        
        }
    );
};
},{"./promise.js":2}],2:[function(require,module,exports){
'use strict';

/**
 * Module to immitate a simpler version of promise
 * @param {function} callback
 */
const Promise = function (callback) {
    this._resolve = function () {};
    this._reject = function (err) {return console.error(err);};
    this._callback = callback;

    var self = this;
    setTimeout(
        function () {
            self._callback.call(self, self._resolve, self._reject);
        },
        16
    );
};

module.exports = Promise;

/**
 * Method to define the resolve callback
 * @param  {function} callback
 * @return {Promise}
 */
Promise.prototype.resolve = function (callback) {
    if (typeof callback !== 'function') {
        return console.error('`resolve` callback needs to be a function.');
    }

    this._resolve = callback;
    return this;
};

/**
 * Method to define the reject callback
 * @param  {function} callback
 * @return {Promise}
 */
Promise.prototype.reject = function (callback) {
    if (typeof callback !== 'function') {
        return console.error('`reject` callback needs to be a function.');
    }

    this._reject = callback;
    return this;
};
},{}],3:[function(require,module,exports){
'use strict';

const Distribution = require('distribute-js');

/**
 * Module for a replacing word carousel
 */
const Carousel = function () {
    this._words = [];
    this._current = 0;
    this._update = function () {};
    this._show = '';
    this._state = 0;
    this._wordtime = 1000;
};

module.exports = Carousel;

/**
 * Method to add a new word
 * @param {string} word
 * @return {Carousel}
 */
Carousel.prototype.add = function (word) {
    if (typeof word !== 'string') {
        return console.error('`add()` requires the given word to be string.')
    }

    var self = this;
    var build = new Distribution();
    var destroy = new Distribution();

    for (let counter = 1; counter <= word.length; counter++) {
        build.add(
            function () {
                self._show = word.slice(0, counter);
                self._update.call(self, self._show);
            }
        );
        destroy.add(
            function () {
                self._show = word.slice(0, word.length - counter);
                self._update.call(self, self._show);
            }
        );
    }

    this._words.push(
        {
            build: build,
            destroy: destroy,
            word: word
        }
    );

    return this;
};

/**
 * Method to define the time a animated word is shown
 * @param  {number} milliseconds
 * @return {Carousel}
 */
Carousel.prototype.showFor = function (milliseconds) {
    if (typeof milliseconds !== 'number') {
        return console.error('`showFor` only excepts number values.');
    }

    this._wordtime = milliseconds;
    return this;
};

/**
 * Method to define the callback on each word manipulation
 * @param  {function} callback
 * @return {Carousel}
 */
Carousel.prototype.onUpdate = function (callback) {
    if (typeof callback !== 'function') {
        return console.error('`onUpdate` callback needs to be a function.');
    }

    this._update = callback;
    return this;
};

/**
 * Method to start the word carousel loop
 */
Carousel.prototype.run = function () {    
    var self = this;

    var loop = setInterval(
        function () {
            if (self._state === 1) {
                return;
            }

            self._state = 1;
            var currentWord = self._words[self._current];
            currentWord
                .build
                .run();

            setTimeout(
                function () {
                    currentWord
                        .destroy
                        .run()
                        .resolve(
                            function () {
                                self._current += 1;
                                if (self._current > (self._words.length - 1)) {
                                    self._current = 0;
                                }
                                self._state = 0;
                            }
                        );
                },
                self._wordtime
            );
        },
        16
    );
};
},{"distribute-js":1}]},{},[3])(3)
});