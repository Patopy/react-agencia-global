
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import FormRegister from './FormRegister';
import logo from '../img/Logo.png';


export default function Nav01() {


  return (
    <>
    <BrowserRouter>

    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    
    <img src={logo} width="60" height="60" alt="logo Global TurismoGT" />
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
   
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Inicio
      </Link>

      <Link to="/form-register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Registro Cliente
      </Link>

      <Link to="/contacto" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Contacto
      </Link>

    </div>
   
  </div>
</nav>


      <Routes>
         <Route path="/" element={<div>Pagina Inicial!</div>} />
         <Route path="/form-register" element={<FormRegister />} />
         <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


