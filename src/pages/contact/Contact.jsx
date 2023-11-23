import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto dark:bg-bg-custom-gray h-screen">
      <div className="my-auto min-w-[50%]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center mx-auto flex-col m-4 w-1/2 rounded">
          <div className="flex justify-around p-2 ">
            <input {...register('name')} className="border-2 w-full m-2 rounded p-2" type="text" placeholder="Nombre Completo" />
            <input {...register('email')} className="border-2 w-full  m-2 rounded p-2" type="email" placeholder="Email" />
          </div>
          <input {...register('case')} className="max-w-100 border-2 p-2 m-4 rounded" type="text" placeholder="Asunto" />
          <textarea {...register('description')} className="border-2 rounded p-2 m-4 focus:border-transparent" placeholder="Tu mensaje"></textarea>
          <button type="submit" className="bg-bg-custom-red p-2 rounded text-white w-24 mx-auto">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
