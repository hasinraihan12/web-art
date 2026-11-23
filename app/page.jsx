const services = [
  { icon: "✦", title: "Web Design & Development", text: "Modern, responsive websites built to help your business grow." },
  { icon: "◈", title: "Graphic Design", text: "Memorable visual identities, social creatives and digital artwork." },
  { icon: "↗", title: "Digital Marketing", text: "Social media strategy and paid campaigns focused on results." },
];

const products = [
  { type: "SOFTWARE", title: "Productivity Essentials", detail: "Useful tools for your everyday workflow", price: "Coming soon" },
  { type: "DESIGN ASSETS", title: "Creative Asset Bundle", detail: "Graphics and resources for your next project", price: "Coming soon" },
  { type: "WORDPRESS", title: "Website Starter Kit", detail: "Themes and tools for a better website", price: "Coming soon" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="text-2xl font-black tracking-tight">web<span className="text-violet-400">art</span><span className="text-violet-400">.</span></a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#marketplace" className="hover:text-white">Marketplace</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
        <a href="mailto:hello@webart.example" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold hover:border-violet-400 hover:bg-violet-500/10">Let's Talk ↗</a>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 md:pt-32">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="pointer-events-none absolute left-1/3 top-40 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="relative max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-violet-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> YOUR DIGITAL WORLD, SIMPLIFIED
          </div>
          <h1 className="text-5xl font-black leading-[1.06] tracking-tight sm:text-7xl md:text-8xl">Everything<br />Digital. <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">One Place.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">From standout websites to creative services and digital essentials — Web Art brings the tools and expertise you need to move forward.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#marketplace" className="rounded-full bg-violet-500 px-7 py-4 font-bold shadow-lg shadow-violet-950/50 transition hover:bg-violet-400">Explore Marketplace ↗</a>
            <a href="#services" className="rounded-full border border-white/15 px-7 py-4 font-bold transition hover:bg-white/5">Explore Services</a>
          </div>
        </div>
        <div className="relative mt-20 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-3">
          {[["01", "Creative solutions"], ["02", "Digital products"], ["03", "Human support"]].map(([n, label]) => (
            <div key={n} className="rounded-2xl bg-white/[0.035] p-6"><div className="text-sm text-violet-300">{n}</div><div className="mt-3 text-lg font-semibold">{label}</div></div>
          ))}
        </div>
      </section>

      <section id="services" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold tracking-[.25em] text-violet-300">WHAT WE DO</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-5xl">Ideas made real through digital craft.</h2><p className="max-w-md leading-7 text-zinc-400">A flexible creative partner for brands, businesses and people building what's next.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((s) => <article key={s.title} className="rounded-3xl border border-white/10 bg-[#10111c] p-8 transition hover:-translate-y-1 hover:border-violet-400/50"><div className="text-3xl text-violet-300">{s.icon}</div><h3 className="mt-8 text-xl font-bold">{s.title}</h3><p className="mt-3 leading-7 text-zinc-400">{s.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="marketplace" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-bold tracking-[.25em] text-violet-300">DIGITAL MARKETPLACE</p>
        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="text-4xl font-bold tracking-tight md:text-5xl">Discover your next digital essential.</h2><span className="text-sm text-zinc-500">Preview collection · Products coming soon</span></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map((p, i) => <article key={p.title} className="overflow-hidden rounded-3xl border border-white/10 bg-[#10111c]">
            <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${i === 0 ? "from-indigo-500/30 to-violet-900/30" : i === 1 ? "from-fuchsia-500/25 to-blue-900/30" : "from-cyan-500/20 to-violet-900/30"}`}><div className="text-6xl font-black text-white/20">{["✧", "◈", "⌘"][i]}</div></div>
            <div className="p-7"><p className="text-xs font-bold tracking-widest text-violet-300">{p.type}</p><h3 className="mt-3 text-xl font-bold">{p.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{p.detail}</p><div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-zinc-300">{p.price}</div></div>
          </article>)}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-gradient-to-r from-violet-950/40 to-blue-950/30">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center"><p className="text-sm font-bold tracking-[.25em] text-violet-300">LET'S BUILD SOMETHING</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Your next digital chapter starts here.</h2><p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">Tell us what you're planning. We’ll help you find the right digital solution.</p><a href="mailto:hello@webart.example" className="mt-9 inline-flex rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-violet-100">Contact Web Art ↗</a></div>
      </section>
      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row"><span>© {new Date().getFullYear()} Web Art. All rights reserved.</span><span>Everything Digital. One Place.</span></footer>
    </main>
  );
}
