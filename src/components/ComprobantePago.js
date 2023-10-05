//'use client';

import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from 'flowbite-react';
//import FileUpload from './FileUpload';



export default function ComprobantePago() {

    const [data, setData] = useState({});
    const [mostrardata, setMostrardata] = useState(false);
    const [file, setFile]= useState(null);

    const { 
        register,
        formState:{ errors},
        handleSubmit 
    } = useForm();

    const onSubmit = data => {

        setData( data );
        setMostrardata(true);

        console.log(" data ", data)
        //console.log( 'contenido nombre', data.file_comprobante[0].name );
        //console.log( 'contenido file ', data.file_comprobante[0] );

        const formData = new FormData();
        //formData.append('name' , data.file_comprobante[0].name );
        //formData.append('profilePic', file );
        formData.append('file', file)
        
        fetch('http://localhost:3003/api/upload',
             {
              method:'POST',
              body: formData
             }).then((response) => response.json())
             .catch((error) => console.error("Error:", error))
             .then((response) => console.log("Success:", response));
    };

    const handleInpFile = (event)=>{

        console.log( ' ingresa handleInpFile ')
        console.log( event.target  )

        setFile( event.target.files[0] )
    }

    
    
  return (
<>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
       <h2 className="text-4xl font-extrabold dark:text-white">Registro de Cliente</h2>
    </div>
  </div>  

  <div className="md:flex md:items-center mt-5">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">    

  <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}
  >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
                <Label
                  htmlFor="nrocontrato"
                  value="Nro.Contrato :"
                  className="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
                />
          </div>
          <div className="md:w-2/3">
            <TextInput
              placeholder="Ingrese numero de contrato"
              required
              type="text"
              {...register("nrocontrato",
                   { required: true, pattern: /^[0-9]+$/i, maxLength:15})}
              aria-invalid={errors.nrocontrato ? "true" : "false"}
            />
            {errors.nrocontrato?.type === "required" && (<p className="text-red-700">Nombre es requerido</p> )}
            {(errors.nrocontrato?.type === "pattern" || errors.nrocontrato?.type === "maxLength") &&
                 (<p className="text-red-700">Valido solo caracteres maximo 25 digitos</p> )}
          </div>
          </div>

    
                <div>

<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
         htmlFor="file_comprobante">Upload file</label>

<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
          id="file_comprobante" type="file"
          accept="image/*,.pdf" 
          onChange={ handleInpFile }
          {...register("file_comprobante", { required: true })} 
          aria-invalid={errors.file_comprobante ? "true" : "false"}
/>
                </div>   

          <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
          <Button type="submit" className="mt-3">
            Grabar
          </Button>
          </div>
          </div>
      </form>
     
      </div>
  </div> 

  { mostrardata && <div>{ JSON.stringify(data) }</div> }
    
</>
  )
}
