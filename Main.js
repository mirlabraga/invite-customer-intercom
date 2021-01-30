const { FileReport } = require("./src/FileReport");
const { execute } = require("./src/InvitationProcessor");

function Main() {
  try{
    const report = new FileReport("output.txt", "The customer was invite with sucessfull:");
    report.build();
    execute(report);
  } catch (error) {
    console.error(`[ERROR] ${error}`)
  }
}

Main();
