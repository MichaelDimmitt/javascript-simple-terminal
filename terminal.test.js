const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { mtrim } = require('js-trim-multiline-string');


test('use echo true command to verify exec child_process working correctly', async (done) => {
  const { stdout, stderr } = await exec('echo "true"');
  console.log('stdout: ',stdout,'\n','stderr: ',stderr);
  expect(stdout).toBe(
    `true
    `.mtrim()
  )
  done();
});

test('verify folder structure prior to @availity/workflow scaffold', async (done) => {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout: ',stdout,'\n','stderr: ',stderr);
  expect(stdout).toBe(
    `Readme.md
     node_modules
     package-lock.json
     package.json
     term.js
     terminal.test.js
    `.mtrim()
  )
  done();
});

test('providing correct results for @availity/workflow scaffold', async (done) => {
  const { stdout, stderr } = await exec('npx @availity/workflow init info --package angular');
  console.log('stdout: ',stdout,'\n','stderr: ',stderr);
  expect(JSON.stringify(stdout)).toEqual(
    expect.stringContaining('Success!')
  )
  expect(JSON.stringify(stdout)).not.toEqual(
    expect.stringContaining('Successs!')
  )
  done();
//        expect(out).toBe(
//          `
//          › Creating a new @availity/workflow-plugin-angular app in /Users/michaeldimmitt/new_c/97_lunchpool/simp-js_term/info.
//           
//           › Installing packages. This might take a couple of minutes.
//           › Installing @availity/workflow-plugin-angular...
//           
//           
//           > fsevents@1.2.9 install /Users/michaeldimmitt/new_c/97_lunchpool/simp-js_term/info/node_modules/fsevents
//           > node install
//           
//           [fsevents] Success: "/Users/michaeldimmitt/new_c/97_lunchpool/simp-js_term/info/node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse.node" is installed via remote
//           
//           > node-sass@4.12.0 install /Users/michaeldimmitt/new_c/97_lunchpool/simp-js_term/info/node_modules/node-sass
//           > node scripts/install.js
//           
//           Cached binary found at /Users/michaeldimmitt/.npm/node-sass/4.12.0/darwin-x64-57_binding.node
//           
//           > node-sass@4.12.0 postinstall /Users/michaeldimmitt/new_c/97_lunchpool/simp-js_term/info/node_modules/node-sass
//           > node scripts/build.js
//           
//           Binary found at /Users/michaeldimmitt/new_c/97_lunchpool/simp-js_term/info/node_modules/node-sass/vendor/darwin-x64-57/binding.node
//           Testing binary
//           Binary is fine
//           + @availity/workflow-plugin-angular@5.3.0
//           added 1359 packages from 667 contributors and audited 887195 packages in 45.874s
//           found 1 high severity vulnerability
//             run \`npm audit fix\` to fix them, or \`npm audit\` for details
//           › Installing dependencies using npm...
//           
//           added 217 packages from 192 contributors and audited 1762625 packages in 18.797s
//           found 1 high severity vulnerability
//             run \`npm audit fix\` to fix them, or \`npm audit\` for details
//           
//           ✔ Success! Created info at /Users/michaeldimmitt/new_c/97_lunchpool/simp-js_term/info
//           › Inside that directory, you can run several commands:
//           › 
//           ›   npm start
//           ›     Starts the development server.
//           › 
//           ›   npm run build
//           ›     Bundles the app into static files for production.
//           › 
//           ›   npm test
//           ›     Starts the test runner.
//           › 
//           › We suggest that you begin by typing:
//           ›   cd info
//           ›   npm start
//
//          `.mtrim()
//        )
}, 300000);

test('check new angular folder in directory', async (done) => {
  const { stdout, stderr } = await exec('mkdir info; ls');
  console.log('stdout: ',stdout,'\n','stderr: ',stderr);
  expect(stdout).toBe(
    `Readme.md
     info
     node_modules
     package-lock.json
     package.json
     term.js
     terminal.test.js
    `.mtrim()
  )
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
  const { stdout, stderr } = await exec('rm -rf info; ls')
  console.log('stdout: ',stdout,'\n','stderr: ',stderr);
  expect(stdout).toBe(
    `Readme.md
     node_modules
     package-lock.json
     package.json
     term.js
     terminal.test.js
    `.mtrim()
  )
  done();
}, 30000 );


test('show the ping command in action', async (done) => {
  const { stdout, stderr } = await exec('ping 8.8.8.8 -c 2')
  console.log('stdout: ',stdout,'\n','stderr: ',stderr);
  expect(stdout)
  .toEqual(
     expect.stringContaining(
       'PING 8.8.8.8 (8.8.8.8): 56 data bytes'
     )
  )
  expect(stdout)
  .toEqual(
     expect.stringContaining(
      '64 bytes from 8.8.8.8: icmp_seq=0 ttl='
     )
  )
  expect(stdout)
  .toEqual(
     expect.stringContaining(
      '64 bytes from 8.8.8.8: icmp_seq=1 ttl='
     )
  )
  done();
});
