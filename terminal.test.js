
const util = require('util');
const exec = util.promisify(require('child_process').exec);


const reformat = (res) => JSON.stringify(res).replace(/\\n/g, " ").replace(/[\"]+/g,"").trim();
const execo = async (command) => { 
  try{
    const { stdout, stderr, err } = await exec(command)
    return { stdout:reformat(stdout), stderr:reformat(stderr) }
  } catch(error) { }
}
// const execa = require('execa');
// test('use ls verify exec child_process working correctly', async (done) => {
//   const { stdout } = await execa('ls',  [])
//   expect(JSON.stringify(stdout)).toStrictEqual("true")
//   done();
// })

test('use echo true command to verify exec child_process working correctly', async (done) => {
  const { stdout, stderr } = await execo('echo "true"')
  console.log({ stdout, stderr })
  expect( stdout )
  .toBe("true")
  done();
});

test('verify folder structure prior to @availity/workflow scaffold', async (done) => {
  const { stdout, stderr } = await execo('ls')
  console.log({ stdout, stderr })
  expect(stdout)
    .toBe('Readme.md node_modules package-lock.json package.json run_terminal.js terminal.test.js')
  done();
});

// test('providing correct results for @availity/workflow scaffold', async (done) => {
//   const { stdout, stderr } = await execo('npx @availity/workflow init info --package angular')
//   console.log({ stdout, stderr })
//   expect(stdout).toEqual(
//     expect.stringContaining('Success!')
//   )
//   expect(stdout).not.toEqual(
//     expect.stringContaining('Successs!')
//   )
//   done();
// }, 300000);

test('check new angular folder in directory', async (done) => {
  await execo('mkdir info;')
  const { stdout, stderr } = await execo('ls')
  console.log({ stdout, stderr })
  expect(stdout)
    .toBe('Readme.md info node_modules package-lock.json package.json run_terminal.js terminal.test.js')
  done();
});

test('check new angular folder in directory', async (done) => {
  const { stdout, stderr } = await execo('ls')
  console.log({ stdout, stderr })
  expect(stdout)
    .toBe('Readme.md info node_modules package-lock.json package.json run_terminal.js terminal.test.js')
  done();
});

test('cleanup project removing scaffolded angular application', async (done) => {
  const { stdout, stderr } = await execo('rm -rf info; ls')
  console.log({ stdout, stderr })
  expect(stdout)
    .toBe('Readme.md node_modules package-lock.json package.json run_terminal.js terminal.test.js')
  done();
});

test('show the ping command in action', async (done) => {
  const { stdout, stderr } = await execo('ping 8.8.8.8 -c 2')
  console.log({ stdout, stderr })
  expect(stdout)
  expect(stdout)
  .toEqual(
     expect.stringContaining(
      'PING 8.8.8.8 (8.8.8.8): 56 data bytes 64 bytes from 8.8.8.8: icmp_seq=0 ttl=121'
     )
  )
  expect(stdout)
  .toEqual(
     expect.stringContaining(
      '64 bytes from 8.8.8.8: icmp_seq=1 ttl=121'
     )
  )
  
  done();
});

