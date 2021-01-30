const readline = require('readline');
const fs = require('fs');

const CUSTOMER_FILE = process.env.CUSTOMER_FILE || "./customers.txt"

async function getCustomers() {

  return new Promise((resolve, rejects) => {
    const arrayCustomers = [];
    try {
      var readInterface = readline.createInterface({
        input: fs.createReadStream(CUSTOMER_FILE)
      });
      readInterface.on('line', function (line) {
        arrayCustomers.push(JSON.parse(line));
      });
      readInterface.on('close', function () {
        return resolve(arrayCustomers);
      });
    } catch (err) {
      console.log(err);
      rejects(err)
    }
  });
}

exports.getCustomers = getCustomers;
