# NgTsSpinner

Angular (typescript) Spinner. Wrapper around spinner: http://spin.js.org/ (<3.0.0 version).

## Installation

It has dependency on spin.js. It doesn't include it in bundle so you have to isntall it yourself (<3.0.0 until #3 is fixed).

```
npm install spin.js@2.x --save
npm install ng-ts-spinner --save
```

### Angular CLI

In case you are using Angular CLI, add spin.js (it will be downloaded together with ng-ts-spinner module) to your scripts path:

`"scripts": ["../node_modules/spin.js/spin.min.js"]`

## Usage

### Import module

```
import { NgTsSpinnerModule } from 'ng-ts-spinner';
. . .
@NgModule({
  . . .
  imports : [
    . . .
    NgTsSpinnerModule
  ]
```

### Use component
```
  <div ng-ts-spinner [spinOn]="loadingInProgress" [options]="spinnerOptions">
    <div>Everything here will be under the spinner</div>
  </div>
```

#### Properties
**spinOn** - when set to true, spinner spins, when false, spinner is removed

**overlayWhileSpin** - if true, it will display overlay, making everything non-clickable where it is spinning (make sure parent element has positioning set)

**spinnerOptions** - options based on options from http://spin.js.org/. It can be empty, it will use defaults

When changing spinnerOptions, spinner should be stopped, and then again spin to apply changes of the options.


#### Release notes

##### 1.7.0
**Breaking change**: Added support for Angular6+. Now only support Angular6+, for below version, use 1.6.x

##### 1.6.0

* New way of installing dependency. **Spin.js has to be installed manually** (since npm3+ doesn't install dependency automatically).

##### 1.5.0

**BREAKING CHANGE**: Change the way you import module to:

```ts
import { NgTsSpinnerModule } from 'ng-ts-spinner';
```

##### 1.3.0
* Added support for overlayWhileSpin
* Added index.ts to have nicer import (only name of the module)

##### 1.2.0
* Restricted spin.js dependency to be under 3.0.0 because 3.0.0 removed spin.min.js.

##### 1.0.1 
* Spinner doesn't add extra div to the placeholder
