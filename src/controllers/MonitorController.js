import db from '../models';

const Monitor = db.Monitor;

class MonitorController {

  static async index(req, res) {
    try {
      const monitors = await Monitor.findAll();
      res.json(monitors);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error, status: 500 });
    }

  }

  static async store(req, res) {
    try {
      const monitor = await Monitor.create(req.body);
      res.json(monitor);
      req.io.emit('monitor', monitor);
    } catch (error) {
      res.status(500);
      res.json({ error, status: 500 });
    }
  }

  static async find(req, res) {
    try {
      const { id } = req.params;
      const monitor = await Monitor.findByPk(id);
      if (monitor) {
        res.json(monitor);
      } else {
        res.status(404);
        res.json({ message: 'Monitor not found' });
      }
    } catch (error) {
      res.status(500);
      res.json({ error, status: 500 });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const monitor = await Monitor.update(
        req.body,
        {
          returning: true,
          limit: 1,
          where: { id }
        }
      );
      if (monitor && monitor.length) {
        res.json(monitor[1][0]);
      } else if (!monitor) {
        res.status(404);
        res.json({ message: 'Monitor not found' });
      } else {
        res.json(monitor);
      }
      new Error('Monitor update error.');
    } catch (error) {
      res.status(500);
      res.json({ error, status: 500 });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      const monitor = await Monitor.destroy({ where: { id } });
      if (monitor) {
        res.json({ message: 'Monitor deleted' })
      } else {
        res.status(404);
        res.json({ message: 'Monitor not found' });
      }
    } catch (error) {
      res.status(500);
      res.json({ error, status: 500 });
    }
  }

}

export default MonitorController;
