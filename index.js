var fs = require('fs');
var colors = require('colors');

fs.readdir('./node_modules', function(err, files) {
    console.log('Zawartość katalogu node_modules to: '.green);
    console.log(files);

    fs.writeFile('./newfile.txt', files, function(err) {
        if(err) throw err;
        console.log('Zapisano do pliku newfile.txt.'.green);
    });
});


/*fs.readFile('./tekst.txt','utf-8', function(err, data) {
    console.log('Dane przed zapisem:'.green)
    console.log(data);

    fs.appendFile('./tekst.txt',' Bania', function(err) {
        if(err) throw err;
        console.log('Zapisano!'.blue);

        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie:'.green);
            console.log(data);
        });

    });

});*/












































