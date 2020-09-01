

# SpaceXAssignment
An Angular application that provides a list of all SpaceX missions from 2006 to 2020.

The SpaceXAssignment application renders on the server-side. 

#App Structure:
The Application consists of 1 parent(Mission-list) and 2 child components(mission-card and filter-card). 
-> The reusable component, "Mission-card" corresponds to the details of an individual mission. 
-> The app follows mobile first design approach.
-> The filter-options are hard-coded.
-> Communication between the components takes place via the @Input() and @Output() decorators. 

#Services:
-> Fetching the correct data from the back-end.
-> The application also provides a filtering functionality.
On Filter:
	-> The url updates to reflect the change. 
	-> The respective filter options are highlighted. 
	-> Deselect: Clicking on the selected option again will result in de-selection.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
