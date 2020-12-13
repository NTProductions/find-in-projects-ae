var aepFolder = Folder("E:/Freelancer Projects/Brad Castillo/Kate Kensington/AEPS");
$.writeln(aepFolder.exists);
findInProjects(aepFolder, "00646");


function findInProjects(folder, searchName) {
app.beginSuppressDialogs();
var aeps = [];

var files = folder.getFiles();

for(var i = 0; i < files.length; i++) {
    if(files[i].name.indexOf(".aep") != -1) {
        aeps.push(files[i]);
        }
    }

var importedProjects = [];

for(var i = 0; i < aeps.length; i++) {
    $.writeln((aeps.length - i).toString()+ " projects left to import");
    importedProjects.push(app.project.importFile(new ImportOptions(aeps[i])));
    }

var foundMatches = [];
for(var i = 1; i <= app.project.numItems; i++) {
    if(app.project.item(i).name.indexOf(searchName) != -1) {
        foundMatches.push(app.project.item(i));
        }
    }

var thisItem;
for(var i = 0; i < foundMatches.length; i++) {
    thisItem = foundMatches[i];
    do {
        if(thisItem.parentFolder != app.project.rootFolder) {
        thisItem = thisItem.parentFolder;
        }
        } while(thisItem.parentFolder != app.project.rootFolder);
    $.writeln(thisItem.name);
    }

app.endSuppressDialogs(false);
}