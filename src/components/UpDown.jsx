
function UpDown() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="fixed bottom-0 right-0 border-0">
      <button onClick={scrollToTop}>
      <i className="fa fa-arrow-up bg-bg-custom-yellow p-2 rounded-full m-4  text-white" aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default UpDown