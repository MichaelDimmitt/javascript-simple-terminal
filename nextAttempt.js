const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function term(args) {
  const { stdout, stderr } = await exec(string_construction(args));
if(stdout){console.log(stdout);}
if(stderr){console.log('\nstderr:', stderr, "\n");}

}
function string_construction(args){
  let str = '';
  for (i = 0; i < args.length; i++) {
    str = str + args[i] + " ";
  }
//  console.log("\ncommand executed,", str, "\n");
  return str;
}
term(process.argv.slice(2));
