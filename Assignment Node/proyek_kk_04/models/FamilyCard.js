const mysql = require('mysql');
const config = require('../config/db_config')
//
// const familyCards = [
//     {
//         id: '00001',
//         name: "John Doe",
//         address: "Dummy Address 01"
//     },
//     {
//         id: '00002',
//         name: "Budi",
//         address: "Dummy Address 02"
//     }
// ]

class FamilyCard {
    constructor() {
        this.db = mysql.createConnection(config.db)
        this.db.connect(err => {
            if (err) throw err
            console.log("MySQL Connection is Running")
        })
    }

    save(familyCardData) {
        familyCards.push(familyCardData)
    }

    all(callback) {
        const query = 'SELECT id, kepala_keluarga FROM kartu_keluarga'
        this.db.query(query, (err, results, field) => {
            if (err) return callback(err)
            const familyCards = results.map(results => ({
                id: results.id,
                name: results.kepala_keluarga
            }))
            this.db.end()
            callback(familyCards)
        })
        // return familyCards
    }

}

module.exports = FamilyCard