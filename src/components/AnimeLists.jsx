function AnimeLists({ anime }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {anime.map((ani) => (
        <div className="text-white rounded-md px-2.5 py-2.5 bg-black">
          <p>{ani.anime}</p>
          <p>{ani.character}</p>
          <p>{ani.quote}</p>
        </div>
      ))}
    </div>
  );
}

export default AnimeLists;
