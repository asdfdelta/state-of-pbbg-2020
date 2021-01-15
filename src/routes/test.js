'use strict';

const polka = require('polka')

polka().get('/test', async (req, res) => {
    let message = await db.getTest();
    res.end(message);
});
