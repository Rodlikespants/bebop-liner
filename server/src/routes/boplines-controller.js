import express from 'express';
import MelodicCellService from '../services/melodic-cell-service.js';
import BoplinesService from '../services/boplines-service.js';

const melodicCellService = new MelodicCellService();
const boplinesService = new BoplinesService();

const router = express.Router();

// Generate boplines based on melodic cells
router.get('/', (req, res) => {

    const allCells = melodicCellService.getAllCells();
    // add request parameter handling for type (M251), key etc.

    // console.log(allCells);

    const boplines = boplinesService.generateBoplines(key, type, allCells);

    res.send(boplines);
});


export default router