
const CUSTOMER_FILE = process.env;

beforeEach(() => {
  jest.resetModules()
  process.env = { ...CUSTOMER_FILE };
});

afterAll(() => {
  process.env = CUSTOMER_FILE;
});

test('getCustomer when the file input customers.txt has a line different of JSON formatter.', async () => {

  process.env.CUSTOMER_FILE = './tests/mock/customers_case_01.txt';
  const { getCustomers } = require("../src/CustomerModel");
  try {
    const customers = await getCustomers();
  } catch (error) {
    expect(error).toBe("an error happened when was doing the getCustomers from file.");
  }

});


test('getCustomer when the file input customers.txt has 3 customers line.', async () => {

  process.env.CUSTOMER_FILE = './tests/mock/customers_case_02.txt';
  const { getCustomers } = require("../src/CustomerModel");

  const expected = [
    { "latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701" },
    { "latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699" },
    { "latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951" }
  ];

  const customers = await getCustomers();
  expect(customers).toBeDefined();
  expect(customers).toEqual(expected);


});
