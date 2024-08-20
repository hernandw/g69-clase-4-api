import { useEffect, useState } from "react";
/* import { users } from "./data/users"; */

const urlBase = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [data, setData] = useState([]);

  const getDatos = async () => {
    const response = await fetch(urlBase);
    const datos = await response.json();
    
    
    setData(datos);
  };

  useEffect(() => {
    getDatos();
  }, [])

  return (
    <div>
      <h1>Listado de usuarios</h1>

      <ul>
        {data.map((u) => (
          <li key={u.id}>
            {u.title} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
