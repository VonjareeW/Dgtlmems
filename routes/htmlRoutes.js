const router = require('express').Router();
const path = require('path');

// takes the index.html as a response to a client during a GET request 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// Defines the notes.html as a response  when a GET request is made 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;