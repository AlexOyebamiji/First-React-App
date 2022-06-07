import { useState } from "react";
import AnimeLists from "./AnimeLists";
import Spinner from "./Spinner";

function AnimeForm() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let isActive = true;
      const response = await fetch(
        `https://animechan.vercel.app/api/quotes/character?name=${text}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw Error("Failed to fetch data for that resource");
      }

      if (text === "") {
        setAnime(null);
        setLoading(false);
      } else {
        setText("");
        setErrorMessage(null);
        setAnime(data);
        setLoading(false);
      }
      return () => {
        isActive = false;
      };
    } catch (error) {
      setAnime(null);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <form>
          <input
            type="text"
            value={text}
            placeholder="Search Anime Name"
            onChange={handleChange}
            className="border-2 border-black rounded-md mr-3 w-64 md:w-96"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-black text-white rounded-md py-[2px] px-2"
          >
            Go
          </button>
        </form>
      </div>

      <div className="mt-20">
        {errorMessage && (
          <div className="font-bold text-center">{errorMessage}</div>
        )}
        {loading ? <Spinner /> : anime && <AnimeLists anime={anime} />}
      </div>
    </div>
  );
}

export default AnimeForm;
