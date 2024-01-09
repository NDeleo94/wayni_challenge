const Router = require('express');
const DebtorController = require('../controllers/debtor');
const router = Router();

router.get('/', DebtorController.getAllDebtors)

router.get('/:id', DebtorController.getDebtorById)
router.get('/code/:code', DebtorController.getDebtorByCode)

router.post('/', DebtorController.createDebtor);
router.put('/:id', DebtorController.updateDebtor);
router.delete('/:id', DebtorController.deleteDebtor);

module.exports = router