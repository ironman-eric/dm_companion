import AttributePicker from './AttributePicker';
import species from '../data/species';

function SpeciesContainer({ onChangeValue }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-2 py-2">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Species
        </div>
      </div>
      <div className="px-2 py-2">
        <AttributePicker name="species" items={Object.keys(species)} onOptionChange={onChangeValue} />
      </div>
    </div>
  );
}

export default SpeciesContainer;
