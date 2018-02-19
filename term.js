async function term(args) {
  string_construction(args);
}
function string_construction(args){
  let str = '';
  for (i = 0; i < args.length; i++) {
    str = str + args[i] + " ";
  }
  console.log("\ncommand executed,", '{str}', "\n");
}
term(process.argv.slice(2));
