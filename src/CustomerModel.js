const readline = require('readline');
const fs = require('fs');

const CUSTOMER_FILE = process.env.CUSTOMER_FILE || "./customers.txt"

async function getCustomers() {

  const error_message = "an error happened when was doing the getCustomers from file.";

  return new Promise((resolve, rejects) => {
    const arrayCustomers = [];
    try {
      var readInterface = readline.createInterface({
        input: fs.createReadStream(CUSTOMER_FILE)
      });
      readInterface.on('line', function (line) {
        try {
          parseLineCustomer(line,arrayCustomers);
        } catch (error) {
          rejects(error_message);
        }
      });
      readInterface.on('close', function () {
        return resolve(arrayCustomers);
      });
    } catch (err) {
      rejects(error_message);
    }
  });
}

function parseLineCustomer(line, arrayCustomers) {
  try {
    const customer = JSON.parse(line);
    arrayCustomers.push(customer);
  } catch (err) {
    throw new Error(err);
  }
}

exports.getCustomers = getCustomers;
