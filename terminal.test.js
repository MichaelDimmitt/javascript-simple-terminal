const { spawn, exec } = require('child_process');
const { mtrim } = require('js-trim-multiline-string');

test('use echo true command to verify exec child_process working correctly', async (done) => {
    await exec('echo "true"', (err, out) => {
        console.log(err, out);
        expect(out).toBe(
          `true
          `.mtrim()
        )
        done();
    });
});

test('verify folder structure prior to @availity/workflow scaffold', async (done) => {
    await exec('ls', (err, out) => {
        console.log(err, out);
        expect(out).toBe(
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
});

test('providing correct results for @availity/workflow scaffold', async (done) => {
    await exec('npx @availity/workflow init info --package angular', (err, out) => {
        console.log(err, out);
        expect(JSON.stringify(out)).toEqual(
          expect.stringContaining('Success!')
        )
        expect(JSON.stringify(out)).not.toEqual(
          expect.stringContaining('Successs!')
        )
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
        done();
    });
}, 300000);

test('check new angular folder in directory', async (done) => {
    await exec('ls', (err, out) => {
        console.log(err, out);
        expect(out).toBe(
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
});


test('cleanup project removing scaffolded angular application', async (done) => {
    await exec('rm -rf info; ls', (err, out) => {
        expect(out).toBe(
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
});



