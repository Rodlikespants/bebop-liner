const { createCanvas, writeImage } = require('node-vexflow');
// const Vex = require('vexflow');
const { Renderer, Stave, StaveModifier, StaveNote, Voice, Formatter } = require('vexflow');

const canvas = createCanvas();

const renderer = new Renderer(canvas, Renderer.Backends.CANVAS);
renderer.resize(500, 500);

const context = renderer.getContext();
context.save();
context.fillStyle = 'white';
context.fillRect(0, 0, 500, 500);
context.restore();

const stave = new Stave(10, 50, 400);
stave.addClef('treble').addTimeSignature('3/4');
stave.setText('VexFlow on Node.js', StaveModifier.Position.ABOVE);
stave.setContext(context).draw();

// Create the notes
const notes = [
    // A quarter-note C.
    new StaveNote({ keys: ["c/4"], duration: "q" }),

    // A quarter-note D.
    new StaveNote({ keys: ["d/4"], duration: "q" }),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical
    // position of the rest.
    new StaveNote({ keys: ["b/4"], duration: "qr" }),

    // A C-Major chord.
    new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
];

// Create a voice in 4/4 and add above notes
const voice = new Voice({ num_beats: 4, beat_value: 4 });
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([voice]).format([voice], 350);

// Render voice
voice.draw(context, stave);

writeImage(canvas, 'sample.png');
