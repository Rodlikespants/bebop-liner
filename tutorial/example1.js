// import { Vex } from 'vexflow';
// import { Vex } from './vex';
const { Renderer, Stave, StaveModifier, StaveNote, Voice, Formatter, Accidental, Beam } = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
const div = document.getElementById('output');
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
const context = renderer.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef('treble').addTimeSignature('4/4')
    .addKeySignature('G');


// Add notes
const notes1 = [
    new StaveNote({
        keys: ["f/5"],
        duration: "8",
    }),
    new StaveNote({
        keys: ["a/5"],
        duration: "8",
    }),
    // new StaveNote({
    //     keys: ["c/4", "e/4", "g/4"],
    //     duration: "q",
    // }),
];

const notes2 = [
    new StaveNote({
        keys: ["e/5"],
        duration: "8",
    }),
    new StaveNote({
        keys: ["d/5"],
        duration: "8",
    }),
];

const notes3 = [
    new StaveNote({
        keys: ["g/5"],
        duration: "8",
    }),
    // new StaveNote({
    //     keys: ["gb/5"],
    //     duration: "8",
    // }).addModifier(new Accidental("b")),
    new StaveNote({
        keys: ["f#/5"],
        duration: "8",
    }).addModifier(new Accidental("#")),
];

const notes4 = [
    new StaveNote({
        keys: ["f/5"],
        duration: "8",
    }).addModifier(new Accidental("n")),
    new StaveNote({
        keys: ["e/5"],
        duration: "8",
    }),
];

const allNotes = notes1.concat(notes2).concat(notes3).concat(notes4);

// // Create a voice in 4/4 and add above notes
// const voices = [
//     new Voice({
//         num_beats: 4,
//         beat_value: 4,
//     }).addTickables(notes),
//     // new Voice({
//     //     num_beats: 4,
//     //     beat_value: 4,
//     // }).addTickables(notes2),
// ];

// // Format and justify the notes to 400 pixels.
// new Formatter().joinVoices(voices).format(voices, 350);

// // Render voices.
// voices.forEach(function (v) {
//     v.draw(context, stave);
// });


const beams = [new Beam(notes1), new Beam(notes2), new Beam(notes3), new Beam(notes4)];

Formatter.FormatAndDraw(context, stave, allNotes);

// Draw the beams and stems.
beams.forEach((b) => {
    b.setContext(context).draw();
});

// Connect it to the rendering context and draw!
stave.setContext(context).draw();



// Helper function.
function dotted(staveNote) {
    Dot.buildAndAttach([staveNote]);
    return staveNote;
}