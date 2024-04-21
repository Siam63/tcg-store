const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3002;
require('dotenv/config');

app.use(express.json());
app.use(cors());
app.listen(3002, () => console.log(`Server running on port ${PORT}`));

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
})

const mongoose = require("mongoose");

const itemsRoute = require('../routes/items');
const Item = require("../models/Item.js");

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.use('/items', itemsRoute);

// get all the items
app.get('/api/items', async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch (err){
        res.json({ message: err });
    }
})

// get a specific item
app.get("/api/items/:id", async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);
        res.json(item);
    }catch(err){
        res.json({ message: err });
    }
});

// add an item to the DB
app.post("/api/items", async (req, res) => {
    const item = new Item({
        name: req.body.name,
        condition: req.body.condition,
        price: req.body.price,
        picture: req.body.picture
    });

    try{
        const savedItem = await item.save();
        res.json(savedItem);
    }catch(err){
        res.json({ message: err });
    }
});

// delete an item from the DB
app.delete("/api/items/:id", async (req, res) => {
    try {
      const itemId = req.params.id;
  
      if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(400).json({ msg: "Invalid item ID" });
      }
  
      const deletedItem = await Item.findByIdAndDelete(itemId);
  
      if (!deletedItem) {
        return res.status(404).json({ msg: "Item not found" });
      }
  
      res.json({ msg: "Item deleted successfully.", deletedItem });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
});
  