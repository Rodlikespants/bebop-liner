import express from 'express';
import MelodicCellService from '../services/melodicCellService.js';

const melodicCellService = new MelodicCellService();

const router = express.Router();

// Generate boplines based on melodic cells
router.get('/', (req, res) => {

    const allCells = melodicCellService.getAllCells();
    console.log(allCells);

    const boplines = null; // TODO implement bopline generation logic
    res.send(boplines);
});


export default router