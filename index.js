import fs from 'fs'
import figlet from 'figlet'
const text = fs.readFileSync('text.txt')
figlet(text, function(err, data) {
    if (err) {
        console.log(text);
        console.dir(err);
        return;
    }
    console.log(data)
});