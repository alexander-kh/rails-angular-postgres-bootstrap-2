### Rails, Angular, Postgres, and Bootstrap, Second Edition
##### by David Bryant Copeland

The code from "Rails, Angular, Postgres, and Bootstrap, Second Edition" book, published by The Pragmatic Bookshelf.  
Copyrights apply to this code. It may not be used to create training material, courses, books, articles, and the like. Contact the publisher if you are in doubt.  
Visit http://www.pragmaticprogrammer.com/titles/dcbang2 for more book information.

**Versions used:**

  * Ruby: 2.4.2
  * Rails: 5.1.4
  * PostgreSQL: 9.6.5
  * Angular: 5.0.3
  * TypeScript: 2.6.2
  * Bootstrap: 3.3.7
  * Node: 8.6.0
  * Yarn: 1.2.1
  * Webpack: 3.8.1
  * RSpec: 3.7
  * PhantomJS: 2.1.1


**Configuration:**

* Prerequisites:

  * PostgreSQL >= 9.5
  * [Node](https://github.com/nodejs/node)
  * [Bundler](https://bundler.io)
  * [Yarn](https://yarnpkg.com/en/docs/install)
  * [PhantomJS](https://github.com/ariya/phantomjs)

* Setup database

  * Create user:
    ```
    createuser --superuser --createdb --login -P shine
    ```
    password: shine
  * Create db:
    ```
    bundle exec rails db:create
    ```
  * Run migrations:
    ```
    bundle exec rails db:migrate
    ```

  * Populate db with data (will take several hours):
    ```
    bundle exec rails db:seed
    ```

* Install libraries

  * Ruby gems:
    ```
    bundle install
    ```

  * JavaScript packages:
    ```
    yarn install
    ```

* Run the test suite

  * Using RSpec testing library:

    * unit tests

    * integration tests using Capybara, Poltergeist, and PhantomJS to execute and test JavaScript code
    ```
    bundle exec rspec
    ```

  * Using Jasmine library for Angular components unit-testing with Karma as a test runner:
    ```
    bundle exec rake karma
    ```

* Run the application

  * rails server

  * webpack development server to serve up Webpack-managed assets
  ```
  foreman start
  ```