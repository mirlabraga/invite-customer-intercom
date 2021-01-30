fs = require('fs');

class FileReport {

  constructor(fileName, messageOutput) {
    this.fileName = fileName;
    this.messageOutput = messageOutput;
  }

  async build() {
    const removeFileOutput = await this.remove();
    console.log(`[INFO] ${removeFileOutput}`);
  }

  remove() {
    return new Promise((resolve, reject) => {
      fs.unlink(this.fileName, (err) => {
        if (err && err.code == 'ENOENT') {
          return resolve("it not necessay removed the file.");
        } else if (err) {
          return reject("a error occurred while trying to remove file.");
        } else {
          return resolve("the file was removed with sucessfull.");
        }
      });
    });
  }

  write(data) {
    return new Promise((resolve, reject) => {
      fs.appendFile(this.fileName, JSON.stringify(data) + "\r\n", (err, fd) => {
        if (err) return reject(err);
        return resolve(`${this.messageOutput} ${data.name}`)
      });
    })
  }
}

module.exports = { FileReport };
