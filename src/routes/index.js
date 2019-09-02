import express from 'express';

import MonitorRoute from './MonitorRoute';

const router = express.Router();

/* Ping Application */
router.get('/ping', (req, res) => res.json({ msg: 'pong' }));

router.use('/monitor', MonitorRoute);

export default router;
