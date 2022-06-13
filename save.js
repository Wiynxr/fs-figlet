const text = 'lorem ipsum :)';
import fs from 'fs'

fs.writeFile('lorem.txt', text, err => {
    if (err) {
      console.log('произошла ошибка');
    } else {console.log('файл сохранен')}
  
  });

