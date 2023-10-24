
function UpDown() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esto permite un desplazamiento suave
    });
  };

  return (
    <div className="flex justify-end">
      <button onClick={scrollToTop}>
      <i className="fa fa-arrow-up bg-bg-custom-yellow p-2 rounded-full m-4 sticky bottom-0 " aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default UpDown