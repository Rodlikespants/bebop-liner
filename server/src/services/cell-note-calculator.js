import CellNote from '../models/cell-note.js';

const scaleDegreeToSemitone = {
    '1': 0,
    '#2': 1,
    '2': 2,
    '#3': 3,
    '3': 4,
    '4': 5,
    '#4': 6,
    '5': 7,
    '#5': 8,
    '6': 9,
    '#6': 10,
    '7': 11,
};

class CellNoteCalculator {
    constructor() {
    }

    // Calculate the MIDI note number based on scale degree and octave
    static calculateMIDINoteNumber(scaleDegree, octave, midiNoteNumberOffset = 0) {

        const baseOctave = 4; // MIDI octave for scale degree 1
        const semitoneOffset = scaleDegreeToSemitone[scaleDegree];
        const octaveOffset = (octave - baseOctave) * 12;

        return (60 + midiNoteNumberOffset) + semitoneOffset + octaveOffset; // MIDI note number for C4 is 60
    }

    static convertScaleDegreeToNoteNumber(scaleDegree, octave) {
        return this.calculateMIDINoteNumber(scaleDegree, octave);
    }

    static convertDominantScaleDegreeToNoteNumber(scaleDegree, octave) {
        if (scaleDegree === '#7') {
            scaleDegree = '7';
        } else if (scaleDegree === '7') {
            scaleDegree = '#6';
        }
        return this.calculateMIDINoteNumber(scaleDegree, octave, mididNoteNumberOffset);
    }

    // translateNoteName(scaleDegreeStr, key, octave) {
    //     // TODO implement handling for other keys
    //     if (key === 'CMaj') {
    //         const transposedScaleDegree = this.transposeDominantToMajorScaleDegree(CellNote.scaleDegreeStrToCellNote(scaleDegreeStr, octave));
    //         const semitoneOffset = scaleDegreeToSemitone[scaleDegree];
    //         const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    //         const noteName = noteNames[semitoneOffset % 12];
    //         return `${noteName}${octave}`;
    //     } else {
    //         throw new Error(`Key ${key} not supported yet`);
    //     }
    //     // Add logic for other keys as needed
    //     return noteName, newOctave;
    // }

    static translateDominantToMajorCellNote(cellNote) {
        // Transposition will never change by more than one octave for our purposes
        var newScaleDegree = cellNote.scaleDegree += 4;
        var newOctave = cellNote.octave;
        if (newScaleDegree > 7) {
            newScaleDegree = newScaleDegree - 7;
            newOctave += 1;
        }

        return new CellNote(newScaleDegree, newOctave, cellNote.modifier);
    }

    // applyStepsToNoteNumber(startCellNote, steps) {
    //     let currentNoteNumber = startCellNote.scaleDegree;

    //     // steps.forEach((step) => {
    //     //     const direction = step.direction === 'ASC' ? 1 : -1;
    //     //     currentNoteNumber += direction * step.distance;
    //     // });

    //     return currentNoteNumber
    // }
}

export default CellNoteCalculator;