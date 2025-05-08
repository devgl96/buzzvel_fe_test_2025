import Image from "next/image";

interface CardCommentProps {
  comment: string;
  author: string;
  authorJob: string;
  avatar: string;
  avatarAlt: string;
  key: number;
}

export default function CardComment(props: CardCommentProps) {
  const { key, comment, author, authorJob, avatar, avatarAlt } = props;

  return (
    <div
      key={key}
      className="min-w-[250px] max-w-sm h-80 sm:min-w-[40%] md:min-w-[33%] lg:min-w-[30%] xl:min-w-[25%] snap-start shrink-0 bg-white rounded-3xl p-6 shadow-lg border border-gray-100 relative"
    >
      <p className="font-normal text-lg leading-[160%] -tracking-normal text-gray-900">
        {comment}
      </p>
      <div className="flex items-center w-full gap-4 h-20 pt-4 absolute bottom-6">
        <Image
          src={avatar}
          alt={avatarAlt}
          width={60}
          height={60}
          className="rounded-full w-14 h-14"
        />
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-normal text-lg leading-[160%] text-black">
            {author}
          </h3>
          <p className="font-normal text-[16px] text-gray-600 leading-[140%]">
            {authorJob}
          </p>
        </div>
      </div>
    </div>
  );
}
