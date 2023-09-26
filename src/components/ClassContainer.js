import AttributePicker from './AttributePicker';
import dndClass from '../data/dndClass';

function ClassContainer({ onChangeValue }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select a Class
      </label>
      <AttributePicker name="dndClass" items={Object.keys(dndClass)} onOptionChange={onChangeValue} />      
    </div>
  );
}

export default ClassContainer;
