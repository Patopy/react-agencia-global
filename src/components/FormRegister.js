//'use client';
import React, {useState} from 'react';
import { Button, Label, TextInput } from 'flowbite-react';


export default function FormRegister() {

  const [data, setData] = useState({})

  function handleInputChange(event){
    let target = event.target;
    let newvalor = {[target.name] : target.value};
    console.log( newvalor )

    setData(prev => ({...prev, ...newvalor }) );
    console.log( data ) 
  }  
  function handleSubmit(evt){
    evt.preventDefault();
    console.log("valor ingresado", 
         ` ${JSON.stringify(data)} `)
    alert("valor ingresado: " + 
    ` ${JSON.stringify(data)} `)
  }
  return (
    <div className='m-10'>
    <h2 className="text-4xl font-extrabold dark:text-white">Registro de Cliente</h2>
    <form className="flex max-w-md flex-col gap-4 mt-5">

      <div> 
        <div className="mb-2 block">
          <Label
            htmlFor="nombre"
            value="Nombre"
          />
        </div>
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

      <div> 
        <div className="mb-2 block">
          <Label
            htmlFor="ci"
            value="Nro. CI"
          />
        </div>
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


      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="correo"
            value="Correo electronico:"
          />
        </div>
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

      <div> 
        <div className="mb-2 block">
          <Label
            htmlFor="direccion"
            value="Direccion"
          />
        </div>
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

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="passw"
            value="Password:"
          />
        </div>
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
      {/** 
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      */}
      <Button type="submit" onClick={handleSubmit}>
        Grabar
      </Button>
    </form>
    </div> 
  )
}


