const { spawn, exec } = require('child_process');

function execute(info){
  console.log({info})
    const ls = spawn(info);
    
    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    })
}
function string_construction(args){
  let str = '';
  for (i = 0; i < args.length; i++) {
    str = str + args[i] + "";
  }
  return str
}

console.log(
  execute(
  string_construction(
    process.argv.slice(2)
  ))
)

exec('find . -type f | wc -l; ls', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
