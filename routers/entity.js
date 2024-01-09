const Router = require('express');
const EntityController = require('../controllers/entity');
const router = Router();

router.get('/', EntityController.getAllEntities);

router.get('/:id', EntityController.getEntityById);
router.get('/code/:code', EntityController.getEntityByCode);

router.post('/', EntityController.createEntity);
router.put('/:id', EntityController.updateEntity);
router.delete('/:id', EntityController.deleteEntity);


module.exports = router