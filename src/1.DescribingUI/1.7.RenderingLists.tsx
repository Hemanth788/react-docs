export default function RenderingLists() {
  // better to have IDs of your data as keys rather than indices as reordering or deletion of items kills the purpose of having keys in the first place
  const list = [
    { id: 1, val: 1 },
    { id: 2, val: 2 },
    { id: 3, val: 3 },
    { id: 4, val: 4 },
    { id: 5, val: 5 },
    { id: 6, val: 6 },
  ];
  const listItems = list.map((num) => <li key={num.id}>{num.val}</li>);
  return (
    <>
      <p>Stored in a var and rendered</p>
      <ol>{listItems}</ol>
      <p>used {}, wrote map in it and rendered</p>
      <ol>
        {list.map((num) => (
          <li key={num.id}>{num.val}</li>
        ))}
      </ol>
    </>
  );
}
