const { spawn, exec } = require('child_process');

const execute = (info) => {
 exec(info, (err, stdout, stderr) => {
   if (err) {
     console.error(`exec error: ${err}`);
     return;
   }
   else if (stdout) {
     console.log(stdout);
   }
   else {
     console.log(stderr)
   }
 });
 
 
}

const string_construction = (args) => {
  let str = '';
  for (i = 0; i < args.length; i++) {
    str = str + args[i] + "; ";
  }
  str=str ? str : 'echo ;' 
  return str
}

const terminal = async () => {
  return await execute(
    string_construction(
      process.argv.slice(2)
    )
  ) 
}
terminal()

// exec('npx @availity/workflow init info --package angular', (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }
// 
//   console.log(`Number of files ${stdout}`);
// });
// 
// 
