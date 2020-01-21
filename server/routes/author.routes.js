const authorController = require('../controllers/author.controller');

module.exports = function(app) {
    app.get('/api', authorController.index)
    app.post('/api/author', authorController.createAuthor)
    app.get('/api/author/all', authorController.getAllAuthors)
    app.get('/api/author/:id', authorController.getAuthor)
    app.put('/api/author/update/:id', authorController.updateAuthor)
    app.delete('/api/author/delete/:id', authorController.deleteAuthor)
}