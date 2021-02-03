# invite-customer-intercom

The challange is: it is creating a implementation that invite customer intercom is responsible for invite the any customer within 100km of the Intercom Dublin office from
customers.txt and acccording the [Great circle distance](https://en.wikipedia.org/wiki/Great-circle_distance).

The solution  I used the approximated Radius of the Earth according to  [Earth Radius](//https://en.wikipedia.org/wiki/Earth_radius) (R = 6371).

## Development Requirements

- node >= v12 [![node](https://img.shields.io/badge/node-v12-blue.svg?cacheSeconds=2592000)](https://nodejs.org/en/download/)
- npm >= v6 [![npm](https://img.shields.io/badge/npm-v6.3.0-blue)](https://www.npmjs.com/get-npm)


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install invite-customer-intercom.

```bash
$ git clone git@github.com:mirlabraga/invite-customer-intercom.git
$ cd invite-customer-intercom
$ npm install
```

## Run

To run the process, unzip the project and install the dependencies and following

```bash
$ cd invite-customer-intercom
$ npm install
$ npm start
```

You also can use *node Main.js* to run the application.

## Response

Output file with name `output.txt` with `name` and `user_id` properties will be
create inside the directory *invite-customer-intercom*

## Tests

To run the test suite, after install the all dependencies, so run `npm run test`:
The test run in default value properties.

```bash
$ npm install
$ npm run test
```
You also can use *npm test* to run all tests in the application.

## License
[MIT](https://choosealicense.com/licenses/mit/)
