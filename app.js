import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { simpanContact } from './contacts';
// Ambil argument dari command line
yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Menambahkan Contact Baru',
        builder: { //  digunakan untuk mendefinisikan argumen yang dibutuhkan
            nama: {
                describe: 'Nama Lengkap',
                demandOption: true,
                type: 'string'
            },
            noHp: {
                describe: 'Nomor Telepon',
                demandOption: true,
                type: 'string'
            },
            email: {
                describe: 'Email',
                demandOption: false,
                type: 'string'
            }
        },
        handler(argv) { // fungsi yang dijalankan ketika perintah dipanggil
            simpanContact(argv.nama, argv.noHp, argv.email);
        },
    })
    .help()
    .parse(); // Mem-parsing argumen
