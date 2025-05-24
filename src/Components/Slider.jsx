import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const slides = [
    {
      image: "https://i.ibb.co/SDHVxXRs/handsome-young-man-with-laptop-check-his-timetable-white.jpg",
      title: "Travel in the World Of Freelance Excellence Marketplace!",
      subtitle: "Flourish in a thriving freelance ecosystem dedicated to excellence and limitless opportunities",
      button: "Find a Better Job"
    },
    {
      image: "https://i.ibb.co/84GhVxDK/young-indian-man-with-laptop-gray-wall.jpg",
      title: "Travel in the World Of Freelance Excellence Marketplace!",
      subtitle: "Flourish in a thriving freelance ecosystem dedicated to excellence and limitless opportunities",
      button: "Find a Better Job"
    },
    {
      image: "https://i.ibb.co/nqX5zZRD/80-Y29udm-Vyc2-F0a-W9u-X2-J1c2lu-ZXNz-LTA2.jpg",
      title: "Bring Ideas to Life",
      subtitle: "Turn your vision into reality with skilled professionals.",
      button: "Find a Better Job"
    }
  ];

  return (
    <div className="w-full">
      <Slide
        duration={4000}
        transitionDuration={700}
        infinite={true}
        indicators={true}
        arrows={true}
        // autoplay={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="each-slide-effect">
            <div
              className="w-full h-[750px] bg-no-repeat bg-cover bg-center lg:bg-top flex  items-center justify-start px-16"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className=" text-base-content lg:pl-16 rounded-lg max-w-lg">
                <h2 className="text-4xl text-black font-bold mb-4">{slide.title}</h2>
                <p className="text-lg text-gray-700">{slide.subtitle}</p>
                <button className="mt-5 btn bg-gradient-to-r from-black to-gray-600 text-white rounded-lg font-medium shadow-md hover:from-black hover:to-gray-700 transition duration-300  w-[150px] border border-[#] cursor-pointer ">{slide.button}</button>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
