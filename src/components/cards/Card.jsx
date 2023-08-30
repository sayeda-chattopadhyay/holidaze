const Card = () => {
  return (
    <div className="container mx-auto  bg-white rounded-lg shadow dark:bg-gray-100 mt-8 grid md:grid-cols-3 gap-10">
      <div className="max-w-sm rounded overflow-hidden shadow-md hover:bg-slate-100 hover:shadow-lg">
        <img className="w-full" src="/src/assets/images/hero-image.jpg" />
        <div className="px-6 py-4  border border-b-gray-200">
          <h5 className="font-bold text-xl mb-2">The Coldest Sunset</h5>
          <h6>Crete,Greece</h6>
          <h6>Guess:</h6>
        </div>
        <div className="px-6 pt-4 pb-2 flex align-item-end">
          <div>Nok 350 / night</div>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-md hover:bg-slate-100 hover:shadow-lg">
        <img className="w-full" src="/src/assets/images/hero-image.jpg" />
        <div className="px-6 py-4  border border-b-gray-200">
          <h5 className="font-bold text-xl mb-2">The Coldest Sunset</h5>
          <h6>Crete,Greece</h6>
          <h6>Guess:</h6>
        </div>
        <div className="px-6 pt-4 pb-2 flex align-item-end">
          <div>Nok 350 / night</div>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-md hover:bg-slate-100 hover:shadow-lg">
        <img className="w-full" src="/src/assets/images/hero-image.jpg" />
        <div className="px-6 py-4  border border-b-gray-200">
          <h5 className="font-bold text-xl mb-2">The Coldest Sunset</h5>
          <h6>Crete,Greece</h6>
          <h6>Guess:</h6>
        </div>
        <div className="px-6 pt-4 pb-2 flex align-item-end">
          <div>Nok 350 / night</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
