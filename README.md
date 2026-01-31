<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# countIfs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform element-wise evaluation of one or more input arrays according to provided predicate functions and count the number of elements for which all predicates respectively return `true`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
countIfs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-count-ifs@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var countIfs = require( 'path/to/vendor/umd/array-base-count-ifs/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-count-ifs@v0.1.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.countIfs;
})();
</script>
```

#### countIfs( x0, predicate0\[, x1, predicate1\[, x2, predicate2\[, ...args]]] )

Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.

```javascript
function predicate0( value ) {
    return ( value > 0 );
}

function predicate1( value ) {
    return ( value < 3 );
}

var x0 = [ 0, 1, 0, 1, 2 ];
var x1 = [ 2, 3, 1, 2, 5 ];

var out = countIfs( x0, predicate0, x1, predicate1 );
// returns 1
```

The function has the following parameters:

-   **x0**: first input array.
-   **predicate0**: first predicate function.
-   **x1**: second input array (_optional_).
-   **predicate1**: second predicate function (_optional_).
-   **x2**: third input array (_optional_).
-   **predicate2**: third predicate function (_optional_).
-   **args**: additional input arrays and corresponding predicate functions (_optional_).

Each predicate function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the corresponding input array.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function assumes that all input arrays have the same length.
-   The function supports array-like objects supporting the accessor protocol (e.g., [`Complex128Array`][@stdlib/array/complex128], [`Complex64Array`][@stdlib/array/complex64], etc).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable max-len -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@umd/browser.js"></script>
<script type="text/javascript">
(function () {.isPrimitive;
var isNegativeInteger = require( '@stdlib/assert-is-negative-integer' ).isPrimitive;
var naryFunction = require( '@stdlib/utils-nary-function' );
var countIfs = require( '@stdlib/array-base-count-ifs' );

var x = discreteUniform( 10, -5, 5, {
    'dtype': 'int32'
});
console.log( x );

var y = discreteUniform( 10, -5, 5, {
    'dtype': 'int32'
});
console.log( y );

var out = countIfs( x, naryFunction( isPositiveInteger, 1 ), y, naryFunction( isNegativeInteger, 1 ) );
console.log( out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-count-ifs.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-count-ifs

[test-image]: https://github.com/stdlib-js/array-base-count-ifs/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-base-count-ifs/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-count-ifs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-count-ifs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-count-ifs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-count-ifs/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-count-ifs/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-count-ifs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-count-ifs/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-count-ifs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-count-ifs/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-count-ifs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-count-ifs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-count-ifs/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/umd

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

</section>

<!-- /.links -->
