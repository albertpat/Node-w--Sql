import express from "express";
import { findOne,findAll, addOne, updateOne, removeOne } from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.get("/", async function (req, res, next) {
    try {
        const data = await findAll();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

productRouter.get("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const data = await findOne(id);
        if (data.length === 0) {
            res.status(404).send('Product not found');
        } else {
            res.json(data[0]);
        }
    } catch (err) {
        next(err);
    }
});

productRouter.post("/", async function (req, res, next) {
    try {
        const { name, price, description } = req.body;
        const result = await addOne(name, price, description);
        res.status(201).json({ id: result.insertId, name, price, description });
    } catch (err) {
        next(err);
    }
});

productRouter.put("/:id", async function (req, res, next) {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        await updateOne(name, price, description, id);
        res.json({ id, name, price, description });
    } catch (err) {
        next(err);
    }
});

productRouter.delete("/:id", async (req, res, next) => {
    try{
        const { id } = req.params;
        const data = await removeOne(id);
        res.json(data);
    }catch(err) {
        next(err)
    }
})

export default productRouter;