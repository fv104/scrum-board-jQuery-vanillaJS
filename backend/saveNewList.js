let fs = require('fs');

let saveList = (req, res) => {
    let list = req.body;
    
   // Read file from fs
    fs.readFile('backend/board.json', 'utf-8', (e, file) => {
        // Parse string JSON to JS object
        let board;
        try {
            board = JSON.parse(file);
        } catch (error) {
            res.sendStatus(500)
        }
        board.lists.push(list);
        // write the file back
        fs.writeFile('backend/board.json', JSON.stringify(board), (e) => {
            if (e) {
                // if any error saving the file respond with 500
                res.sendStatus(500);
                return;
            }
            // if all ok respond with 200 (OK)
            res.sendStatus(200);
        })


    })

    
}
module.exports = saveList;

// 