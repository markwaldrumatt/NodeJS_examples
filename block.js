const SHA256 = require("crypto-js/sha256");
//const SHA256 = require("js-sha256");

class Block
{

  constructor(index, timestamp, data, previousHash = '')
  {

     this.index = index;
     this.previousHash = previousHash;
     this.timestamp = timestamp;
     this.data = data;
     this.hash = this.calculateHash();

  }

  calculateHash()
  {

     return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
     //return this.index + this.previousHash + this.timestamp + JSON.stringify(this.data).toString();

  }

  // Temp func to dump out this values
  printThis()
  {

    console.log(this.index);
    console.log(this.timestamp);
    console.log(this.data);
    console.log(this.previousHash);
    console.log(this.hash);
  }

}

// temp usage
let bk = new Block(0, "06/20/2019", "Initial block", "0");
bk.printThis();
