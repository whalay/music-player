import new1 from "../assets/new1.png";

import new3 from "../assets/new3.png";

const LatestSong = [
  {
    image: new1,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new3,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new1,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new3,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new1,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new3,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new1,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new3,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new1,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
  {
    image: new3,
    title: "Golden age of 80's",
    artist: "Sean Swadder",
  },
];

const Latest = () => {
  return (
    <div className="flex-grow mt-5">
      <h2 className="text-white text-2xl font-semibold">
        New release
      </h2>
      <div className="flex gap-6 items-centre w-full overflow-x-auto mt-5 bar .bar">
        {
           LatestSong.map((top) => (
               <div className="cursor-pointer text-white min-w-fit">
                <img src={top.image} alt="" className=""/>
                <p className="text-sm font-light">{top.title}</p>
                <p className="text-sm font-extralight">{top.artist}</p>
               </div>
            ))
        }
        </div>
    </div>
  );
};

export default Latest;
