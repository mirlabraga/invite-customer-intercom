const { getCustomers } = require("./src/CustomerModel");
const { FileReport } = require("./src/FileReport");
const { execute } = require("./src/InvitationProcessor");

async function Main() {
  try{
    const report = new FileReport("output.txt", "The customer was invite with sucessfull:");
    report.build();

    const customers = await getCustomers();
    execute(report, customers);

  } catch (error) {
    console.error(`[ERROR] ${error}`)
  }
}

Main();
