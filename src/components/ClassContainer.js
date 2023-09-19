import AttributePicker from './AttributePicker';

const items = [
  {
    label: 'Thief'
  },
  {
    label: 'Monk'
  }
];

function ClassContainer({ onChangeValue }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Class
        </div>
      </div>
      <div className="px-6 py-4">
        <AttributePicker name="dndClass" items={items} onOptionChange={onChangeValue} />
      </div>
    </div>
  );
}

export default ClassContainer;
