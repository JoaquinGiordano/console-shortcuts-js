var exec = require('child_process').execFile;
var fs = require('fs');
var opn = require('opn');
var apps = [];
var id = 0;

    exports.shortcut = {
        "add":function(app){
            if (fs.existsSync('C:/.cstemp/path.json')){
                apps = JSON.parse(fs.readFileSync('C:/.cstemp/path.json'));
                apps.push(app);
                fs.writeFileSync('C:/.cstemp/path.json', JSON.stringify(apps));
                console.log("Shortcut added");
                
            }else{
                fs.mkdirSync('C:/.cstemp')
                apps.push(app);
                fs.writeFileSync('C:/.cstemp/path.json', JSON.stringify(apps));
                console.log("Database created");
                console.log("Shortcut added");
            }
            
        },
        "list":function(){
            if (!fs.existsSync('C:/.cstemp/path.json')){
                fs.mkdirSync('C:/.cstemp')
                apps.push(app);
                fs.writeFileSync('C:/.cstemp/path.json', JSON.stringify(apps));
                console.log("Database created");
            }

            apps = JSON.parse(fs.readFileSync('C:/.cstemp/path.json'));
            apps.forEach((app) => {
                console.log(`App: ${app.name}, Location: ${app.location}, ID: ${id}`)
                id++;
            });
            id = 0;
        },
        "remove":function(id){
            if (!fs.existsSync('C:/.cstemp/path.json')){
                fs.mkdirSync('C:/.cstemp')
                apps.push(app);
                fs.writeFileSync('C:/.cstemp/path.json', JSON.stringify(apps));
                console.log("Database created");
            }

            apps = JSON.parse(fs.readFileSync('C:/.cstemp/path.json'));
            if(apps.length - 1 >= id){
                apps.splice(id,1);
                fs.writeFileSync('C:/.cstemp/path.json', JSON.stringify(apps));
                console.log("Shortcut removed");
            }else{
                console.log("Please insert a valid ID");
            }
            
       }
    }

    exports.start = function(name){
        apps = JSON.parse(fs.readFileSync('C:/.cstemp/path.json'));
        apps.forEach((app) => {
            if(app.name === name){
                if(app.location.substr(0,4) === "http" || app.location.substr(0,3) === "www"){   
                    console.log("Opening webpage...");
                    opn(app.location);
                }else{
                    console.log("Opening app...");
                    exec(app.location);
                }
            }
        });
        
    }

