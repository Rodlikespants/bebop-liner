class CellNote {
    constructor(scaleDegree, octave, modifier = '') {
        this.scaleDegree = scaleDegree;
        this.octave = octave;
        this.modifier = modifier; // e.g., sharp, flat
        this.noteName = CellNote.getNoteName(scaleDegree, octave, modifier);
    }

    static getNoteName(scaleDegree, octave, modifier) {
        // map scale degree and modifier to note name, e.g. 1 -> C, #2 -> C#
        const scaleDegreeStr = modifier ? `${modifier}${scaleDegree}` : `${scaleDegree}`;
        const scaleDegreeToSemitone = {
            '1': 'C',
            '#2': 'C#',
            '2': 'D',
            '#3': 'D#',
            '3': 'E',
            '4': 'F',
            '#4': 'F#',
            '5': 'G',
            '#5': 'G#',
            '6': 'A',
            '#6': 'A#',
            '7': 'B',
        };
        return scaleDegreeToSemitone[scaleDegreeStr] + octave;
    }

    static scaleDegreeStrToCellNote(scaleDegreeStr, octave) {
        if (scaleDegreeStr.startsWith('sharp')) {
            const scaleDegree = scaleDegreeStr.substring(1);
            const modifier = '#';
            return new CellNote(scaleDegree, octave, modifier);
        } else if (scaleDegreeStr.startsWith('flat')) {
            const scaleDegree = scaleDegreeStr.substring(1);
            const modifier = 'b';
            return new CellNote(scaleDegree, octave, modifier);
        } else {
            const scaleDegree = scaleDegreeStr.substring(0);
            return new CellNote(this.scaleDegree, octave, null);
        }
    }

    toString() {
        return `${this.noteName}`;
    }
}

// module.exports = CellNote;
export default CellNote;