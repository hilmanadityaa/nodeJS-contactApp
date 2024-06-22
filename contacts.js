import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dirPath = ('./data/contacts.json');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = ('./data/contacts.json');
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8 ');
}

export const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};

export const simpanContact = (nama, email) => {
    const contact = { nama, email };
    const file = fs.readFileSync('./data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);

    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih sudah mengisi data');
    rl.close();
};
