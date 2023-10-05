//'use client';
import React, {useState} from 'react';
import { Button, Label, TextInput } from 'flowbite-react';


export default function FormRegister() {

  const [data, setData] = useState({})
  const [mostrardata, setMostrardata] = useState(false)

  function handleInputChange(event){
    let target = event.target;
    let newvalor = {[target.name] : target.value};
    console.log( newvalor )

    setData(prev => ({...prev, ...newvalor }) );
    

    //console.log( data ) 
  }  
  function handleSubmit(evt){
    evt.preventDefault();
    setMostrardata(true);
   // console.log("valor ingresado", 
   //      ` ${JSON.stringify(data)} `)

  }
  return (
<>
  
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
       <h2 className="text-4xl font-extrabold dark:text-white">Registro de Cliente</h2>
    </div>
  </div>  

  <div class="md:flex md:items-center mt-5">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">    
  <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
                <Label
                  htmlFor="nombre"
                  value="Nombre :"
                  class="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
                />
          </div>
          <div className="md:w-2/3">
            <TextInput
              id="nombre"
              name="nombre"
              placeholder="Ingrese su Nombre y Apellido"
              required
              type="text"
              onChange={handleInputChange}
              value={data.nombre}
            />
          </div>
          </div>

          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="ci"
                value="Nro. CI :"
                class="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">
            <TextInput
              id="ci"
              name="ci"
              placeholder="Ingrese cedula de Ident. Policial"
              required
              type="text"
              onChange={handleInputChange}
              value={data.ci}
            />
            </div>
          </div>


          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="correo"
                value="Correo electronico:"
                class="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">
            <TextInput
              id="correo"
              name="correo"
              placeholder="Ingrese su e-mail"
              required
              type="email"
              value={data.correo}
              onChange={handleInputChange}
            />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="direccion"
                value="Direccion:"
                class="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">  
            <TextInput
              id="direccion"
              name="direccion"
              placeholder="Ingrese su direccion"
              required
              type="text"
              onChange={handleInputChange}
              value={data.direccion}
            />
          </div>
          </div>

          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="passw"
                value="Password:"
                class="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">
            <TextInput
              id="passw"
              name="passw"
              placeholder='********'
              required
              type="password"
              value={data.passw}
              onChange={handleInputChange}
            />
          </div>
          </div>
          {/** 
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Remember me
            </Label>
          </div>
          */}
          <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
          <Button type="submit" onClick={handleSubmit} className="mt-3">
            Grabar
          </Button>
          </div>
          </div>
      </form>
      { mostrardata && <div>{ JSON.stringify(data) }</div> }
      </div>
  </div> 
    
</>
  )
}


