# NodeAcademyAcc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## How to add a new section

Let's add a new exercise for the npm section

* We will need a new component inside the exercises/npm module

```
ng g c pages/exercises/npm/exercise2 --spec=false
```

* You can use the [**Exercise 1**](https://innersource.accenture.com/projects/JSBC/repos/node-academy-acc/browse/src/app/pages/exercises/npm/exercise1/exercise1.component.html#2) component as an example of how to fill your instructions
* Now we will add some generic styles to our component

> **exercise2.component.scss** 
```
@import '../npm.component';
```

* To see the content of your component you'll need to add it to the [npm component](https://innersource.accenture.com/projects/JSBC/repos/node-academy-acc/browse/src/app/pages/exercises/npm/npm.component.html#19)
