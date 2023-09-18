import ClassContainer from './ClassContainer';
import SpeciesContainer from './SpeciesContainer';

function Companion() {
  return (
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-4">
        <ClassContainer />
        <SpeciesContainer />
      </div>
    </div>
  );
}

export default Companion;
