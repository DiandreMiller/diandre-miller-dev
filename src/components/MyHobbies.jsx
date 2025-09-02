import { Dumbbell, Music, BookOpen, PawPrint, Users, Plane } from "lucide-react";
import BasketballIcon from "./BasketballIcon";
import libyaDiandre from "../assets/libya-diandre.png";

const MyHobbies = () => {
  const hobbies = [
    {
      name: "Exercise",
      icon: <Dumbbell className="h-8 w-8 text-green-400" />,
      desc: "Staying active and pushing myself to improve.",
    },
    {
      name: "Listening to Music",
      icon: <Music className="h-8 w-8 text-pink-400" />,
      desc: "Finding inspiration and energy through sound.",
    },
    {
      name: "Basketball",
      icon: <BasketballIcon className="h-8 w-8 text-orange-400" />,
      desc: "Playing and watching — Kobe Bryant is my favorite player.",
    },
    {
      name: "Reading",
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      desc: "Learning and exploring new perspectives through books.",
    },
    {
      name: "Pet Lover",
      icon: <PawPrint className="h-8 w-8 text-yellow-400" />,
      desc: "I enjoy spending time with and caring for animals.",
    },
    {
      name: "Spending Time with Girlfriend",
      icon: (
        <img
          src={libyaDiandre}
          alt="Diandre and Girlfriend"
          className="h-12 w-12 object-contain rounded-full border-2 border-pink-400 shadow-md"
        />
      ),
      desc: "Sharing laughs and experiences together ❤️.",
    },
    {
      name: "Friends & Family",
      icon: <Users className="h-8 w-8 text-purple-400" />,
      desc: "Enjoying quality time with the people closest to me.",
    },
    {
      name: "Traveling",
      icon: <Plane className="h-8 w-8 text-cyan-400" />,
      desc: "Exploring new places and experiencing different cultures.",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        My <span className="text-green-400">Hobbies</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {hobbies.map((hobby, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-green-500 transition shadow-md hover:shadow-[0_0_15px_#22c55e50]"
          >
            {hobby.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-200 group-hover:text-green-400 transition">
              {hobby.name}
            </h3>
            <p className="mt-2 text-sm text-gray-400">{hobby.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyHobbies;