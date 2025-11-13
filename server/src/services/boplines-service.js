import CellNoteCalculator from './cell-note-calculator.js';

class BoplinesService {
    constructor() {
    }
    // generate bop lines based on melodic cells
    // TODO: implement other keys and types
    // Default boundaries defined by Tenor Sax, C4 = 60, E6 = 88
    static generateBoplines(key = 'CMaj', type = 'M251', melodicCells, octave = 4, lowerNoteBoundary = 60, upperNoteBoundary = 80) {
        // initialize the cells into hashes by starting chord tone
        const cellsByStart = {};
        melodicCells.forEach((cell) => {
            if (!cellsByStart[cell.start]) {
                const matchingCells = [];
                matchingCells.push(cell);
                cellsByStart[cell.start] = matchingCells;
            }
            cellsByStart[cell.start].push(cell);
        });

        cellsByStart.forEach((cells, start) => {
            // randomize interal cell lists ordering
            cells.sort(() => Math.random() - 0.5);
        });

        // Ascending melodic cells sorted by descending distance
        const ascendingCells = melodicCells.filter(cell => cell.direction == 'ASC');
        ascendingCellsMap = Object.groupBy(ascendingCells, (cell) => cell.start);
        ascendingCellsMap.forEach((cells, start) => {
            cells.sort((a, b) => b.distance - a.distance);
        });

        // Descending melodic cells sorted by descending distance
        const descendingCells = melodicCells.filter(cell => cell.direction == 'DESC');
        // descendingCells.sort((a, b) => b.distance - a.distance);
        descendingCellsMap = Object.groupBy(descendingCells, (cell) => cell.start);
        descendingCellsMap.forEach((cells, start) => {
            cells.sort((a, b) => b.distance - a.distance);
        });

        const cellNoteCalculator = new CellNoteCalculator();
        // pick random starting chord tone
        const startChordTones = Object.keys(cellsByStart);
        const randomIndex = Math.floor(Math.random() * startChordTones.length);
        const startChordTone = cellsByStart[randomIndex];

        // TODO figure out how to iterate
        this.initiateCellPicker(cellsByStart, key, ascendingCellsMap, descendingCellsMap, octave, lowerNoteBoundary, upperNoteBoundary, startChordTone);

        // Find the next possible cells to chain based on ending chord tone
        // Specify upper and lower note boundaries
        // Iterate through the note range while selecting and chaining melodic cells to check boundaries
        // If we reach the boundary, use an opposing direction melodic cell to turn around
        // Placeholder logic for bopline generation
        const boplines = melodicCells.slice(0, 5).map((cell) => ({
            boplineId: cell.id,
            boplinePattern: cell.value,
        }));



        // const boplines = [];
        // for (const start in cellsByStart) {
        //     const cells = cellsByStart[start];
        //     cells.forEach((cell) => {
        //         boplines.push({
        //             boplineId: cell.id,
        //             boplinePattern: cell.value,
        //         });
        //     });
        // }

        return boplines;
    }

    static initiateCellPicker(cellsByStart, key, octave, lowerNoteBoundary, upperNoteBoundary, startChordTone, ascendingCellsMap, descendingCellsMap) {
        var bopline = '';
        var octave = octave;
        var allCellsPicked = false;

        // First step on a randomly selected starting chord tone
        const matchingCells = cellsByStart[startChordTone];
        // const randomIndex = Math.floor(Math.random() * matchingCells.length);

        const success = true;
        // Should be guaranteed to have at least one cell
        var selectedCell = matchingCells[0];
        // remove selected cell from matchingCells to avoid repetition
        matchingCells.splice(0, 1);
        // re-add this cell to end of recency list
        matchingCells.push(selectedCell);

        // Heuristic for max num tries in case of infinite loop
        const maxNumTries = ascendingCellsMap[startChordTone].length + descendingCellsMap[startChordTone].length;

        const boplineStr = '';
        do {
            // let translatedCellStart = cellNoteCalculator.translateDominantToMajorCellNote(new CellNote(selectedCell.start, octave, selectedCell.modifier));
            midiNoteNumber = cellNoteCalculator.calculateMIDINoteNumber(selectedCell.modifier+selectedCell.start, octave);
            // If we are out of boundaries, pick opposing direction cell to displace us back
            if (midiNoteNumber < lowerNoteBoundary) {
                const ascendingCell = ascendingCellsMap[startChordTone];
                const matchingAscendingCells = ascendingCell[0];

                // pick an ascending cell and cycle the order
                selectedCell = matchingAscendingCells;[0];
                matchingAscendingCells.splice(0, 1);
                matchingAscendingCells.push(selectedCell);

                success = false;

            } else if (midiNoteNumber > upperNoteBoundary) {
                const descendingCell = descendingCellsMap[startChordTone];
                const matchingDescendingCells = descendingCell[0];
                
                // pick a descending cell and cycle the order
                selectedCell = matchingDescendingCells[0];
                matchingDescendingCells.splice(0, 1);
                matchingDescendingCells.push(selectedCell);

                success = false;
            }
            else {
                // within boundaries
                const [newBoplingStr, newOctave] = addMelodicCellToBopline(selectedCell);
                boplineStr += newBoplingStr;
                currentOctave = newOctave;
                success = true;
            }

            // TODO implement better handling
            if (maxNumTries-- <= 0) {
                throw new Error('Exceeded maximum number of tries to pick next displacing cell without breaching boundaries');
            }            
        } while (success && !allCellsPicked);

        // TODO implement
        return bopline;
    }

    static addMelodicCellToBopline(melodicCell, key, octave) {
        // TODO implement logic to add melodic cell to bopline string
        // const boplineStr = melodicCell.value + ' ';
        // let newOctave = 0; // placeholder

        // parse melodic cell value into individual scale degrees
        // parse melodic cell value string with while loop
        let boplineStr = '';
        let [scaleDegreeStr, newOctave] = BoplinesService.parseMelodicCellValue(melodicCell, octave);

        return [boplineStr, newOctave];
    }

    static parseMelodicCellValue(melodicCell, octave) {
        var newOctave = octave;
        var i = 0;
        // default direction is ascending
        var modifier = '';
        var direction = 'ASC';
        var previousScaleDegree = null;
        while (i < melodicCell.value.length) {
            let char = melodicCell.value[i];
            let scaleDegreeStr = '';
            if (char === ' ') {
                i++;
                continue;
            }
            if (char == '^' || char == 'v') {
                if (char == '^') {
                    direction = 'ASC';
                } else {
                    direction = 'DESC';
                }
                // scaleDegreeStr += char;
                // TODO save the direction in order to check the octave later
                i++;
                char = melodicCell.value[i];
                continue;
            }
            // Check for modifier
            if (char == '#' || char == 'b') {
                modifier = char;
                scaleDegreeStr += char;
                i++;
                char = melodicCell.value[i];
            } 
            if (char < '1' || char > '7') {
                throw new Error(`Invalid scale degree character ${char} in melodic cell value ${melodicCell.value}`);
            } else {
                while (char >= '1' && char <= '7') {
                    // let translatedCellNote = cellNoteCalculator.translateDominantToMajorCellNote(new CellNote(scaleDegreeStr, octave, modifier));
                    let cellNote = new CellNote(char, newOctave, modifier);

                    // TODO I don't think octave tracking is necessary until the final cell note...
                    if (direction == 'ASC' && previousScaleDegree != null && scaleDegree <= previousScaleDegree) {
                        newOctave += 1;
                    } else if (direction == 'DESC' && previousScaleDegree != null && scaleDegree >= previousScaleDegree) {
                        newOctave -= 1;
                    }

                    scaleDegreeStr += cellNote.toString() + ' ';

                    // reset for next iteration
                    previousScaleDegree = scaleDegree;
                    modifier = '';
                    i++;
                    if (i < melodicCell.value.length) {
                        char = melodicCell.value[i];
                    } else {
                        break;
                    }
                }
            }
        }
            // Convert to CellNote
        return [scaleDegreeStr, newOctave];
    

        // const scaleDegrees = melodicCell.value.trim().split(' ');

        // scaleDegrees.forEach((scaleDegreeToken) => {
        //     scaleDegreeToken
        //     const cellNote = CellNote.scaleDegreeStrToCellNote(scaleDegreeToken, octave);
        // });
        // const boplineStr = CellNoteCalculator.getNoteName(scaleDegrees[0], octave, null) + ' '; // placeholder
    }
}

export default BoplinesService;