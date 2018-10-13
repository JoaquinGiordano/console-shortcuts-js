const exec = require('child_process').execFile;
const fs = require('fs');
const opn = require('opn');
const path = require('path');
let apps = [];
let id = 0;
let data_path = path.join(process.env.ProgramData, '/console-shortcuts');

    if (!fs.existsSync(data_path)) {
        fs.mkdirSync(data_path)
    }

    if (!fs.existsSync(path.join(data_path, '/path.json'))){
        fs.writeFileSync(path.join(data_path, '/path.json'), JSON.stringify(apps));
    }

    exports.shortcut = {
        "add":(app) =>{
            apps = JSON.parse(fs.readFileSync(path.join(data_path, '/path.json')));
            apps.push(app);
            fs.writeFileSync(path.join(data_path, '/path.json'), JSON.stringify(apps));
            console.log("\x1b[32m%s\x1b[0m","Shortcut added");
        },
        "list": ()=>{
            apps = JSON.parse(fs.readFileSync(path.join(data_path, '/path.json')));
            apps.forEach((app) => {
                console.log(`ID: ${"\x1b[36m" + id + "\x1b[0m"}, App: ${"\x1b[36m" + app.name + "\x1b[0m"}, Location: ${"\x1b[36m" + app.location + "\x1b[0m"}`)
                id++;
            });
            id = 0;
        },
        "remove":(id) =>{
            apps = JSON.parse(fs.readFileSync(path.join(data_path, '/path.json')));
            if(apps.length - 1 >= id){
                apps.splice(id,1);
                fs.writeFileSync(path.join(data_path, '/path.json'), JSON.stringify(apps));
                console.log("\x1b[31m%s\x1b[0m","Shortcut removed");
            }else{
                console.log("\x1b[31m%s\x1b[0m","Please insert a valid ID");
            }
            
       },
       "move": (appid, position) =>{
           apps = JSON.parse(fs.readFileSync(path.join(data_path, '/path.json')));
           app = Number(appid);
           app2 = apps[Number(appid)];
           pos = Number(position);
           pos2 = apps[Number(position)];

           apps.splice(pos, 1, app2);
           apps.splice(app, 1, pos2);
           
           
           fs.writeFileSync(path.join(data_path, '/path.json'), JSON.stringify(apps));
           console.log("\x1b[32m%s\x1b[0m", "Shortcut Moved");
       }
    }

    exports.start = (name) =>{
        apps = JSON.parse(fs.readFileSync(path.join(data_path, '/path.json')));
        if (Number.isInteger(Number(name))){
            if (apps[Number(name)].location.substr(0, 4) === "http" || apps[Number(name)].location.substr(0, 3) === "www") {
                console.log("\x1b[36m%s\x1b[0m", "Opening webpage...");
                opn(apps[Number(name)].location);
            } else if (apps[Number(name)].location.substr(0, 7) === "dir:///" || apps[Number(name)].location.substr(0, 6) === "file://") {
                console.log("\x1b[36m%s\x1b[0m", "Opening directory...")
                if (apps[Number(name)].location.substr(0, 7) === "dir:///") {

                    opn(apps[Number(name)].location.replace('dir:///', ''))
                } else {

                    opn(apps[Number(name)].location.replace('dir://', ''))
                }

            } else {
                console.log("\x1b[36m%s\x1b[0m", "Opening app...");
                exec(apps[Number(name)].location);
            }
        }else{
            apps.forEach((app) => {
                if (app.name === name) {
                    if (app.location.substr(0, 4) === "http" || app.location.substr(0, 3) === "www") {
                        console.log("\x1b[36m%s\x1b[0m", "Opening webpage...");
                        opn(app.location);
                    } else if (app.location.substr(0, 7) === "dir:///" || app.location.substr(0, 6) === "file://") {
                        console.log("\x1b[36m%s\x1b[0m", "Opening directory...")
                        if (app.location.substr(0, 7) === "dir:///") {

                            opn(app.location.replace('dir:///', ''))
                        } else {

                            opn(app.location.replace('dir://', ''))
                        }

                    } else {
                        console.log("\x1b[36m%s\x1b[0m", "Opening app...");
                        exec(app.location);
                    }

                }
            });
        }
        
        
    }

    exports.help = () =>{
        console.log(`


        ${"\x1b[36mCommands\x1b[0m"}:

            cs add [shortcut name] "[shortcut dir]"
            cs remove [shortcut id]
            cs list
            cs help
            cs move


        ${"\x1b[36mUses\x1b[0m"}:

            cs add: Add a new shortcut
            cs remove: Remove a shortcut
            cs list: Show a list of the shortcuts that were created
            cs help: Show the commands list and uses
            cs move: Change the Shortcut position


        ${"\x1b[36mExamples\x1b[0m"}:

            cs add chrome "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            cs remove 0
            cs list
            cs help
            cs move 0 2


        ${"\x1b[36mAbbreviations\x1b[0m"}:
            
            cs add: -
            cs remove: cs rm
            cs list: cs ls
            cs help: -
            cs move: cs mv

            
        `)
    }
