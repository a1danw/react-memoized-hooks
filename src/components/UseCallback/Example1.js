import React, { useState, useCallback } from "react";

const initialUsers = [
  {
    id: 1,
    name: "foo",
  },
  {
    id: 2,
    name: "bar",
  },
];

const List = React.memo(({ users, onRemove }) => {
  console.log("rendering list");
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} <span onClick={() => onRemove(user.id)}>X</span>
        </li>
      ))}
    </ul>
  );
});

function Example1() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");

  const handleRemove = useCallback(
    (userId) => {
      console.log("handleRemove", userId);
      const filterdUsers = users.filter((user) => user.id !== userId);
      setUsers(filterdUsers);
    },
    [users]
  );

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      {/* useCallback example 1 */}
      {/* <Example1 /> */}
      <input type="text" value={text} onChange={handleText} />
      <List users={users} onRemove={handleRemove} />
    </div>
  );
}

export default Example1;
