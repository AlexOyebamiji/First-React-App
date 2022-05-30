function AnimeLists({ anime }) {
  return (
    <div className="grid gap-4 grid-cols-1 bg-black md:grid-cols-2 lg:grid-cols-3">
      {anime.map((ani) => (
        <div className="text-white rounded-md">
          <p>{ani.anime}</p>
          <p>{ani.character}</p>
          <p>{ani.quote}</p>
        </div>
      ))}
    </div>
  );
}

export default AnimeLists;
