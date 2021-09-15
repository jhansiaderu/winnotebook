/*const express = require('express');
const mongoCon = require('mongodb');
const app = express();

///// middle part
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("This just for test");
});

app.get('/viewTodos', (req, res) => {
    const MongoClient = mongoCon.MongoClient;
    const uri = "mongodb+srv://jhansi:Srinivasulu123@amr1cluster.ylgxj.mongodb.net/winnotebook?retryWrites=true&w=majority";

    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("winnotebook");
        dbo.collection("jhansi").find().toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            return res.json(result);
        });
    });
});

app.get('/viewTodos/:id', (req, res) => {
    const MongoClient = mongoCon.MongoClient;
    const uri = "mongodb+srv://amr-allRounder:android123@amr1cluster.ylgxj.mongodb.net/TODO?retryWrites=true&w=majority";

    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TODO");
        const objId = new mongoCon.ObjectID(req.params.id);
        dbo.collection("todo_node_react").findOne({ _id: objId }, function (err, result) {
            if (err) {
                db.close();
                throw err;
            }
            db.close();
            return res.json(result);
        });
    });
});

app.post('/addTodo', (req, res) => {
    const MongoClient = mongoCon.MongoClient;
    const uri = "mongodb+srv://amr-allRounder:android123@amr1cluster.ylgxj.mongodb.net/TODO?retryWrites=true&w=majority";

    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TODO");
        if (req != undefined && req != null && req != "") {
            dbo.collection("todo_node_react").insertOne(req.body, function (err, result) {
                if (err) {
                    db.close();
                    throw err;
                }
                res.send("Successfully Added Document");
                db.close();
            });
        }
    });
});

app.patch('/updateTodo/:id', (req, res) => {
    const MongoClient = mongoCon.MongoClient;
    const uri = "mongodb+srv://amr-allRounder:android123@amr1cluster.ylgxj.mongodb.net/TODO?retryWrites=true&w=majority";

    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TODO");
        const objId = new mongoCon.ObjectID(req.params.id)
        if (req != undefined && req != null && req != "") {
            dbo.collection("todo_node_react").updateOne({ _id: objId }, { $set: req.body }, { new: true }, function (err, result) {
                if (err) {
                    db.close();
                    throw err;
                }
                res.send("Successfully Updated Document");
                db.close();
            });
        }
    });
});

app.delete('/deleteTodo/:id', (req, res) => {
    const MongoClient = mongoCon.MongoClient;
    const uri = "mongodb+srv://jhansi:Srinivasulu123@amr1cluster.ylgxj.mongodb.net/TODO?retryWrites=true&w=majority";

    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TODO");
        const objId = new mongoCon.ObjectID(req.params.id)
        if (req != undefined && req != null && req != "") {
            dbo.collection("todo_node_react").deleteOne({ _id: objId }, function (err, result) {
                if (err) {
                    db.close();
                    throw err;
                }
                res.send("Successfully Deleted Document");
                db.close();
            });
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
});
*/