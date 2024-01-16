import Link from "next/link";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg- font-Josefin bg-cover bg-center"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="container h-full max-w-7xl mx-auto flex flex-col items-center justify-center space-y-24 py-12 px-6">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-100 font-sacramento tracking-widest ">
            Shield.
          </h1>
          <h1 className="text-4xl md:text-5xl text-gray-200">
            Welcome to the family
          </h1>
          <h1 className="text-xl lg:text-2xl text-gray-200 text-center">
            We care for your protection more than anything else. Join us now for
            free.
          </h1>
        </div>

        <div className="flex flex-row space-x-8 justify-center items-center">
          <Link
            href="/register"
            className="bg-gray-600 px-6 py-3 font-semibold text-[26px] text-white tracking-wider hover:cursor-pointer md:hover:bg-gray-800 md:hover:shadow-xl duration-200 hover:-translate-y-1"
          >
            Signup
          </Link>
          <Link
            href="/login"
            className=" bg-sky-500 px-6 py-3 font-semibold text-[26px] text-white tracking-wider hover:cursor-pointer md:hover:bg-sky-700 md:hover:shadow-xl duration-200 hover:-translate-y-1"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="bg-[#090715] container h-full max-w-full mx-auto flex flex-col items-center justify-center space-y-24 py-12 px-6">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-100 font-sacramento tracking-widest">
            Shield.
          </h1>
          <h1 className="text-4xl md:text-5xl text-gray-200">
            Welcome to the family
          </h1>
          <h1 className="text-xl lg:text-2xl text-gray-200 text-center">
            We care for your protection more than anything else. Join us now for
            free.
          </h1>
        </div>
      </div>
    </div>
  );
}
