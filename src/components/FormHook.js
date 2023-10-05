import { useForm } from "react-hook-form";

export default function FormconSelect() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="grid gap-8 m-5 md:grid-cols-2">
 
      <select {...register("gender")} 
           className="font-medium bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input {...register("firstName", { required: true, maxLength: 20 })}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 rounded-lg bg-gray-50" />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} 
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 rounded-lg bg-gray-50"/>
      <input type="number" {...register("age", { min: 18, max: 99 })} 
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 rounded-lg bg-gray-50"/>

      <input type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
    
    </form>
  );
}