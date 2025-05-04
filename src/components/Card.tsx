import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;
  badge: string;
  description: string;
  badgeColor: string;
  position: string;
}

export default function Card(props: CardProps) {
  const { title, badge, description, badgeColor, position } = props;

  const textColor = `text-${badgeColor}-800`;
  const backgroundColor = `bg-${badgeColor}-100`;

  const getBadgeColor = () => {
    switch (badgeColor) {
      case "red":
        return "text-red-800 bg-red-100";
      case "blue":
        return "text-blue-800 bg-blue-100";
      case "green":
        return "text-green-800 bg-green-100";
      case "yellow":
        return "text-yellow-800 bg-yellow-100";
      case "purple":
        return "text-purple-800 bg-purple-100";
      default:
        return "text-gray-800 bg-gray-100";
    }
  };

  return (
    <div
      className={`w-52 h-56 bg-white rounded-lg absolute ${position} p-4 flex flex-col items-start justify-center gap-2 shadow-xl`}
    >
      <span
        className={twMerge(
          "font-normal text-sm rounded-sm px-2 py-2 flex items-center justify-center h-6",
          getBadgeColor()
        )}
      >
        {badge}
      </span>
      <h3 className="font-medium text-xl leading-[110%] -tracking-tighter">
        {title}
      </h3>
      <p className="font-normal text-sm leading-[140%] -tracking-tighter text-gray-600">
        {description}
      </p>
      <button className="flex items-center justify-center px-2 py-3 my-1 rounded-lg cursor-pointer h-10 w-full border-2 border-blue-600 text-blue-600 font-medium text-sm hover:opacity-90">
        Take Lesson
      </button>
    </div>
  );
}
