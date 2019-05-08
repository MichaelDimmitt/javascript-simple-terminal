
const { spawn, exec } = require('child_process');
test('ls command providing correct results for the directory', async (done) => {
    await exec('ls', (err, out) => {
        console.log(err, out);
        expect(JSON.stringify(out))
          .toBe('"Readme.md\\nnode_modules\\npackage-lock.json\\npackage.json\\nterm.js\\nterm.test.js\\n\"')
        done();
    });
})


