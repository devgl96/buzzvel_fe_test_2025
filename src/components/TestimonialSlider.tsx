"use client";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CardComment from "./CardComment";
import { LeftButtonArrow } from "./LeftButtonArrow";
import { RightButtonArrow } from "./RightButtonArrow";

const testimonials = [
  {
    author: "Hellen Jummy",
    authorJob: "Financial Counselor",
    comment:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    avatar: "/comments-user-1.svg",
    avatarAlt: "avatar hellen jummy",
  },
  {
    author: "Ralph Edwards",
    authorJob: "Math Teacher",
    comment:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    avatar: "/comments-user-2.svg",
    avatarAlt: "avatar ralph edwards",
  },
  {
    author: "Hellena John",
    authorJob: "Psychology Student",
    comment:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    avatar: "/comments-user-3.svg",
    avatarAlt: "avatar hellen john",
  },
  {
    author: "David Oshodi",
    authorJob: "Manager",
    comment:
      "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    avatar: "/comments-user-4.jpg",
    avatarAlt: "avatar david oshodi",
  },
  {
    author: "Charolette Hanlin",
    authorJob: "CEO",
    comment:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    avatar: "/comments-user-5.jpg",
    avatarAlt: "avatar charolette hanlin",
  },
];

export default function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.offsetWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-4 md:px-0 ml-auto">
      <div className="flex items-center justify-between w-full mb-20">
        <h2 className="font-extrabold md:text-[56px] text-2xl leading-[110%] tracking-tighter relative inline-block">
          What everyone says
        </h2>
        <div className="hidden md:flex items-center justify-center gap-6">
          <button onClick={() => scroll("left")} className="cursor-pointer">
            <LeftButtonArrow />
          </button>
          <button onClick={() => scroll("right")} className="cursor-pointer">
            <RightButtonArrow />
          </button>
        </div>
      </div>

      <div className="relative -mx-6 px-6 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        >
          {testimonials.map((testimonial, i) => (
            <CardComment
              key={i}
              author={testimonial.author}
              authorJob={testimonial.authorJob}
              comment={testimonial.comment}
              avatar={testimonial.avatar}
              avatarAlt={testimonial.avatarAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
