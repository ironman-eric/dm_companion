import { useState } from "react"
import ClassContainer from './ClassContainer';
import SpeciesContainer from './SpeciesContainer';
import CompanionResult from './CompanionResult';

function CompanionForm() {
  const [submitted, setSubmitted] = useState(0);

  const [form, setForm] = useState({
    dndClass: '',
    species: ''
  });

  const handleChange = (event) => {
    setForm(Object.assign(form, { [event.target.name]: event.target.value }));
  };

  const validate = () => {
    if (form.dndClass.length === 0 || form.species.length === 0) {
      alert('Invalid Form, Please make some selections')
      return false
    }
    return true
  }

  const handleSubmit = (event) => {    
    event.preventDefault();
    if (validate()) {
      setSubmitted(submitted + 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="container mx-auto">
        <div class="grid grid-cols-2 gap-1">
          <ClassContainer onChangeValue={handleChange} />
          <SpeciesContainer onChangeValue={handleChange} />
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="mb-2 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
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
