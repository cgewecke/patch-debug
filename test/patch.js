const shell = require('shelljs');

describe('patch', ()=>{
  it('should patch: normal', () => {
    shell.cp('./opFns.js.orig', './target.js');
    shell.exec(`patch --verbose ./target.js ./normal.patch`);
    shell.rm('./target.js');
  })

  it('should patch: normal', ()=>{
    shell.cp('./opFns.js.orig', './target.js');
    shell.exec(`patch --verbose ./target.js ./unified.patch`);
    shell.rm('./target.js');
  })
})

