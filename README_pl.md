Protractor checklist
================

Kod do ćwiczeń z testami e2e.

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

Ćwiczenie
-----

W tym ćwiczeniu Twoim zadaniem będzie napisanie testów e2e dla listy zadań i otestowanie nowej funkcjonalności.

W ramach oswajania się z testami e2e, zapoznaj się z przykładami testów dla generatora list. `http://localhost:3000/#/example`

    gulp protractor // uruchamia testy e2e

Lista zadań
-----------
**Przeanalizuj testy** dla http://localhost:3000/#/example

Zwróć szczególna uwagę na matchers.js.

**Napisz testy sprawdzające:** dla `http://localhost:3000/#/checklist`

- Poprawne dodawanie zadań.
- Zaznaczanie zadania jako wykonane.
- Dodanie odpowiedniej klasy dla tekstu - kiedy zadanie jest wykonane.
- Poprawne czyszczenie listy wykonanych zadań.

**Stwórz nową funkcjonalność razem z testami**

- Możliwość wyboru typu zadania z `['work', 'home', 'private']`.
- Możliwość filtrowania zadań po typie.
- Pakaż informację o typie zadania -> mock.jpg




