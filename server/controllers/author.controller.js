const { Author } =  require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello"
    });
}

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(500).json(err));
}
// 418 im a teapot
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id: request.params.id })
        .then(authors => response.json(authors))
        .catch(err => response.status(500).json(err))
}

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.status(500).json(err));
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
}