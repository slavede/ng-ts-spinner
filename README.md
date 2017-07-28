# NgTsSpinner

Angular (typescript) Spinner. Wrapper around spinner: http://spin.js.org/

## Installation

`npm install ng-ts-spinner --save`

### Angular CLI

In case you are using Angular CLI, add spin.js (it will be downloaded together with ng-ts-spinner module) to your scripts path:

`"scripts": ["../node_modules/spin.js.spin.min.js"]`

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
  <ng-ts-spinner [spinOn]="loadingInProgress" [options]="spinnerOptions">
    <div class="form-group col-xs-12 col-md-4">
      <!--<label for="username">Username</label>-->
      <input [disabled]="loadingInProgress" type="text" class="form-control" id="username" placeholder="USERNAME">
    </div>
    <div class="form-group col-xs-12 col-md-4">
      <!--<label for="password">Password</label>-->
      <input [disabled]="loadingInProgress" type="password" class="form-control" id="password" placeholder="PASSWORD">
    </div>
    <button md-button [disabled]="loadingInProgress" type="submit" class="btn col-xs-12 col-md-4" (click)="login()">LOGIN</button>
  </ng-ts-spinner>
```

#### Properties
spinOn - when set to true, spinner spins, when false, spinner is removed
spinnerOptions - options based on options from http://spin.js.org/

When changing spinnerOptions, spinner should be stopped, and then again spinned to apply changes of the options.
