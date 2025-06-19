function Bill() {
  // TEMP
  const currencySymbol = "$";
  let account = "Electricity";
  let amount = 140;
  let date = "6/25";
  let in_days = "in 28 days";
  let paid_unpaid = "PAID";

  return (
    <>
      <div className="flex justify-evenly gap-4 items-center rounded-md p-6 m-4 bg-stone-800 text-stone-50 drop-shadow-stone-950 drop-shadow-md text-lg">
        <span className="text-center">
          {currencySymbol}
          &nbsp;
          {amount.toLocaleString()}
        </span>
        {account}

        <span className="text-center">{date}</span>
        <span>{in_days}</span>
        <span>{paid_unpaid}</span>
        <button className="btn-primary">Edit</button>
      </div>
    </>
  );
}
export default Bill;
