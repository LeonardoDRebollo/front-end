import React from 'react';

const Menu = () => {
  const handleOptionClick = (option) => {
    console.log(`Opción seleccionada: ${option}`);
  };

  return (
    <div className="menu">
      <ul>
        <li onClick={() => handleOptionClick("Opción 1")}>Opción 1</li>
        <li onClick={() => handleOptionClick("Opción 2")}>Opción 2</li>
        <li onClick={() => handleOptionClick("Opción 3")}>Opción 3</li>
      </ul>
    </div>
  );
};

export default Menu;
