import express from 'express';
import { MonitorController } from '../controllers';

const router = express.Router();

router.get('/', MonitorController.index);
router.post('/', MonitorController.store);
router.get('/:id', MonitorController.find);
router.put('/:id', MonitorController.update);
router.delete('/:id', MonitorController.delete);

export default router;
