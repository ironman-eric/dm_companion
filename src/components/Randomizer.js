function Randomizer({ data }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
          Randomize Data: {data.species} & {data.dndClass}
        </div>
      </div>      
    </div>
  );
}

export default Randomizer;
