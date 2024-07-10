import React from 'react';

const Hero = () => {
  return (
    <>
      <section id="courses" className="w-full py-8 md:py-14 lg:py-22 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Diverse Course Offerings</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From coding to design, business to personal development, we have a course to suit every need. Dive in
                and find your perfect fit.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-muted-foreground">
                  Master the art of building modern, responsive websites and web applications.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720569600&semt=ais_hybrid"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Digital Marketing</h3>
                <p className="text-muted-foreground">
                  Unlock the secrets to effective online marketing and grow your business.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://t4.ftcdn.net/jpg/02/65/28/09/360_F_265280966_3F83JFHvgU3b4XclfS0TdI148h4dJuxD.jpg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Data Science</h3>
                <p className="text-muted-foreground">Dive into the world of data and learn to uncover valuable insights.</p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://media.istockphoto.com/id/1191609321/photo/graphic-designer-drawing-sketches-logo-design.jpg?s=612x612&w=0&k=20&c=UOJSXYUWaPwMa3urhbzmY7yuDiQUeKYIAMb08bNk2Sk="
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Graphic Design</h3>
                <p className="text-muted-foreground">
                  Unleash your creative potential and master the art of visual communication.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://media.istockphoto.com/id/980272768/photo/project-management-concept-chart-with-keywords-and-icons.jpg?s=612x612&w=0&k=20&c=OB3Lhh1-vD8ZU_07PM6F_vnN-hJTYhtWYID9UrFJRyU="
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Project Management</h3>
                <p className="text-muted-foreground">Develop the skills to lead successful projects and drive results.</p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://t4.ftcdn.net/jpg/01/40/77/25/360_F_140772573_1urCQNsOknK3vRMXFplETrMYsC3TpUJh.jpg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Personal Development</h3>
                <p className="text-muted-foreground">
                  Unlock your true potential and transform your personal and professional life.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
