import './App.css';

// https://magic.reactjs.net/htmltojsx.htm <-- PARA TRAFORMAR DE HTML A JSX
// https://github.com/franciscopugh/44995-react-2023 repo

import { Navbar } from './Navbar/Navbar';
export const App = () => {
  return (
    <>
      <Navbar nombre={"LASCALONETA"}/>
    </>
  );
}