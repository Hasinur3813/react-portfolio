import myPhoto from "../../assets/myPhoto.jpg";

const AboutMe = () => {
  return (
    <section className="py-16 mt-5">
      {/* heading */}
      <div className="py-20 bg-gradient-to-tr from-primaryColor to-secondaryColor text-center">
        <h2 className="font-semibold text-xl mb-2 text-lightGray">About Me</h2>
        <p className="tracking-wider font-bold text-4xl text-lightGray">
          Let&apos;s build something together
        </p>
      </div>

      {/* content */}
      <div className="max-w-5xl mx-auto">
        {/* image */}
        <div className="flex justify-end py-5">
          <img
            src={myPhoto}
            alt="Hasinur Rahman"
            className="w-64 h-64 ring-4 ring-primaryColor -rotate-2 transition duration-200 hover:scale-105 ring-offset-4 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
