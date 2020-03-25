const routes = require('express').Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

// ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// INCIDENTS
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
