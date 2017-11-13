# NgTsSpinner

Angular (typescript) Spinner. Wrapper around spinner: http://spin.js.org/ (<3.0.0 version)

## Installation

`npm install ng-ts-spinner --save`

### Angular CLI

In case you are using Angular CLI, add spin.js (it will be downloaded together with ng-ts-spinner module) to your scripts path:

`"scripts": ["../node_modules/spin.js/spin.min.js"]`

## Usage

### Import module

```
import { NgTsSpinnerModule } from 'ng-ts-spinner/src/ng-ts-spinner/ng-ts-spinner.module';
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
spinOn - when set to true, spinner spins, when false, spinner is removed

spinnerOptions - options based on options from http://spin.js.org/. It can be empty, it will use defaults

When changing spinnerOptions, spinner should be stopped, and then again spinned to apply changes of the options.


#### Fixes
##### 1.0.1 
* Spinner doesn't add extra div to the placeholder
