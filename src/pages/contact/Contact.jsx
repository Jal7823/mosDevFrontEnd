
function Contact() {
  return (
    <div className="mx-auto dark:bg-bg-custom-gray h-screen ">
      <div className="my-auto min-w-[50%]">
      <form  className="flex justify-center mx-auto flex-col m-4  w-1/2 rounded">
        <div className="flex justify-around p-4 ">
        <input className=" border-2 w-full m rounded p-2" type="text" placeholder="Nombre Completo" />
        <input className=" border-2 w-full ml-2 rounded p-2" type="email" placeholder="Email" />
        </div>
        <input className="w-100 border-2 p-2 m-4 rounded" type="text" placeholder="Asunto" />
        <textarea className=" border-2 rounded p-2 m-4  focus:border-transparent " type="text" placeholder="Tu mensaje" ></textarea>
        <button className="bg-bg-custom-red p-2 rounded text-white w-24 mx-auto">Enviar</button>
      </form>
      </div>  
    </div>
  )
}

export default Contact