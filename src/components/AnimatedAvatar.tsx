import { useState } from "react";

const AnimatedAvatar = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 shrink-0 group">
      {/* Brutalist offset shadow */}
      <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />

      {/* Main frame */}
      <div className="relative w-full h-full border-2 border-black bg-white overflow-hidden group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
        <div className="w-full h-full animate-[float_6s_ease-in-out_infinite]">
          <img
            src="https://media.discordapp.net/attachments/1126143501227274252/1490316562991943832/IMG_20260402_213450_695.webp?ex=69d39cf5&is=69d24b75&hm=b11c8af082c56721b4dac8e1f326dac740c4de8254d63f3e06a32e49e0632f3f&=&format=webp&width=919&height=930"
            alt="Hardik Dhameeja"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>

        {/* Subtle scan line overlay */}

        {/* Subtle scan line overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)",
          }}
        />
      </div>

      {/* Status badge */}
      <div className="absolute -bottom-3 -right-3 bg-black text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-black z-10">
        <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
        Available
      </div>
    </div>
  );
};

export default AnimatedAvatar;
