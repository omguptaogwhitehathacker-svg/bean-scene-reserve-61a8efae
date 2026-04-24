import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ananya Rao",
    role: "Regular · Indiranagar",
    rating: 5,
    text: "The pour-over here is the best in Bangalore. The dim lighting and slow jazz make it my favourite work-from-cafe spot.",
  },
  {
    name: "Karthik Menon",
    role: "Coffee enthusiast",
    rating: 5,
    text: "Single origin Chikmagalur beans, brewed by people who actually care. Reservation for our anniversary was perfect.",
  },
  {
    name: "Priya Shetty",
    role: "Visitor from Mumbai",
    rating: 5,
    text: "Walked in by accident, stayed for three hours. The cinnamon latte and atmosphere feel like a warm hug.",
  },
  {
    name: "Rohan Iyer",
    role: "Designer",
    rating: 5,
    text: "Booked the corner nook for a small client meeting. Quiet, intimate, and the cold brew flight blew everyone away.",
  },
];

export function Reviews() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Loved in Bangalore</p>
          <h2 className="text-4xl md:text-5xl font-display">What our guests say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="w-8 h-8 text-primary/60" />
              <p className="text-sm leading-relaxed text-foreground/90 flex-1">"{r.text}"</p>
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
