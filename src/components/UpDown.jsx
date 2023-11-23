
function UpDown() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="flex justify-end border-0 dark:bg-bg-custom-gray">
      <button onClick={scrollToTop}>
      <i className="fa fa-arrow-up bg-bg-custom-yellow p-2 rounded-full m-4 sticky bottom-0  text-white" aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default UpDown