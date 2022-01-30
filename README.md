# typeorm-postgres-express-crud-ts
- exploring typeorm as preparation or a future project.
- leveraging typeorm for the creation of this basic crud api.
- [typeorm](https://typeorm.io/) for modelling our database
- [postgres](https://www.postgresql.org/) as database (via docker container)
- [express](https://expressjs.com/) for creating crud routes and using typeorm
  (*decided to use the active record pattern for this small example. Not sure
which pattern I would use for larger projects yet. Data Mapper is suggested.*):

# Quickstart
- install packages. `npm i`
- spin up postgres database. `docker-compose up -d`
- compile .ts to .js. `npm run watch`
- spin up our express server. `npm run dev`
- *...time to query your api! :]*

# Commands to test the api using [httpie](https://github.com/httpie)
- we manage (shopping list) items.
- since we have added a custom **authentication middleware**, we have to add our
  authorization header to each request. This will be `authenticated:true`.
- list all items:
    - `http -v GET localhost:3001/items authenticated:true`
- list one item by id:
    - `http GET localhost:3001/items/idValueHere authenticated:true`
- create an item:
    - `http POST localhost:3001/items authenticated:true text="green apples"`
- update an item:
    - `http PUT localhost:3001/items/idValueHere authenticated:true
      text="updatedItemYaay!"`
- delete an item:
    - `http DELETE localhost:3001/items/idValueHere authenticated:true`
