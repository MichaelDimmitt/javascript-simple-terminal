const util = require('util');
const exec = util.promisify(require('child_process').exec);

const reformat = (res) => JSON.stringify(res).replace(/\\n/g, " ").replace(/[\"]+/g,"").trim();
const execo = async (command) => {
  try{
    const { stdout, stderr, err } = await exec(command)
    return { stdout:reformat(stdout), stderr:reformat(stderr) }
  } catch(error) { }
}

const terminal = async (str) => {
  console.log(
    await execo(
      str
    )
  )
}
module.exports={terminal};
