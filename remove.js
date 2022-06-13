import fs from 'fs'
import figlet from 'figlet'

fs.unlink('folder/file_delete.txt', err => {
   if(err) throw err;
   console.log('Файл успешно удалён');
});