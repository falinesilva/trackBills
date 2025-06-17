export default function Home() {
  return (
    <>
      <header className="flex p-4 m-4 justify-between">
        <h1 className=" cursor-default text-4xl font-bold antialiased text-stone-50">
          trackCash
        </h1>
        <nav>
          <button className="btn-primary">Account</button>
        </nav>
      </header>
      <div className="flex justify-between items-center rounded-md p-4 m-4 text-lg">
        <span className="rounded-md bg-stone-800 text-stone-50 drop-shadow-stone-950 drop-shadow-md p-4">
          Cash: $900
        </span>
        <span className="bg-stone-800 rounded-md text-stone-50 drop-shadow-stone-950 drop-shadow-md p-4">
          Past Due: $200
        </span>
        <span className="bg-stone-800 text-stone-50 rounded-md drop-shadow-stone-950 drop-shadow-md p-4">
          Upcoming: $200
        </span>
      </div>
      <div className="flex justify-between items-center rounded-md p-4 m-4 bg-stone-800 text-stone-50 drop-shadow-stone-950 drop-shadow-md ">
        <span>Account: Electric</span>
        <span>Amount: $140</span>
        <span>Due: in: 16 days</span>
        <div>
          <button className="btn-primary text-stone-950 m-2">Edit</button>
          <button className="btn-primary text-stone-950 m-2">Delete</button>
        </div>
      </div>
      <footer className="cursor-default flex justify-center tracking-wider">
        Open Source | MIT License |&nbsp;
        <a
          href="https://github.com/falinesilva"
          className="hover:text-blue-600 no-underline"
        >
          GitHub
        </a>
      </footer>
    </>
  );
}
