import React from "react";
import { useTranslation } from "react-i18next";
import DotGrid from "../components/DotGrid";
import Beams from "../components/Beams";
import TextType from "../components/TextType";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div> */}
      <div className="relative w-full h-screen">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/40 text-white">
          {/* Title */}
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Store
          </h1> */}
          <TextType
            text={[
              "Discover Your Style.",
              "Shop the Latest Trends.",
              "Experience Comfort & Quality",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-4xl md:text-6xl font-bold mb-5"
          />

          {/* Subtitle */}
          <p className="max-w-2xl mb-6 text-lg md:text-xl">
            Discover the latest collections and exclusive offers designed just
            for you. Shop with comfort, style, and convenience anytime.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-10 py-2  bg-white  border text-black border-white rounded-full hover:bg-white hover:text-black shadow-lg transition duration-300">
              Show New
            </button>
            <button className="px-10 py-2 bg-black/50 backdrop-blur-2xl border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
