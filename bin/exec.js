#!/usr/bin/env node

var args = process.argv.splice(process.execArgv.length + 2);
var lib = require('../lib/index.js');

 
    if(args[0] == "add"){
        if(args[1] != "add" && args[1] != "remove" && args[1] != "list"){
            lib.shortcut.add({"name": args[1], "location": args[2]});
        }
    }

    if(args[0] == "list" || args[0] == "ls"){
        lib.shortcut.list();
    }
  
    if (args[0] == "remove" || args[0] == "rm"){
        lib.shortcut.remove(args[1]);
    }

if (args[0] != "add" && args[0] != "remove" && args[0] != "rm" && args[0] != "list" && args[0] != "ls" && args[0] != "help"){
        lib.start(args[0]);
    }

    if(args[0] == "help"){
        lib.help();
    }
    
        