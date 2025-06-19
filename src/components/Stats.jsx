function Stats() {
  return (
    <>
      <div className="flex justify-evenly items-center rounded-md p-4 m-2 text-xl">
        <span className="text-center rounded-md bg-stone-800 text-stone-50 drop-shadow-stone-950 drop-shadow-md p-6">
          Cash: $900
        </span>
        <span className="text-center bg-stone-800 rounded-md text-stone-50 drop-shadow-stone-950 drop-shadow-md p-6">
          Late: $200
        </span>
        <span className="text-center bg-stone-800 text-stone-50 rounded-md drop-shadow-stone-950 drop-shadow-md p-6">
          Next: $200
        </span>
      </div>
    </>
  );
}

export default Stats;
