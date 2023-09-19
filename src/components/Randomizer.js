import dndClass from '../data/dndClass';
import species from '../data/species';

function Randomizer({ data }) {
  const actions = dndClass[data.dndClass].concat(species[data.species]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
          Randomize Action: {actions[Math.floor(Math.random()*actions.length)]}
        </div>
      </div>      
    </div>
  );
}

export default Randomizer;
