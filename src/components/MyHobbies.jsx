import { Dumbbell, Music, BookOpen } from "lucide-react";
import BasketballIcon from "./BasketballIcon";

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
      name: "BallBasketball",
      icon: <BasketballIcon className="h-8 w-8 text-orange-400" />,
      desc: "Playing and watching — Kobe Bryant is my favorite player.",
    },
    {
      name: "Reading",
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      desc: "Learning and exploring new perspectives through books.",
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