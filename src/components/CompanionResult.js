import dndClass from '../data/dndClass';
import species from '../data/species';

function getWeightedRandomItem(options) {
  let i;

  const weights = [options[0].weight];

  for (i = 1; i < options.length; i++)
    weights[i] = options[i].weight + weights[i - 1];

    const random = Math.random() * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++)
    if (weights[i] > random)
      break;

  return options[i].label;
}

function CompanionResult(props) {
  const actions = dndClass[props.data.dndClass].concat(species[props.data.species]);
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
          Randomized Action: {getWeightedRandomItem(actions)}
        </div>
      </div>
    </div>
  );
}

export default CompanionResult;
