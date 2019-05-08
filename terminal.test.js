
const { spawn, exec } = require('child_process');

test('use echo true command to verify exec child_process working correctly', async (done) => {
    await exec('echo "true"', (err, out) => {
        console.log(err, out);
        expect(JSON.stringify(out))
          .toBe('"true\\n\"')
        done();
    });
});

test('verify folder structure prior to @availity/workflow scaffold', async (done) => {
    await exec('ls', (err, out) => {
        console.log(err, out);
        expect(JSON.stringify(out))
          .toBe('"Readme.md\\nnode_modules\\npackage-lock.json\\npackage.json\\nterm.js\\nterminal.test.js\\n\"')
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
        done();
    });
}, 300000);

test('check new angular folder in directory', async (done) => {
    await exec('ls', (err, out) => {
 //       console.log(err, out);
        expect(JSON.stringify(out))
          .toBe('"Readme.md\\ninfo\\nnode_modules\\npackage-lock.json\\npackage.json\\nterm.js\\nterminal.test.js\\n\"')
        done();
    });
});


test('cleanup project removing scaffolded angular application', async (done) => {
    await exec('rm -rf info; ls', (err, out) => {
//        console.log(err, out);
        expect(JSON.stringify(out))
          .toBe('"Readme.md\\nnode_modules\\npackage-lock.json\\npackage.json\\nterm.js\\nterminal.test.js\\n\"')
        done();
    });
});



