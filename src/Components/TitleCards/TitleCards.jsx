// import React, { useEffect, useRef, useState } from "react";
// import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";

// const TitleCards = ({ title, category }) => {
//   const [apiData, setApiData] = useState([]);

//   const cardsRef = useRef();

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDhlYTQxODcwYTM1OWMwMWY4ZTBmZmExZjY1NmY1ZSIsIm5iZiI6MTc0NDEwODQwOS41ODksInN1YiI6IjY3ZjRmYjc5ZGRmOTE5NDM4N2Q5ZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_D6tIJtPL1F2SMfsI1mYHP2OaCPHe4VjQ_u2Nd7laI",
//     },
//   };

//   useEffect(() => {
//     if (!category) return; // 👈 Skip fetch if no category
  
//     console.log("Fetching category:", category);
  
//     fetch(
//       `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
//       options
//     )
//       .then((res) => res.json())
//       .then((res) => setApiData(res.results))
//       .catch((err) => console.error(err));
//   }, [category]);
  

//   const scroll = (direction) => {
//     const { current } = cardsRef;
//     if (!current) return;

//     const scrollAmount = 300;
//     current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
//   };

//   return (
//     <div className="titlecards">
//       <h2>{title ? title : "Popular on Netflix"}</h2>
//       <div className="scroll-controls">
//         <button className="scroll-btn left" onClick={() => scroll("left")}>
//           ◀
//         </button>
//         <div className="card-list" ref={cardsRef}>
//           {apiData.map((card, index) => (
//             <div className="card" key={index}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
//               />
//               <p>{card.original_title}</p>
//             </div>
//           ))}
//         </div>
//         <button className="scroll-btn right" onClick={() => scroll("right")}>
//           ▶
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TitleCards;


import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDhlYTQxODcwYTM1OWMwMWY4ZTBmZmExZjY1NmY1ZSIsIm5iZiI6MTc0NDEwODQwOS41ODksInN1YiI6IjY3ZjRmYjc5ZGRmOTE5NDM4N2Q5ZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_D6tIJtPL1F2SMfsI1mYHP2OaCPHe4VjQ_u2Nd7laI",
    },
  };

  useEffect(() => {
    if (!category) return; // Skip fetching if category is undefined

    console.log("Fetching category:", category);

    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, [category]);

  const scroll = (direction) => {
    const { current } = cardsRef;
    if (!current) return;

    const scrollAmount = 300;
    current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
  };

  // Don't render if no category is provided
  if (!category) return null;

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="scroll-controls">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ◀
        </button>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index) => (
            <Link  to={`/player/${card.id}`}   className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default TitleCards;

