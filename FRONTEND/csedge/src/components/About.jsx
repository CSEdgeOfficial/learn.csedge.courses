import React from 'react';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground"
      >
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About CSEDGE</h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At CSEDGE, we're on a mission to empower individuals worldwide with transformative educational
                experiences. Our team of passionate educators and industry experts have curated a diverse range of
                courses to help you unlock your full potential.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Meet the Team
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground/50 bg-transparent px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Our Mission
              </a>
            </div>
          </div>
          <img
            src="https://media.istockphoto.com/id/1434132794/photo/meeting-planning-and-strategy-of-business-woman-team-leader-or-manager-talking-of-kpi-goal.jpg?s=612x612&w=0&k=20&c=0SVFwtzPGMcj4mJyyLRYAEUjc9nV1_AfCW-YHqOR2_0="
            width="550"
            height="550"
            alt="About"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </section>
    </>
  );
};

export default About;
