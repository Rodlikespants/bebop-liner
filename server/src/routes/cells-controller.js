import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import MelodicCellService from '../services/melodic-cell-service.js';
// import getAllCells from '../services/melodicCellService.js';

const melodicCellService = new MelodicCellService();
// const getAllCells = melodicCellService.getAllCells.bind(melodicCellService);

const router = express.Router();

// Getting the list of cells from the mock database
router.get('/', (req, res) => {
    res.send(melodicCellService.getAllCells());
});

// router.get('/:id', (req, res) => {
//     const { id } = req.params;

//     const foundCell = cells.find((cell) => cell.id === id)

//     res.send(foundCell)
// });

// router.post('/', (req, res) => {
//     const cell = req.body;

//     cells.push({ ...cell, id: uuidv4() });

//     res.send(`${cell.first_name} has been added to the Database`);
// });

// router.patch('/:id', (req, res) => {
//   const { id } = req.params;

//   const { first_name, last_name, email} = req.body;

//   const cell = cells.find((cell) => cell.id === id)

//   if(first_name) cell.first_name = first_name;
//   if(last_name) cell.last_name = last_name;
//   if(email) cell.email = email;

//   res.send(`Melodic cell with the ${id} has been updated`)

// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   cells = cells.filter((cell) => cell.id !== id)

//   res.send(`${id} deleted successfully from database`);
// });

export default router