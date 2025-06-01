import React, { useRef, useEffect } from "react";

// Be sure to import the Major Mono Display font in your project for the font to work properly.
// Example: in your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet" />

export const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const videos = container.querySelectorAll("video");

    // Handler to pause other videos when one starts playing
    function handlePlay(event) {
      videos.forEach((video) => {
        if (video !== event.target) {
          video.pause();
        }
      });
    }

    // Attach event listeners
    videos.forEach((video) => {
      video.addEventListener("play", handlePlay);
    });

    // Cleanup on unmount
    return () => {
      videos.forEach((video) => {
        video.removeEventListener("play", handlePlay);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-[#e9d7d2]"
      ref={containerRef}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* FILM - LATEST WORK */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 flex flex-col items-start">
            <h3 className="text-3xl font-bold text-black mb-4">SILENT PURSUIT</h3>
            <video
              controls
              className="w-full max-w-xl rounded shadow-lg mb-4 md:mb-0"
              src="https://pub-3009ba38fd504b0796168c30789aa113.r2.dev/Silent%20Pursuit.mp4"
              poster="/thumbnails/silent-pursuit.jpg"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-4 text-black">LATEST WORK</h2>
            <p className="text-lg text-black mb-6">
              “Silent Pursuit” In the midst of a vibrant, chaotic street market, Maria, a trafficked woman, makes a desperate escape from her captors. As she weaves through alleys and crowds, a relentless pursuer closes in, triggering a tense and silent chase. With only her instincts and courage to rely on, Maria must outmaneuver danger in a high-stakes fight for freedom, one that could mean liberation or recapture.
            </p>
          </div>
        </div>

        {/* DOCUMENTARY SECTION */}
        <div className="w-full bg-[#232323] rounded-xl py-12 px-6 mb-20">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-left w-full">
              The reality of an international student in the United States...
            </h2>
            <video
              controls
              className="w-full max-w-2xl rounded shadow-lg mb-6"
              src="https://pub-3009ba38fd504b0796168c30789aa113.r2.dev/media%20ayfaisal/The%20reality%20of%20an%20international%20student%20in%20the%20United%20States.mp4"
              poster="/thumbnails/international-student.jpg"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
            <a
              href="https://youtu.be/L5nfmloTMug?si=TKESav51PQ20lJn6"
              className="text-lg font-bold underline text-white hover:text-[#e9d7d2] mb-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch here
            </a>
            <h3 className="text-5xl font-extrabold text-white text-right opacity-80 w-full">
              DOCUMENTARY
            </h3>
          </div>
        </div>

        {/* MUSIC VIDEOS SECTION */}
        <div className="w-full bg-[#232323] rounded-xl py-12 px-6 mb-20">
          <h2
            className="text-5xl font-extrabold mb-10"
            style={{
              background: "linear-gradient(90deg, #fff 60%, #e9d7d2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MU
            <span style={{ color: "#eccec6", WebkitTextFillColor: "#eccec6", background: "none" }}>SIC</span>{" "}
            VID
            <span style={{ color: "#eccec6", WebkitTextFillColor: "#eccec6", background: "none" }}>EOS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Music Video 1 */}
            <div>
              <p className="text-xl font-semibold text-white mb-2">
                Straight for My Heart – Blackdutch (Cover)
              </p>
              <video
                controls
                className="w-full rounded shadow-lg mb-2"
                src="https://pub-3009ba38fd504b0796168c30789aa113.r2.dev/media%20ayfaisal/STRAIGHT%20FROM%20MY%20HEART.mp4"
                poster="/thumbnails/straight-for-my-heart.jpg"
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
              <p className="text-white">
                Directed and shot a moody visual for Blackdutch’s cover, using closeups and movement to emphasize emotion and performance.
              </p>
            </div>
            {/* Music Video 2 */}
            <div>
              <p className="text-xl font-semibold text-white mb-2">
                Reclaim – Jomal (Acappella Performance)
              </p>
              <video
                controls
                className="w-full rounded shadow-lg mb-2"
                src="https://pub-3009ba38fd504b0796168c30789aa113.r2.dev/media%20ayfaisal/JOMAL.mp4"
                poster="/thumbnails/reclaim-jomal.jpg"
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
              <p className="text-white">
                Filmed and edited a minimalist one-take performance to spotlight Jomal’s raw vocals and lyrical intensity.
              </p>
            </div>
          </div>
        </div>

        {/* COMMERCIALS SECTION */}
        <div className="w-full bg-[#232323] rounded-xl py-12 px-6 mb-20">
          <h2 className="text-3xl font-extrabold text-white mb-4"> 
            COMMERCIALS
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex flex-col justify-center mb-6 md:mb-0">
              <h3
                style={{
                  fontFamily: "'Major Mono Display', monospace",
                  fontWeight: 400,
                  fontSize: "2rem",
                  letterSpacing: "0.1em",
                  color: "#eccec6",
                  lineHeight: 1.2,
                  marginBottom: "2rem",
                  textAlign: "left",
                  textTransform: "uppercase"
                }}
              >
                <span style={{ fontWeight: 700 }}>S</span>wiss Miss
                <br />
                <span style={{ fontWeight: 700 }}>C</span>hocolate △dvert
              </h3>
            </div>
            <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
              <img
                src="/thumbnails/swiss-miss-commercial.jpg"
                alt="Swiss Miss Chocolate Advert poster"
                className="rounded shadow-lg max-w-md mb-4"
              />
              <a
                href="https://youtu.be/ojR9dJPYAYo?si=40xpl-kvAFEsqj0m"
                className="text-lg font-bold underline text-white hover:text-[#e9d7d2] mb-8 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLICK HERE
              </a>
              <p className="text-white text-lg">
                Directed and shot a cozy, feel-good commercial capturing the warmth and comfort of Swiss Miss hot chocolate, styled for seasonal appeal.
              </p>
            </div>
          </div>
        </div>

        {/* PODCAST SECTION */}
        <div className="w-full bg-[#fae4db] rounded-xl py-12 px-6 mb-20">
          <h2 className="text-5xl font-extrabold text-black mb-10">PODCAST</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <video
                controls
                className="rounded shadow-lg max-w-md"
                src="https://pub-3009ba38fd504b0796168c30789aa113.r2.dev/media%20ayfaisal/PODCAST.mp4"
                poster="/thumbnails/deep-dive-podcast.jpg"
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
            <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-2">
                DEEP DIVE PODCAST
              </h3>
              <p className="text-black text-lg">
                Directed and served as cinematographer for this visually engaging podcast series, focusing on clean, dynamic setups that complement in-depth conversations and storytelling.
              </p>
              <a
                href="https://youtu.be/0-SPtfOEVjg?si=Pfed72abdX5qMWDa"
                className="text-lg font-bold underline text-black hover:text-[#232323] mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch here
              </a>
            </div>
          </div>
        </div>

        {/* FILMS SECTION */}
        <div className="w-full bg-[#e9d7d2] rounded-xl py-12 px-6 mb-4">
          <h2 className="text-5xl font-extrabold text-center text-black mb-8 opacity-90">
            FILMS
          </h2>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-black mb-4">“The Caller”</h3>
            <video
              controls
              className="w-full max-w-xl rounded shadow-lg mb-4"
              src="https://pub-3009ba38fd504b0796168c30789aa113.r2.dev/media%20ayfaisal/Film.mp4"
              poster="/thumbnails/the-caller.jpg"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
            <a
              href="https://youtu.be/-VYWNQFtTXU?si=iy-PWkkzf1qWirDr"
              className="text-lg font-bold underline text-black  mb-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch here
            </a>
            <p className="text-black text-lg max-w-2xl text-center">
              Detective Mark engages in a tense phone call with the manipulative serial killer, Carter, who reveals his next murder. As the mind games escalate, Mark races against time to stop Carter, but with each chilling revelation, the killer remains one step ahead, pushing Mark to his breaking point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};