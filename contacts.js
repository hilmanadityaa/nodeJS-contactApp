import chalk from 'chalk';
import fs from 'fs';
import validator from 'validator';

// membuat folder data jika belum ada
const dirPath = ('./data/contacts.json');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}


const dataPath = ('./data/contacts.json');
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8 ');
}


export const simpanContact = (nama, noHp, email) => {
    const contact = { nama, noHp, email };
    const file = fs.readFileSync('./data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain'));
        return false;
    }

    // cek email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid'));
            return false;
        }
    }

    // cek nomor HP
    if (!validator.isMobilePhone(noHp, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor Hp tidak valid'));
        return false;
    }
    contacts.push(contact);


    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold('Terimakasih sudah mengisi data'));
};
