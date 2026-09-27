"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, ideas, needOptions, type IdeaCategory, type IdeaNeed } from "@/lib/ideas";

export type UserRole = "Mentor" | "Alumni" | "Investor" | "Builder";

export function SeedlineShell() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("Builder");
  const [selectedCategory, setSelectedCategory] = useState<"All" | IdeaCategory>("All");
  const [selectedNeed, setSelectedNeed] = useState<"All" | IdeaNeed>("All");

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const matchesCategory =
        selectedCategory === "All" || idea.category === selectedCategory;
      const matchesNeed = selectedNeed === "All" || idea.need === selectedNeed;
      return matchesCategory && matchesNeed;
    });
  }, [selectedCategory, selectedNeed]);

  const getRoleHeroContent = () => {
    const content: Record<UserRole, { title: string; subtitle: string; cta: string; icon: string }> = {
      Builder: {
        title: "Turn your spark into traction.",
        subtitle:
          "Seedline connects your raw idea with alumni, investors, and collaborators who can help shape what's next.",
        cta: "Share my idea",
        icon: "🚀",
      },
      Mentor: {
        title: "Help shape the next generation of ideas.",
        subtitle:
          "Review early-stage concepts and provide feedback that turns raw ideas into viable opportunities.",
        cta: "Find ideas to mentor",
        icon: "🎓",
      },
      Investor: {
        title: "Discover raw signals before the market does.",
        subtitle:
          "Access curated early-stage ideas ready for investment, from founders actively seeking capital.",
        cta: "Browse investor-ready ideas",
        icon: "💡",
      },
      Alumni: {
        title: "Stay connected, engage early.",
        subtitle: "Mentor ideas, make meaningful introductions, and shape the community you graduated from.",
        cta: "Explore opportunities",
        icon: "🤝",
      },
    };
    return content[selectedRole];
  };

  const roleHero = getRoleHeroContent();

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 mb-8 border-b border-white/10 bg-[#0a0a0b]/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm font-semibold text-white">
                S
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.2em] text-zinc-300 uppercase">
                  Seedline
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              {(["Builder", "Mentor", "Investor", "Alumni"] as UserRole[]).map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                    selectedRole === role
                      ? "border-white/20 bg-white text-black"
                      : "border-white/10 bg-transparent text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10">
                Profile
              </button>
            </div>
          </div>
        </header>

        <main className="space-y-10">
          <section className="grid gap-8 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%)] px-6 py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-emerald-300 uppercase">
                {roleHero.icon} {selectedRole} view
              </div>

              <div className="space-y-5">
                <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                  {roleHero.title}
                </h1>
                <p className="max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
                  {roleHero.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#discover"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  {selectedRole === "Builder" ? "Share my idea" : "Browse ideas"}
                </a>
                {selectedRole !== "Builder" && (
                  <a
                    href="#network"
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    {selectedRole === "Investor" ? "View companies" : "Connect with builders"}
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-6 pt-2 text-sm text-zinc-400">
                <div>
                  <span className="block text-2xl font-semibold text-white">2.3k</span>
                  early ideas shared
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-white">480</span>
                  alumni active
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-white">16</span>
                  angel intros this week
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#111214] p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {selectedRole === "Investor" ? "Hot deals" : "Trending"}
                  </p>
                  <h2 className="mt-1 text-lg font-medium text-white">
                    {selectedRole === "Investor" ? "Investor ready" : "This week"}
                  </h2>
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {ideas
                  .sort(() =>
                    selectedRole === "Investor"
                      ? ideas.findIndex((i) => i.need === "Investor Ready") -
                        ideas.indexOf(arguments[0])
                      : 0
                  )
                  .slice(0, 3)
                  .map((idea) => (
                    <div key={idea.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                          {idea.category}
                        </span>
                        <span className="text-xs text-zinc-400">{idea.need}</span>
                      </div>
                      <h3 className="mt-2 text-base font-medium text-white">{idea.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">{idea.hook}</p>
                      <div className="mt-3 text-xs text-zinc-500">
                        {idea.founder} • {idea.role}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section id="discover" className="space-y-5 rounded-[28px] border border-white/10 bg-[#0d0e10] p-5 sm:p-6">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Discovery feed</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">
                  {selectedRole === "Investor"
                    ? "Capital-ready ideas"
                    : selectedRole === "Mentor"
                      ? "Ideas worth mentoring"
                      : selectedRole === "Alumni"
                        ? "Support your network"
                        : "Raw ideas worth a second look"}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    selectedCategory === "All"
                      ? "border-white/20 bg-white text-black"
                      : "border-white/10 bg-transparent text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition ${
                      selectedCategory === category
                        ? "border-white/20 bg-white text-black"
                        : "border-white/10 bg-transparent text-zinc-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pb-2">
              <button
                onClick={() => setSelectedNeed("All")}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  selectedNeed === "All"
                    ? "border-white/20 bg-white text-black"
                    : "border-white/10 bg-[#111214] text-zinc-300 hover:border-white/20 hover:text-white"
                }`}
              >
                All needs
              </button>
              {selectedRole === "Investor" ? (
                <button
                  onClick={() => setSelectedNeed("Investor Ready")}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    selectedNeed === "Investor Ready"
                      ? "border-white/20 bg-white text-black"
                      : "border-white/10 bg-[#111214] text-zinc-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  Investor Ready
                </button>
              ) : (
                needOptions.map((need) => (
                  <button
                    key={need}
                    onClick={() => setSelectedNeed(need)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition ${
                      selectedNeed === need
                        ? "border-white/20 bg-white text-black"
                        : "border-white/10 bg-[#111214] text-zinc-300 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {need}
                  </button>
                ))
              )}
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {filteredIdeas.length > 0 ? (
                filteredIdeas.map((idea) => (
                  <article
                    key={idea.id}
                    className="group rounded-[24px] border border-white/10 bg-[#111214] p-5 transition hover:border-white/20 hover:bg-[#141517]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                          {idea.category}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                          {idea.title}
                        </h3>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                        {idea.need}
                      </span>
                    </div>

                    <p className="mt-4 text-base font-medium leading-7 text-zinc-200">{idea.hook}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{idea.problem}</p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-zinc-500">
                      <div className="flex items-center gap-3">
                        <span>{idea.founder}</span>
                        <span>•</span>
                        <span>{idea.role}</span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-400">
                        <span>♥ {idea.likes}</span>
                        <span>💬 {idea.comments}</span>
                        <span>↗ {idea.matches}</span>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-2">
                      <Link
                        href={`/idea/${idea.id}`}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10"
                      >
                        {selectedRole === "Investor"
                          ? "Review investment"
                          : selectedRole === "Mentor"
                            ? "Offer feedback"
                            : "View details"}
                      </Link>
                      {selectedRole !== "Builder" && (
                        <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10">
                          {selectedRole === "Investor" ? "Intro offer" : "Connect"}
                        </button>
                      )}
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[24px] border border-dashed border-white/10 bg-[#111214] p-8 text-sm text-zinc-400 lg:col-span-2">
                  No ideas match the current filters. Try a different category or need state.
                </div>
              )}
            </div>
          </section>

          {selectedRole === "Builder" && (
            <section id="submit" className="grid gap-6 rounded-[28px] border border-white/10 bg-[#0d0e10] p-5 sm:p-6 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="rounded-[24px] border border-white/10 bg-[#111214] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Submit</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">
                  Drop a raw idea into the network.
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Keep it sharp. One sentence on the problem, one on the solution, and what you need right now.
                </p>

                <div className="mt-8 space-y-3 text-sm text-zinc-400">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Step 1
                    </span>
                    <span className="mt-1 block text-zinc-200">Summarize the idea</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Step 2
                    </span>
                    <span className="mt-1 block text-zinc-200">Pick a need</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Step 3
                    </span>
                    <span className="mt-1 block text-zinc-200">Publish to the community</span>
                  </div>
                </div>
              </div>

              <form className="rounded-[24px] border border-white/10 bg-[#111214] p-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 md:col-span-2">
                    <span className="text-sm text-zinc-300">Title</span>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-white/20"
                      placeholder="Your idea title"
                    />
                  </label>

                  <label className="space-y-2 md:col-span-2">
                    <span className="text-sm text-zinc-300">One-line hook</span>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-white/20"
                      placeholder="What&#x27;s the core insight?"
                    />
                  </label>

                  <label className="space-y-2 md:col-span-2">
                    <span className="text-sm text-zinc-300">Problem statement</span>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-white/20"
                      placeholder="The pain point you&#x27;re solving"
                    />
                  </label>

                  <label className="space-y-2 md:col-span-2">
                    <span className="text-sm text-zinc-300">Proposed solution</span>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-white/20"
                      placeholder="How you plan to solve it"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm text-zinc-300">Category</span>
                    <select className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-white/20">
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-[#111214]">
                          {category}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm text-zinc-300">What I need right now</span>
                    <select className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-white/20">
                      {needOptions.map((need) => (
                        <option key={need} value={need} className="bg-[#111214]">
                          {need}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200">
                    Publish idea
                  </button>
                </div>
              </form>
            </section>
          )}

          {selectedRole !== "Builder" && (
            <section id="network" className="rounded-[28px] border border-white/10 bg-[#0d0e10] p-5 sm:p-6">
              <div className="mb-6 border-b border-white/10 pb-5">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Network</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">
                  {selectedRole === "Investor"
                    ? "Connect with founders raising capital"
                    : "Meet other mentors and experts"}
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {["Sarah Chen", "Priya Kapoor", "Michael Torres", "Emma Rodriguez", "James Liu", "Sophie Martin"].map(
                  (name, idx) => (
                    <div key={idx} className="rounded-[20px] border border-white/10 bg-[#111214] p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-base font-bold text-white">
                        {name.split(" ")[0][0]}
                        {name.split(" ")[1][0]}
                      </div>
                      <h3 className="mt-3 text-sm font-medium text-white">{name}</h3>
                      <p className="mt-1 text-xs text-zinc-400">
                        {selectedRole === "Investor" ? "Founder in Fintech" : "AI/ML Mentor"}
                      </p>
                      <button className="mt-3 w-full rounded-full border border-white/10 bg-white/5 py-2 text-xs font-medium text-white transition hover:bg-white/10">
                        Connect
                      </button>
                    </div>
                  )
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
