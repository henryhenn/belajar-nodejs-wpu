const {tulisPertanyaan, simpanContact} = require("./contacts")

const main = async () => {
    const nama = await tulisPertanyaan("Masukkan nama Anda: ")
    const email = await tulisPertanyaan("Masukkan email Anda: ")
    const notelp = await tulisPertanyaan("Masukkan no. handphone Anda: ")

    simpanContact(nama, email, notelp)
}

main()

