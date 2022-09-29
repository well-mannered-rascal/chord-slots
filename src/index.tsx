import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

interface SlotValues {
  [key: number]: number;
}

const chordOptions: string[] = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

const App = () => {
  const startingChordIndexes: SlotValues = { 0: 9, 1: 11, 2: 0, 3: 2 };
  const [slotValues, setSlotValues] =
    useState<SlotValues>(startingChordIndexes);
  const [slotsAreSpinning, setSlotsAreSpinning] = useState(false);
  const [slotIntervalId, setSlotIntervalId] = useState<NodeJS.Timer>();

  const spinSlots = (): void => {
    const frameValues: Set<number> = new Set();

    while (frameValues.size < 4) {
      frameValues.add(Math.floor(Math.random() * chordOptions.length));
    }
    setSlotValues(Array.from(frameValues));
  };

  const toggleSpin = () => {
    if (slotsAreSpinning) {
      setSlotsAreSpinning(false);
      // clear the slot interval for each slot one at a time
      clearInterval(slotIntervalId);
    } else {
      setSlotsAreSpinning(true);
      const intervalId = setInterval(spinSlots, 100);
      setSlotIntervalId(intervalId);
      spinSlots();
    }
  };

  return (
    <div className="container">
      <div className="slotBox">
        <div className="slot">{chordOptions[slotValues[0]]}</div>
        <div className="slot">{chordOptions[slotValues[1]]}</div>
        <div className="slot">{chordOptions[slotValues[2]]}</div>
        <div className="slot">{chordOptions[slotValues[3]]}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          className={`spinButton ${
            slotsAreSpinning ? 'negative' : 'affirmative'
          }`}
          onClick={toggleSpin}
        >
          {slotsAreSpinning ? 'Stop' : 'Spin'}
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
