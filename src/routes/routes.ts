import express, { Request, Response } from "express"
const model = require("../../models/user_model");
const router = express.Router();



// POST request
router.post("/add", async(req: Request, res: Response) => {
        const addData = new model({
            title : req.body.title,
            description : req.body.description
        });
        const addValue = await addData.save();
        res.json(addValue);
    });



// GET request
router.get("/", async(req: Request, res: Response) => {
      try{
        const dataItem = await model.find({});
        res.status(200).json({
            data : dataItem,
        });
        console.log({dataItem});
      } catch (error){
        console.log(error);
      }
    });



// DELETE request
router.delete("/delete", async(req: Request, res: Response) => {
    const filter = {
        title: req.body.title,
    }
    const dataItem = await model.deleteOne(filter)
    .then((data: any) => 
    res.json({
        data: data,
    }))
    .catch((error: any) => {return res.send(error);
    });
  });



// UPDATE request
router.put("/update", async(req: Request, res: Response) => {
    const filter = {
        title: req.body.title,
    };
    const updatedData = {
        description: req.body.description,
    };
    const dataItem = await model.updateOne(filter, updatedData, {new: true})
    .then((data: any) => 
    res.json({
        data: data,
    }))
    .catch((error: any) => {return res.send(error);
    });
  });

export { router };