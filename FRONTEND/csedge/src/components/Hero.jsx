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
                  Enquire Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXnR8WCIsjTru9vQps3ht2HOESEfcGZAI_w&s"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">SEO Optimization</h3>
                <p className="text-muted-foreground">
                  Unlock the secrets to effective online marketing and grow your business.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149242071.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=ais_user"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">DB Management</h3>
                <p className="text-muted-foreground">Learn to manage databases efficiently and effectively.</p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Android Development</h3>
                <p className="text-muted-foreground">
                  Develop robust Android applications and stay ahead in the mobile app market.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dIKhJo-Wc-Y85VBWYypBwKbjtO-NPGpW1g&s"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Website Maintenance</h3>
                <p className="text-muted-foreground">Ensure your website remains up-to-date and secure.</p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://kinsta.com/wp-content/uploads/2017/12/wordpress-admin.png"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">WordPress</h3>
                <p className="text-muted-foreground">
                  Learn to create and manage websites with ease using WordPress.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://marketdive.net/wp-content/uploads/2022/05/Shopify-logo-alt.jpg"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Shopify</h3>
                <p className="text-muted-foreground">
                  Build and manage your online store using Shopify.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukBC4CBDeGRyCMMaRCjkl-gC7ytPDwYEm9A&s"
                  width="300"
                  height="200"
                  alt="Course"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold">Payment Integrations</h3>
                <p className="text-muted-foreground">
                  Learn to integrate payment gateways for seamless transactions.
                </p>
                <a
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enquire Now
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
