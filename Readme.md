## Objectives

## Execute a file in node(without a server)

## Give me a simple default shell so that I can execute stuff. 

## Progammer self.Instructions()
<pre>
  git clone https://github.com/MichaelDimmitt/javascript-simple-terminal.git;
  cd javascript-simple-terminal;
  brew install npm;
  npm install;
  npm test;
  # The test suite takes 2 minutes to run please be patient.
  # This is because it scaffolds an angular application in the background.
</pre>

Running the terminal: (usage)
1) node run_terminal.js 'ls;' ls pwd
// result: executes the command `ls; ls; pwd;`

2) node run_terminal.js ls pwd ls
// result: executes the command `ls; pwd; ls;`

3) node run_terminal.js 'ls; echo "hi"; pwd'
// result: executes the command `ls; echo "hi"; pwd"