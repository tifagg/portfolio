
import Image from "next/image";

const projects = [
  {
    name: "Security Learning Lab",
    category: "CYBERSECURITY",
    status: "Learning project",
    description:
      "A cybersecurity learning space for notes, safe practice, and exploring security concepts through small projects.",
    tags: ["Python", "Security", "Education"],
  },
  {
    name: "Cybpick",
    category: "EXPERIMENT",
    status: "Experiment",
    description:
      "A Python-based movie recommendation project exploring recommendations and personalized discovery.",
    tags: ["Python", "Recommendation"],
  },
  {
    name: "AEGIS",
    category: "AI / DEVELOPMENT",
    status: "In development",
    description:
      "An experimental AI assistant project exploring language models, RAG systems, and intelligent workflows.",
    tags: ["AI", "Python", "RAG"],
  },
  {
    name: "Tifinity OS",
    category: "SYSTEMS",
    status: "Experiment",
    description:
      "A personal operating system development experiment built while exploring Rust, kernels, and low-level computing.",
    tags: ["Rust", "OS Development"],
  },
  {
    name: "TAC-CON",
    category: "INTERFACE / DEVELOPMENT",
    status: "Experiment",
    description:
      "An experimental tactical console interface inspired by futuristic desktop environments and system dashboards.",
    tags: ["Electron", "JavaScript", "UI"],
  },
];

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "HTML/CSS",
  "Next.js",
  "Rust",
  "Cybersecurity",
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-8 md:gap-12 md:px-8 md:py-12">

      {/* HEADER */}
      <header className="flex w-full flex-col items-center gap-3 py-8 text-center">
        <p className="text-sm uppercase tracking-widest">
          [ welcome to my corner of the internet ]
        </p>

        <h1 className="text-center">
          tifa's workshop
        </h1>

        <p className="max-w-xl text-center">
          projects, experiments, and things in progress.
          <br />
          building stuff, breaking stuff, learning along the way. xD
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="nes-btn is-primary">
            Projects
          </a>

          <a href="#about" className="nes-btn">
            About me
          </a>
        </div>
      </header>

      {/* ABOUT ME */}
      <section
        id="about"
        className="nes-container with-title is-centered w-full bg-blue-200 md:max-w-3xl"
      >
        <p className="title">ABOUT ME</p>

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
          anyway, that's a little about the human behind
          the screen.
        </p>
      </section>

      {/* SKILLS */}
      <section className="nes-container is-rounded w-full bg-white md:max-w-3xl">
        <div className="flex flex-col items-center gap-5">

          <Image
            width={100}
            height={100}
            src="/axe-and-shield.webp"
            alt="Pixel shield"
          />

          <p className="text-center">
            Current skills unlocked
          </p>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill, index) => (
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
      </section>

      {/* PROJECTS / DEV LOG */}
      <section
        id="projects"
        className="nes-container with-title w-full bg-white md:max-w-4xl"
      >
        <p className="title">DEV LOG / PROJECTS</p>

        <div className="mb-6 text-center">
          <p>
            Things i've built, experimented with, or am
            currently working on.
          </p>
        </div>

        {/* DEVELOPMENT NOTICE */}
        <div className="nes-container is-dark mb-6">
          <p className="font-bold">
            A NOTE FROM THE WORKSHOP
          </p>

          <p>
            i'm still learning and improving my skills.
            not everything here is finished or production-ready.
            some projects are experiments, works in progress,
            or personal learning projects.
          </p>

          <br />

          <p>
            some repositories are private while i'm still
            developing them. public projects will be linked
            whenever they're ready to share.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.name}
              className="nes-container is-rounded flex flex-col gap-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs opacity-70">
                  {project.category}
                </span>

                <span className="text-xs">
                  [{project.status}]
                </span>
              </div>

              <h3 className="text-xl font-bold">
                {project.name}
              </h3>

              <p className="text-sm">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-black px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

        <div className="mt-6 text-center">
          <p className="text-sm">
            more experiments coming soon...
          </p>
        </div>
      </section>

      {/* ELSEWHERE ON THE INTERNET */}
      <section className="nes-container with-title w-full bg-white md:max-w-3xl">
        <p className="title">ELSEWHERE ON THE INTERNET</p>

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
      </section>

      {/* CURRENTLY INTO */}
      <section className="nes-container with-title w-full bg-white md:max-w-3xl">
        <p className="title">CURRENTLY INTO</p>

        <ul className="list-disc pl-6">
          <li>Cybersecurity and software development</li>
          <li>Linux, technology and the indie web</li>
          <li>Chess, RPGs and multiplayer games</li>
          <li>Anime, manga and storytelling</li>
          <li>Music, writing and production</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center">
        <p>made with curiosity and questionable amounts of caffeine.</p>
        <p className="mt-2 text-sm">
          © {new Date().getFullYear()} Tifa's Workshop
        </p>
        <p className="mt-2 text-xs">
          still learning. still building. always experimenting. xD
        </p>
      </footer>

    </main>
  );
}
