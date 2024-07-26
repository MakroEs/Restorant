import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";
const HeroSection = () => {
  return (
    <div>
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
          <video
            src={video}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={hero}
          ></video>
        </div>
        <div className="absolute inset-o -z10 bg-gradient-to-n from-transparent from-70% to-black">
          {" "}
        </div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <img src={logo} alt="restorant" className="w-full p-4"  />
             <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;