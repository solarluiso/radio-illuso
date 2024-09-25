import React from "react";

const aboutContent = [
  {
    title: "",
    description: "",
  },
];

const About = () => {
  return (
    <section className="relative h-fit w-full">
      <div className="container mx-auto mt-6 flex flex-col gap-4">
        <p>
          <span className="sm:text-base font-mono font-extrabold">
            What we offer:{" "}
          </span>
          <br />
          Wake-Up Routine: Energize your mornings with guided meditation,
          journaling tips, and daily planning. <br />
          Weather & Sports News: Stay updated with essential news to start your
          day informed. <br />
          Daily Podcasts: Explore new ideas with a fresh topic every day of the
          week, covering philosophy, arts, wellness, productivity, finances,
          literature and creativity. <br />
          Yoga & Motivation: Feel centered with yoga routines and uplifting
          quotes to keep you motivated. Afro-Cuban & Italo Techno Beats: Enjoy
          an exclusive mix of 90s and 00s Afro-Cuban rhythms and Italo techno.
          <br />
          Study With Me Sessions: Boost productivity with ambient coffee shop
          sounds as your background. <br />
          Audiobooks & Reflections: Dive into thought-provoking audiobooks and
          reflections to unwind and find inspiration. <br />
          Social Section: Connect with others through intimate live chats,
          virtual meetups, and shared moments that create a sense of belonging,
          no matter the distance. <br />
          Go-To-Bed Section: Ease into the night with serene music, soothing
          reflections, and sleep stories that carry you into the most peaceful
          dreams.
        </p>
        <p>
          Illuso Radio isn’t just something to listen to—it’s something to live
          by. We’re the rhythm to your day, the companion to your thoughts, and
          the voice that lingers long after the sound fades.
        </p>
        <p>
          Tune in for a holistic experience that nurtures the body, mind, and
          soul—your one-stop station for motivation, wellness, and vibrant
          beats!
        </p>
      </div>
    </section>
  );
};

export default About;
