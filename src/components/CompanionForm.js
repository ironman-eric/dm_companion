import { useState } from "react"
import ClassContainer from './ClassContainer';
import CompanionResult from './CompanionResult';

function CompanionForm() {
  const [submitted, setSubmitted] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const [form, setForm] = useState({
    dndClass: ''
  });

  const enabled = () => (form.dndClass.length > 0);

  const handleChange = (event) => {
    setForm(Object.assign(form, { [event.target.name]: event.target.value }));
    setDisabled(!enabled())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(submitted + 1);
  };

  return (
    <div className="p-6 bg-sky-100 rounded">
      <div className="flex items-center justify-center font-black m-3 mb-12">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          <ClassContainer onChangeValue={handleChange} />
          <div className="flex items-center justify-between">
            <button type="submit" disabled={disabled} className="px-8 py-3 block w-full text-white bg-blue-600 rounded focus:outline-none disabled:opacity-25">
              Action
            </button>
          </div>
          <div className="flex items-center justify-between">
            {submitted > 0 &&
              <CompanionResult data={form.dndClass} />
            }
          </div>

        </form>
      </div>
    </div>
  );
}

export default CompanionForm;
