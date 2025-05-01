interface CardProps {
  title: string;
  badge: string;
  description: string;
  badgeColor: string;
  position: string;
}

export default function Card(props: CardProps) {
  const { title, badge, description, badgeColor, position } = props;
  return (
    <div
      className={`w-52 h-56 bg-white rounded-lg absolute ${position} p-4 flex flex-col items-start justify-center gap-2 shadow-xl`}
    >
      <span
        className={`text-${badgeColor}-800 font-normal text-sm bg-${badgeColor}-100 rounded-sm px-2 py-2 flex items-center justify-center h-6`}
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
