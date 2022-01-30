import {Router} from "express"
import {Item} from "../entity/Item"
// import checkAuth from "../middleware/checkAuthenticated"
/**
* @author Pierre Dahmani
* @created 30.01.2022
* @file Containing required routes for managing our shopping cart items.
*/

// using router to group routes
const router = Router()

// post --> HTTP METHOD POST. used to create data for a given entity.
router.post("", async (req, res) => {
    const {text} = req.body
    // error out if empty text.
    if (!text) {
        res.sendStatus(500).send("empty text!");
    }
    const item = Item.create({text})
    await item.save()
    res.json(item)
})

// get --> HTTP METHOD GET. used to get all data for a given entity.
router.get("", async (_, res) => {
    const items = await Item.find();
    res.json(items)
})

// DELETE --> HTTP METHOD DELETE. used to delete data from a given entity.
router.delete("/:id", async (req, res) => {
    const {id} = req.params
    // error out if empty text.
    if (!id) {
        // if required param is missing, return bad request.
        // src: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
        return res.sendStatus(400);
    }
    await Item.delete({id})
    return res.status(200).send("File deleted.")
})

// PUT --> HTTP METHOD PUT. used to update data from a given entity.
router.put("/:id", async (req, res) => {
    const {id} = req.params

    // error out if required data was not given.
    if (!id) {
        return res.sendStatus(500);
    }
    const item = await Item.findOne({id})
    // error out if entry was not found.
    if (item === undefined) {
        return res.sendStatus(500);
    }
    const newItem = await Item.merge(item, req.body).save()
    return res.json(newItem)
})

export default router
