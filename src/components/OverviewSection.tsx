export default function Overview() {
    const stats = [
      {
        value: "98%",
        title: "client satisfaction rate",
        description:
          "Our treatments are designed to deeply relax, heal, and uplift. Clients leave feeling truly renewed.",
      },
      {
        value: "300+",
        title: "guests served each month",
        description:
          "From first-timers to long-time regulars, we create personalized wellness experiences for everyone.",
      },
      {
        value: "50+",
        title: "holistic therapies offered",
        description:
          "From massage, facials to sound healing and detox programs, our services nurture aspects of well-being.",
      },
    ];
  
    return (
      <section className="bg-black text-white min-h-screen px-8 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl md:text-6xl font-light italic mb-16 leading-tight text-center text-white">
            Our <span className="not-italic font-normal">impact</span>
          </h2>

        
          <div className="grid md:grid-cols-3 gap-15 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-medium text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-light text-white mb-2">
                  {stat.title}
                </p>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  