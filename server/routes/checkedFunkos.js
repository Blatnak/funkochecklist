// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
// const permission = require('../middlewares/permission');

const {
    getCheckedFunkos,
    getCheckedFunkosUser,
    newCheckedFunko,
    updateCheckedFunko,
    deleteCheckedFunko
} = require('../controllers/checkedFunkosController');

router.get('/', getCheckedFunkos);
router.get('/userid/:userId', getCheckedFunkosUser);

router.post('/', newCheckedFunko);

router.put('/', updateCheckedFunko);

router.put('/', deleteCheckedFunko);

module.exports = router