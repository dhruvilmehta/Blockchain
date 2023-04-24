// const { exec } = require('child_process');
// exec('truffle console --network bscTestnet', (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     return;
//   }

//   // the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// //   exec('storage=await SimpleStorage.deployed()', (err, stdout, stderr) => {
// //     if (err) {
// //       // node couldn't execute the command
// //       return;
// //     }
  
// //     // the *entire* stdout and stderr (buffered)
// //     console.log(`stdout: ${stdout}`);
// //     console.log(`stderr: ${stderr}`);
    
// //   });
// //   exec('storage.address', (err, stdout, stderr) => {
// //     if (err) {
// //       // node couldn't execute the command
// //       return;
// //     }
  
// //     // the *entire* stdout and stderr (buffered)
// //     console.log(`stdout: ${stdout}`);
// //     console.log(`stderr: ${stderr}`);
    
// //   });
// });

const { spawn } = require('child_process');

const truffleConsole = spawn('truffle.cmd', ['console', '--network', 'bscTestnet']);

truffleConsole.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
//   truffleConsole.stdin.write('storage = await SimpleStorage.deployed()\n');
//   truffleConsole.stdin.write('console.log(storage.address)\n');
//   truffleConsole.stdin.write('process.exit()\n');
});

truffleConsole.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

truffleConsole.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

truffleConsole.on('error', (err) => {
  console.error(`Error spawning child process: ${err}`);
});

truffleConsole.stdin.setEncoding('utf-8');

truffleConsole.stdin.write('storage = await SimpleStorage.deployed()\n');
// truffleConsole.stdin.write('let accounts = await web3.eth.getAccounts()\n');
truffleConsole.stdin.write('storage.address\n');
truffleConsole.stdin.write('.exit');





