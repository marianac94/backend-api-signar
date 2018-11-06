const express = require('express');
const router = express.Router();


const Diary = require('../models/diary');
 router.get('/', async (req, res, next) => {
  console.log(req.body, ' this is get all')
     try  {
      const allDiaries = await Diary.find();
      res.json({
        status: 200,
        data: allDiaries
      });

    } catch (err){
      res.send(err)
    }
});


router.post('/', async (req, res) => {
  try {
    console.log(req.body, ' this is req.body');
    const createdDiary = await Diary.create(req.body);
    console.log('response happening?')
    res.json({
      status: 200,
      data: createdDiary
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});


router.get('/:id', async (req, res, next) => {
     try  {
        const foundDiary = await Diary.findById(req.params.id);
        res.json({
          status: 200,
          data: foundDiary
        });

      } catch (err){
        res.send(err);
      }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedDiary = await Diary.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedDiary
    });

  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {
  try {
     const deleteDiary = await Diary.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deleteDiary
      });

  } catch(err){
    res.send(err);
  }
});



module.exports = router;
