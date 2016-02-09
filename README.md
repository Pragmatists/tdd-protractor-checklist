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

Abyś oswoił się z testami e2e, przykład testów dla generatora list.
http://localhost:3000/#/example

gulp protractor -> uruchamia testy e2e

Lista zadań
-----------
**Przeanalizuj testy** dla http://localhost:3000/#/example
*Zwróć szczególna uwagę na matchers.js.

**Napisz testy sprawdzające:** dla http://localhost:3000/#/checklist
* Poprawnie dodawanie zadań.
* Poprawne czyszczenie listy wykonanych zadań.
* Zaznaczanie zadania jako wykonane.
* Dodanie odpowiedniej klasy dla tekstu - kiedy zadanie jest wykonany.

**Stwórz nową funkcjonalność na następnie odpowiednio przetestuj:**
* Jako użytkownik chcę możliwość wyboru typu zadania.[work, private, home]
* Jako użytkownik chcę mieć możliwość filtrowania zadań przez jego typ.
* Chcę aby na liście zadań pojawiłą się rozróżnienie na typy -> mock.jpg




