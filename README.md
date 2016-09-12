Protractor checklist
================

Code for exercises with e2e tests. 

setup
-----

Prerequisites:

* `npm` installed globally
* `gulp` installed globally (otherwise you can use `./node_modules/.bin/gulp` command)

Some of most useful commands are:

* `npm install` - install all dependencies
* `gulp test` - run unit tests
* `gulp protractor` - run end-to-end tests
* `gulp serve` - serve app in a browser and watch for changes

Exercise
--------

Your task is to write e2e tests for a list of tasks and test them. 
AS a starting point you can take a look at example for list generator available at `http://localhost:3000/#/example` 

    gulp protractor // run e2e tests

Task list
---------
**Analyze tests** for http://localhost:3000/#/example

Pay special attention to the `matchers.js`.

**Write verification tests:** for `http://localhost:3000/#/checklist`

- Correct task addition.  
- Marking task as completed. 
- Adding correct class for text - when task is completed. 
- Correct clean up of completed tasks on task list. 

**Create new functionality with tests**

- Ability to choose task type `['work', 'home', 'private']`.
- Ability to filter tasks by type.
- Show information about task type -> mock.jpg




