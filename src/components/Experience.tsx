
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Code2,
  Users,
  Trophy,
  Rocket,
} from "lucide-react";

const chapters = [
  {
    year: "Before 2024",
    title: "Where It All Began",
    label: "School Days",
    icon: GraduationCap,
    story:
      "I completed my Class 10 and 12 education at Vision International School. My interest in Computer Science started there, even though I wasn't entirely sure what studying it would really involve. I was curious enough to find out.",
  },
  {
    year: "2024",
    title: "Stepping Into the Unknown",
    label: "First Year",
    icon: Code2,
    story:
      "I entered college with a lot of curiosity and not much idea of what the CSE world had in store. Conversations with seniors, new friendships, and college coding competitions pushed me to try things outside the classroom. I didn't win, but I made it through rounds — and that was a beginning.",
  },
  {
    year: "2025",
    title: "Rejections, Redirections & Firsts",
    label: "First Hackathon",
    icon: Users,
    story:
      "By the end of first year, I'd found friends who were just as excited about technical events as I was. We applied to hackathons and faced plenty of rejections before our first team selection at Diversion. That first 24-hour hackathon was about discovering the experience, not chasing a prize.",
  },
  {
    year: "2025–2026",
    title: "From Participation to Podium",
    label: "HackStorm Win",
    icon: Trophy,
    story:
      "We kept participating in hackathons while staying committed to academics. Eventually, our team earned first position in a track at HackStorm. The win meant a lot — especially after all the applications that hadn't worked out.",
  },
  {
    year: "2026 · Present",
    title: "Still Showing Up",
    label: "The Next Chapter",
    icon: Rocket,
    story:
      "Now in my third year, I'm still building, learning, and showing up at hackathons. Winning is exciting, but meeting people and trying unfamiliar things matter just as much. And yes, the free goodies and swag are always a bonus!",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.28,
  });

  const reduceMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [changing, setChanging] = useState(false);
  const [angle, setAngle] = useState(0);

  // Counter-rotate contents while the reel spins.
  const discRotation = useMotionValue(0);
  const uprightRotation = useTransform(
    discRotation,
    (value) => -value
  );

  const pending = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const revealTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (inView && !revealed) {
      revealTimer.current = setTimeout(
        () => setRevealed(true),
        reduceMotion ? 0 : 500
      );
    }

    return () => {
      if (revealTimer.current) {
        clearTimeout(revealTimer.current);
      }
    };
  }, [inView, revealed, reduceMotion]);

  useEffect(
    () => () => {
      if (pending.current) {
        clearTimeout(pending.current);
      }
    },
    []
  );

  useEffect(() => {
    if (reduceMotion) {
      discRotation.set(angle);
      return;
    }

    if (!revealed) {
      const spinning = animate(
        discRotation,
        discRotation.get() + 360,
        {
          duration: 35,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      );

      return () => spinning.stop();
    }

    const settling = animate(discRotation, angle, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => settling.stop();
  }, [revealed, angle, reduceMotion, discRotation]);

  const navigate = (direction: number) => {
    if (changing || !revealed) return;

    setChanging(true);

    const next =
      (active + direction + chapters.length) %
      chapters.length;

    // Preserve continuous rotation.
    setAngle(
      (previous) =>
        previous - direction * (360 / chapters.length)
    );

    pending.current = setTimeout(() => {
      setActive(next);
      setChanging(false);
    }, reduceMotion ? 0 : 650);
  };

  const chapter = chapters[active];
  const ChapterIcon = chapter.icon;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative z-10 overflow-hidden bg-background text-foreground"
      aria-label="My journey"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="mb-10 text-center md:mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            A collection of little moments
          </p>

          <h2 className="about-heading-glow text-3xl font-bold text-foreground md:text-5xl">
            The{" "}
            <span className="about-heading-accent text-primary italic">
              Journey
            </span>{" "}
            So Far
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            A little curiosity, a lot of learning, and a few
            unexpected wins along the way.
          </p>
        </div>

        {/* Disk and story layout */}
        <div className="relative mx-auto flex min-h-[680px] max-w-6xl flex-col items-center justify-start pt-4 md:min-h-[450px] md:justify-center md:pt-0">
          {/* Story card behind disk */}
          <div className="relative z-10 mt-[225px] w-full md:absolute md:left-[31%] md:top-1/2 md:mt-0 md:w-[69%] md:-translate-y-1/2">
            <AnimatePresence mode="wait">
              {revealed && !changing && (
                <motion.article
                  key={active}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: -115 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, x: -115 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    ease,
                  }}
                  className="
                    overflow-hidden rounded-3xl
                    border border-border
                    bg-card
                    p-5
                    shadow-[0_18px_60px_rgba(0,0,0,0.12)]
                    sm:p-7
                    md:py-9 md:pl-28 md:pr-7
                    lg:pl-36
                  "
                >
                  <div className="grid gap-5 sm:grid-cols-[1.25fr_0.85fr] sm:items-center">
                    <div>
                      {/* Year */}
                      <span className="inline-block rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {chapter.year}
                      </span>

                      {/* Story title */}
                      <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-foreground lg:text-3xl">
                        {chapter.title}
                      </h3>

                      {/* Story */}
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {chapter.story}
                      </p>
                    </div>

                    {/* Chapter illustration */}
                    <div
                      className="
                        flex min-h-[190px]
                        flex-col items-center justify-center
                        rounded-2xl
                        border-2 border-primary/20
                        bg-gradient-to-br
                        from-[#F4F4EB]
                        via-[#F5E3D6]
                        to-[#F1D2CC]
                        p-4 text-center shadow-sm
                        sm:min-h-[240px]
                      "
                      role="img"
                      aria-label={`Placeholder for ${chapter.label} photograph`}
                    >
                      <ChapterIcon
                        className="mb-4 h-14 w-14 text-[#E53229]"
                        strokeWidth={1.4}
                      />

                      <span className="font-serif text-lg font-bold text-[#1C1C1C]">
                        {chapter.label}
                      </span>
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>

          {/* Rotating cream disk */}
          <motion.div
            initial={false}
            animate={{
              scale: revealed ? 1 : 1.04,
            }}
            transition={{ duration: 0.9, ease }}
            className={`absolute top-0 z-20 h-[275px] w-[275px]
              transition-[left,top] duration-1000 ease-in-out
              md:top-[calc(50%-195px)]
              md:h-[390px] md:w-[390px]
              lg:top-[calc(50%-215px)]
              lg:h-[430px] lg:w-[430px]
              ${
                revealed
                  ? "left-[calc(50%-137.5px)] md:left-0"
                  : "left-[calc(50%-137.5px)] md:left-[calc(50%-195px)] lg:left-[calc(50%-215px)]"
              }`}
          >
            {/* Soft red halo */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

            <motion.div
              className="
                relative h-full w-full
                rounded-full
                border-[10px] border-[#F4F4EB]
                bg-[#E9D8BD]
                shadow-[inset_0_0_30px_rgba(80,50,40,0.15),0_15px_60px_rgba(0,0,0,0.22)]
              "
              style={{
                rotate: discRotation,
                backgroundImage:
                  "radial-gradient(circle at 35% 28%, #fff8e9 0%, #e9d8bd 60%, #d4bea2 100%)",
              }}
            >
              {chapters.map((item, index) => {
                const Icon = item.icon;

                const theta =
                  ((index * 360) / chapters.length - 90) *
                  (Math.PI / 180);

                const x = 35 * Math.cos(theta);
                const y = 35 * Math.sin(theta);

                return (
                  <div
                    key={item.label}
                    className="
                      absolute h-[27%] w-[27%]
                      -translate-x-1/2 -translate-y-1/2
                      rounded-full
                      border-[3px] border-[#C7A49C]
                      bg-gradient-to-br
                      from-[#FFF9F0]
                      via-[#F8E7DD]
                      to-[#F2D4CE]
                      shadow-md
                    "
                    style={{
                      left: `${50 + x}%`,
                      top: `${50 + y}%`,
                    }}
                  >
                    <motion.div
                      style={{ rotate: uprightRotation }}
                      className="
                        flex h-full w-full
                        flex-col items-center justify-center
                        overflow-hidden rounded-full
                        px-1 text-center
                      "
                    >
                      <Icon
                        className="h-7 w-7 shrink-0 text-[#E53229] md:h-9 md:w-9"
                        strokeWidth={1.5}
                      />

                      <span className="mt-1 text-[8px] font-semibold leading-tight text-[#1C1C1C] md:text-[10px]">
                        {item.label}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Fixed central label — never rotates */}
            <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
              <div className="flex h-[34%] w-[34%] flex-col items-center justify-center rounded-full border border-[#C7A49C] bg-[#F5E8D3] text-center shadow-inner">
                <span className="font-serif text-xl italic leading-tight text-[#1C1C1C] md:text-3xl">
                  My
                  <br />
                  Journey
                </span>

                <span className="mt-1 text-[9px] font-semibold text-[#E53229] md:text-xs">
                  2024 → Present
                </span>
              </div>
            </div>

            {/* Existing chapter indicator */}
            {revealed && (
              <div className="pointer-events-none absolute left-1/2 top-[-14px] -translate-x-1/2 text-2xl text-primary">
                ▼
              </div>
            )}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="relative z-30 mx-auto mt-2 flex max-w-xl flex-col items-center gap-4 text-center md:mt-0">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            {revealed
              ? `Chapter ${active + 1} of ${chapters.length}`
              : "Scroll to reveal the first memory"}
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              disabled={!revealed || changing}
              aria-label="Previous journey"
              className="
                rounded-full
                border border-primary/40
                bg-primary/10
                p-3 text-primary
                transition hover:bg-primary/20
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => navigate(1)}
              disabled={!revealed || changing}
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary
                bg-primary
                px-6 py-3
                text-sm font-semibold
                text-primary-foreground
                shadow-md
                transition hover:opacity-90
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              Jump to Next Journey
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Chapter progress */}
          <div
            className="flex gap-2"
            aria-label="Journey progress"
          >
            {chapters.map((item, index) => (
              <span
                key={item.label}
                className={`h-1.5 rounded-full transition-all ${
                  index === active
                    ? "w-8 bg-primary"
                    : "w-3 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
