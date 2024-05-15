const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3002;
require('dotenv/config');

app.use(express.json());
app.use(cors());

app.use(cors({ origin: 'http://localhost:3000' })); // Adjust the origin as needed

// app.get('/cors', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
// })

const mongoose = require("mongoose");

const Item = require("../models/Item.js");

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// get all the items
app.get('/api/getItems', async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch (err){
        res.json({ message: err });
    }
})

// get a specific item
app.get('/api/getItem/:id', async (req, res) => {
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

// update an item with a specific ID
app.put("/api/edit/:id", async (req, res) => {
    try{
        const itemId = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(itemId)){
            return res.status(400).json({ message: "Invalid item ID" });
        }

        const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, { new: true });

        if(!updatedItem){
            return res.status(400).json({ message: "Item not found" });
        }

        res.json({ message: "Item successfully updated", updatedItem });
    }catch (error){
        console.error(error);
        res.status(500).send("Server Error...");
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));