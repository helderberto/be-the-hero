const routes = require('express').Router();

routes.get('/welcome', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack 11',
    aluno: 'Helder B. Berto'
  })
});

module.exports = routes;
