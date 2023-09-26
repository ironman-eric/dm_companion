import dndClass from '../data/dndClass';

function getWeightedRandomItem(items) {
  const weights = items.reduce((acc, item, i) => {
    acc.push(item.weight + (acc[i - 1] ?? 0));
    return acc;
  }, []);
  const random = Math.random() * weights.at(-1);  
  return items[weights.findIndex((weight) => weight > random)].label;
}

function CompanionResult({data}) {
  const actions = dndClass[data];  

  return (    
    <p className="text-s italic">Randomized Action: {getWeightedRandomItem(actions)}</p>    
  );
}

export default CompanionResult;
