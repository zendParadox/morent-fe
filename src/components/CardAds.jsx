/* eslint-disable react/prop-types */
function CardAds({ title, p, bg, bgButton }) {
  return (
    <div className="w-full border h-[300px] md:h-[360px] border-gray-200 rounded-lg shadow relative overflow-hidden">
      {/* Konten */}
      <div className="absolute py-4 px-4 md:py-6 md:px-6 z-10">
        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        <p className="mt-2 md:mt-4 text-sm md:text-base">{p}</p>
        <button
          type="button"
          className={`px-4 py-2 md:px-5 md:py-3 mt-3 md:mt-5 rounded-md text-sm md:text-base ${bgButton}`}>
          Rental Car
        </button>
      </div>

      {/* Gambar sebagai Latar Belakang */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg} // Ganti dengan path gambar Anda
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CardAds;
