import { useState } from 'react';

const names = ['Tim', 'Joe', 'Bel', 'Lee'];

export default function Page() {
  const [results, setResults] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          // const Fuse = (await import('./_fuse')).default;
          // const fuse = new Fuse(names);

          // setResults(fuse.search(value));
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

// function(....)
// jhjzdl
