import { CirclePlay } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-screen mx-16">
      <header className="h-24 w-full flex justify-between items-center top-6">
        <div>
          <ul className="flex items-center gap-12">
            <Image
              src="/logo-colored.svg"
              alt="logo"
              width={100}
              height={100}
            />
            <li className="font-medium">Products</li>
            <li className="font-medium">Solutions</li>
            <li className="font-medium">Pricing</li>
            <li className="font-medium">Resources</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="border-none cursor-pointer font-medium">
            Log In
          </button>
          <button className="border-2 p-3 border-slate-700 rounded-lg cursor-pointer font-medium w-[153px] h-12">
            Sign Up Now
          </button>
        </div>
      </header>
      <main>
        <div className="flex justify-between items-center gap-[80px] mt-10">
          <div className="flex flex-col gap-4 w-xl h-auto">
            <div className="relative inline-block">
              <Image
                src="/vector_title.png"
                alt="underline vector title"
                width={195}
                height={195}
                className="z-0 absolute top-14 left-1"
              />
              <h1 className="font-extrabold text-7xl z-10 relative">
                Teach students worldwide
              </h1>
            </div>
            <p className="text-2xl font-normal w-[575.4px] tracking-normal leading-[160%]">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </p>
            <div className="flex gap-8 items-center">
              <button className="border-2 border-orange-600 rounded-lg cursor-pointer w-60 h-12 px-6 bg-orange-600 text-white font-bold text-2xl hover:opacity-90">
                Sign Up Now
              </button>
              <button className="flex items-center justify-center gap-3 p-3 rounded-lg cursor-pointer h-16 px-6 py-5 text-blue-600 font-medium text-lg hover:opacity-90">
                <Image
                  src="/play-circle.svg"
                  alt="play circle icon"
                  width={20}
                  height={20}
                />{" "}
                View Demo
              </button>
            </div>
            <div className="flex gap-12 w-xl mt-20">
              <p className="text-base font-normal w-52 h-11 text-gray-600 leading-[140%] tracking-normal">
                Trusted by
                <br /> leading companies
              </p>
              <div className="flex gap-7 justify-evenly items-center w-full">
                <Image
                  src="/company_logo_1.svg"
                  alt="company 1"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_2.svg"
                  alt="company 2"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_3.svg"
                  alt="company 3"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_4.svg"
                  alt="company 4"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_5.svg"
                  alt="company 5"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <Image
              src="/hero-image-section.svg"
              alt="hero image section"
              width={100}
              height={100}
              sizes="100vw"
              style={{
                width: "95%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </main>
      {/* <footer>
        <h2>Footer</h2>
      </footer> */}
    </div>
  );
}
