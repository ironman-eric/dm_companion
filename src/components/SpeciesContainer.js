import AttributePicker from './AttributePicker';
import { useState } from "react"

const items = [
  {
    label: 'Elf'
  },
  {
    label: 'Dwarf'
  }
];

function SpeciesContainer() {
  const [species, setSpecies] = useState("")

  const onOptionChange = e => {
    setSpecies(e.target.value)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Species
        </div>
      </div>
      <div className="px-6 py-4">
        <AttributePicker items={items} onOptionChange={onOptionChange} />
      </div>
      <div className="px-6 py-4">
        {species}
      </div>
    </div>
  );
}

export default SpeciesContainer;
