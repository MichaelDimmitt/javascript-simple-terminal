const util = require('util');
const exec = util.promisify(require('child_process').exec);

const reformat = (res) => JSON.stringify(res).replace(/\\n/g, " ").replace(/[\"]+/g,"").trim();
const execo = async (command) => {
  try{
    const { stdout, stderr, err } = await exec(command)
    return { stdout:reformat(stdout), stderr:reformat(stderr) }
  } catch(error) { }
}

const string_construction = (args) => {
  let str = ''; for (i = 0; i < args.length; i++) { str = str + " " + check_semicolon(args[i]); }
  str=str ? str : 'echo ;'
  console.log({str})
  return str
}
const check_semicolon = (str) => {
  if( str[str.length -1] == ';' ) { return str }
  else { return str + ';' }
}

const terminal = async () => {
  console.log(
    await execo(
      string_construction(
        process.argv.slice(2)
      )
    )
  )
}
terminal()
