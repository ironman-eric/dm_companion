import AttributePicker from './AttributePicker';
import { useState } from "react"

const items = [
  {
    label: 'Thief'
  },
  {
    label: 'Monk'
  }
];

function ClassContainer() {
  const [cclass, setClass] = useState("")

  const onOptionChange = e => {
    setClass(e.target.value)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Class
        </div>
      </div>
      <div className="px-6 py-4">
        <AttributePicker items={items} onOptionChange={onOptionChange} />
      </div>
      <div className="px-6 py-4">
        {cclass}
      </div>
    </div>
  );
}

export default ClassContainer;
