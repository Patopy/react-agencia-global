//'use client';

import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from 'flowbite-react';


export default function FormHookRegister() {

    const [data, setData] = useState({});
    const [mostrardata, setMostrardata] = useState(false);

    const { 
        register,
        formState:{ errors},
        handleSubmit 
    } = useForm();

    const onSubmit = data => {

        setData( data );
        setMostrardata(true);

        console.log(data);
    };

    
    
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
                  htmlFor="nombre"
                  value="Nombre y Apellido :"
                  className="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
                />
          </div>
          <div className="md:w-2/3">
            <TextInput
              placeholder="Ingrese su Nombre y Apellido"
              required
              type="text"
              {...register("nombre", { required: true, pattern: /^[A-Za-z\s]+$/i, maxLength:30})}
              aria-invalid={errors.nombre ? "true" : "false"}
            />
            {errors.nombre?.type === "required" && (<p className="text-red-700">Nombre es requerido</p> )}
            {(errors.nombre?.type === "pattern" || errors.nombre?.type === "maxLength") &&
                 (<p className="text-red-700">Valido solo caracteres maximo 30 letras</p> )}
          </div>
          </div>

          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="ci"
                value="Nro. CI :"
                className="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">
            <TextInput
              type="text"
              {...register("ci", { pattern: /^[0-9]+$/, required: true, maxLength: 15 })}
              aria-invalid={errors.ci ? "true" : "false"}
            />
            {errors.ci?.type === "required" && (<p className="text-red-700">CI es requerido</p> )}
            {(errors.ci?.type === "pattern" || errors.ci?.type === "maxLength") && 
                  (<p className="text-red-700">Valido solo numeros maximo 15 digitos</p> )}
            </div>
          </div>


          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="correo"
                value="Correo electronico:"
                className="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">
            <TextInput
              placeholder="Ingrese su e-mail"
              {...register("correo", { pattern:/^\w+([.-_+]?[\w\d]+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                                      required:true})}
            />
            {errors.correo?.type === "required" && (<p className="text-red-700">Campo requerido</p> )}
            {(errors.correo?.type === "pattern") && 
                  (<p className="text-red-700">Ingrese un correo electronico validado</p> )}
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="direccion"
                value="Direccion:"
                className="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">  
            <TextInput
              placeholder="Ingrese su direccion"
              type="text"
              {...register("direccion", { required: true, maxLength: 50 })}
              
            />
            {errors.direccion?.type === "required" && (<p className="text-red-700">Campo requerido</p> )}
            {errors.direccion?.type === "maxLength" && 
                  (<p className="text-red-700">Menor a 50 caracteres</p> )}
          </div>
          </div>

          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <Label
                htmlFor="passw"
                value="Password:"
                className="block text-gray-500 font-bold md:text-right text-sm mb-1 md:mb-0 pr-4"
              />
            </div>
            <div className="md:w-2/3">
            <TextInput
              id="passw"
              name="passw"
              placeholder='Ingrese su password'
              type="password"
              {...register("passw", { required: true, minLength:7, maxLength:20 })}
            />
            {errors.passw?.type === "required" && (<p className="text-red-700">Campo requerido</p> )}
            {(errors.passw?.type === "minLength" || errors.passw?.type === "maxLength") && 
                  (<p className="text-red-700">Minimo 7 y menor a 20 caracteres</p> )}
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


