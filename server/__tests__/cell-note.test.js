import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import CellNote from '../src/models/cell-note.js';

// const CellNote = require('../src/models/cell-note.js');

describe('CellNote Model', () => {
    it('should create a CellNote instance correctly', () => {
        const cellNote = new CellNote('5', 4, '#');
        assert.equal(cellNote.scaleDegree, '5');
        assert.equal(cellNote.octave, 4);
        assert.equal(cellNote.modifier, '#');
        assert.equal(cellNote.noteName, 'G#4');
    });

    it('CellNote toString', () => {
        assert.equal(new CellNote(5, 4, '#').toString(), 'G#4');
    });
});