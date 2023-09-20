import dndClass from '../data/dndClass';
//import species from '../data/species';

function getWeightedRandomItem(items) {
  const weights = items.reduce((acc, item, i) => {
    acc.push(item.weight + (acc[i - 1] ?? 0));
    return acc;
  }, []);
  const random = Math.random() * weights.at(-1);  
  return items[weights.findIndex((weight) => weight > random)].label;
}

function CompanionResult(props) {
  const actions = dndClass[props.data.dndClass];  

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
