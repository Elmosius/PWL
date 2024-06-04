const FamilyCard = require('../models/FamilyCard');
const index = (req, res) => {
    new FamilyCard().all(familyCards => {
            res.render('family_card/index', {
                familyCards: familyCards
            })
        }
    );
    // res.render('family_card/index', {
    //     familyCards : new FamilyCard().all()
    // })
}

const create = (req, res) => {
    res.render('family_card/create')
}

const store = (req, res) => {
    const data = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address
    }
    new FamilyCard().save(data)
    res.redirect('/fam-card')
}

module.exports = {
    index,
    create,
    store
}