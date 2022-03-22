const { Router } = require('express');

const userControllers = require('../controllers/userControllers');

const router = Router();

router.post('/create', userControllers.createUser);
router.get('/byEmail/:mail', userControllers.getUserByEmail);
router.delete('/delete/:userId', userControllers.deleteUser);
router.patch('/update/:userId', userControllers.updateUser);

module.exports = router;
