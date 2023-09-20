import { useState } from "react"
import ClassContainer from './ClassContainer';
import SpeciesContainer from './SpeciesContainer';
import CompanionResult from './CompanionResult';

function CompanionForm() {
  const [submitted, setSubmitted] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const [form, setForm] = useState({
    dndClass: '',
    species: ''
  });

  const enabled = () => (form.dndClass.length > 0 && form.species.length > 0);

  const handleChange = (event) => {
    setForm(Object.assign(form, { [event.target.name]: event.target.value }));
    setDisabled(!enabled())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(submitted + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="container mx-auto">
        <div class="grid grid-cols-2 gap-1">
          <ClassContainer onChangeValue={handleChange} />
          <SpeciesContainer onChangeValue={handleChange} />
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" disabled={disabled} class="px-8 py-3 block w-full text-white bg-blue-600 rounded focus:outline-none disabled:opacity-25">
            Action
          </button>
        </div>
        <div>
          {submitted > 0 &&
            <CompanionResult data={form} />
          }
        </div>
      </div>
    </form>
  );
}

export default CompanionForm;
