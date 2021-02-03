const { execute } = require("../src/InvitationProcessor");

let report;

beforeEach(() => {
  class ConsoleReport {
    constructor() {
      this.result = [];
    }

    write(data) {
      this.result.push(data);
      return JSON.stringify(data);
    }

    getResult() {
      return this.result;
    }
  }
  report = new ConsoleReport();

});

test('it checks whether the coordinate point is within a defined radius < 100)', async () => {

  const customers = [
    { "latitude": "52.228056", "user_id": 18, "name": "Bob Larkin", "longitude": "-7.915833" },
    { "latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335" }
  ];

  await execute(report, customers);
  expect(report.getResult()).toStrictEqual([{ "name": "Ian Kehoe", "user_id": 4 }]);

});

test('it checks whether the coordinate point is within a defined radius > 100)', async () => {

  const customers = [
    { "latitude": "52.986361", "user_id": 18, "name": "Bob Larkin", "longitude": "-7.6373000" }
  ];

  await execute(report, customers);
  expect(report.getResult()).toStrictEqual([]);

});

test('it checks whether the coordinate point is equals the default coordinate (Dublin point))', async () => {

  const customers = [
    { "latitude": "53.339428", "user_id": 18, "name": "Bob Larkin", "longitude": "-6.257664" }
  ];

  await execute(report, customers);
  expect(report.getResult()).toStrictEqual([{ "name": "Bob Larkin", "user_id": 18 }]);

});

test('it checks when the process invitation throw a error', async () => {
  try {
    const customers = [];
    await execute(report, customers);
  } catch (error) {
    expect(error.message).toBe("an error happened when process the customers invitation.");
  }

});

test('checking order of the lists customers, should be sorted by user_id ascending.', async () => {

  const customers = [
    {"latitude": "53.0033946", "user_id": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505"},
    {"latitude": "53.1302756", "user_id": 5, "name": "Nora Dempsey", "longitude": "-6.2397222"},
    {"latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335"}
  ];

  await execute(report, customers);
  expect(report.getResult()).toStrictEqual([{"name": "Ian Kehoe", "user_id": 4}, {"name": "Nora Dempsey", "user_id": 5}, {"name": "Lisa Ahearn", "user_id": 39}]);

});
