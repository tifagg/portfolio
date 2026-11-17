
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 gap-5 md:p-10 md:gap-10">

      <h1 className="text-center">
        Tifa Labs: retro code archive
      </h1>

      {/* ABOUT ME */}
      <div className="nes-container with-title is-centered bg-blue-200 md:w-[45rem]">
        <p className="title">A LITTLE ABOUT ME</p>

        <p>
          heyyy, i'm Tifa! i'm a high school student who's
          been messing around with computers and coding
          since i was around 11. it all started with my
          dad's computer, a bunch of curiosity, random
          experiments and figuring out how things worked.
          fast forward to now and i'm still here, building
          stuff, breaking stuff and learning along the way. xD
        </p>

        <br />

        <p>
          i'm pretty into programming, cybersecurity, linux
          and all the weird little corners of technology.
          i've practically been raised in the trenches of
          the cyber world. old web aesthetics, obscure
          websites, internet rabbit holes and indie web
          projects — the internet has always been one big
          playground to me.
        </p>

        <br />

        <p>
          when i'm not coding, i'm probably gaming.
          i enjoy story-driven RPGs, multiplayer games,
          chess and other strategy games. i'm also into
          anime, manga, creative writing, music production
          and storytelling.
        </p>

        <br />

        <p>
          music is a HUGE part of my life. i love blasting
          music, especially XXXTENTACION, $uicideboy$, Yeat,
          Lil Peep and plenty of other artists.
          underground hip-hop, techno, house — if it
          sounds good loud, i'm probably listening to it ;P
        </p>

        <br />

        <p>
          anyway, that's a little about the human behind
          the screen.
        </p>

      </div>

      {/* SKILLS */}
      <div className="nes-container is-rounded bg-white md:w-[45rem]">
        <div className="flex flex-col items-center justify-center gap-4">

          <Image
            width={100}
            height={100}
            src="/axe-and-shield.webp"
            alt="Pixel shield"
          />

          <p className="text-center">Current skills unlocked</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Python",
              "C++",
              "JavaScript",
              "HTML/CSS",
              "Next.js",
              "Rust",
              "Cyber",
            ].map((skill, index) => (
              <span key={skill} className="nes-badge">
                <span
                  className={
                    index % 3 === 0
                      ? "is-dark"
                      : index % 3 === 1
                        ? "is-primary"
                        : "is-success"
                  }
                >
                  {skill}
                </span>
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* ELSEWHERE ON THE INTERNET */}
      <div className="nes-container with-title bg-white md:w-[45rem]">
        <p className="title">Elsewhere on the internet</p>

        <div className="grid grid-cols-1 gap-4">

          <div className="nes-container is-rounded">
            <h3>My little corner of the internet :3</h3>

            <p>
              A more personal space filled with random
              thoughts, interests, things I like,
              internet nostalgia and whatever else
              lives rent-free in my head.
            </p>

            <a
              href="https://tfah.neocities.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my Neocities website →
            </a>
          </div>

          <div className="nes-container is-rounded">
            <h3>Currently watching</h3>

            <p>
              A little something I found interesting.
              Check it out!
            </p>

            <a
              href="https://youtu.be/Htccpx-zAy8?si=rY82mOhc7pDOJ7eP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube →
            </a>
          </div>

        </div>
      </div>

      {/* CURRENTLY INTO */}
      <div className="nes-container with-title bg-white md:w-[45rem]">
        <p className="title">Currently into</p>

        <ul className="list-disc pl-6">
          <li>Cybersecurity and software development</li>
          <li>Linux, technology and the indie web</li>
          <li>Chess, RPGs and multiplayer games</li>
          <li>Anime, manga and storytelling</li>
          <li>Music, writing and production</li>
        </ul>
      </div>

    </main>
  );
}
