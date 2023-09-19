import AttributePicker from './AttributePicker';
import dndClass from '../data/dndClass';

function ClassContainer({ onChangeValue }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Class
        </div>
      </div>
      <div className="px-6 py-4">
        <AttributePicker name="dndClass" items={Object.keys(dndClass)} onOptionChange={onChangeValue} />
      </div>
    </div>
  );
}

export default ClassContainer;
