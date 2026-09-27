"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { ideas } from "@/lib/ideas";
import type { UserRole } from "@/components/seedline-shell";

export default function IdeaDetailPage({ params }: { params: { id: string } }) {
  const [currentRole, setCurrentRole] = useState<UserRole>("Builder");
  const [hasConnected, setHasConnected] = useState(false);

  const idea = ideas.find((item) => item.id === params.id);

  if (!idea) {
    notFound();
  }

  const getActionText = () => {
    if (hasConnected) {
      return `Connected! ${currentRole} will reach out soon.`;
    }
    switch (currentRole) {
      case "Investor":
        return "Express Investment Interest";
      case "Mentor":
        return "Offer Your Expertise";
      case "Alumni":
        return "Make an Introduction";
      case "Builder":
      default:
        return "Connect / Offer Help";
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to ideas
          </Link>

          <div className="flex gap-2">
            {(["Builder", "Mentor", "Investor", "Alumni"] as UserRole[]).map((role) => (
              <button
                key={role}
                onClick={() => setCurrentRole(role)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  currentRole === role
                    ? "border-white/20 bg-white text-black"
                    : "border-white/10 bg-transparent text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111214]">
          <div className="border-b border-white/10 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{idea.category}</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                  {idea.title}
                </h1>
              </div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                {idea.need}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-zinc-200">{idea.hook}</p>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <section>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Problem</p>
                <p className="mt-3 text-base leading-7 text-zinc-300">{idea.problem}</p>
              </section>

              <section>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Proposed solution</p>
                <p className="mt-3 text-base leading-7 text-zinc-300">{idea.solution}</p>
              </section>

              <section className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Founder context</p>
                <p className="mt-3 text-base leading-7 text-zinc-300">{idea.intro}</p>
              </section>

              {currentRole === "Mentor" && (
                <section className="rounded-[22px] border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-400">Mentor perspective</p>
                  <p className="mt-3 text-base leading-7 text-zinc-300">
                    This idea is looking for your expert feedback. Key areas to review: market validation, technical
                    feasibility, and go-to-market strategy.
                  </p>
                </section>
              )}

              {currentRole === "Investor" && (
                <section className="rounded-[22px] border border-blue-500/20 bg-blue-500/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-400">Investment opportunity</p>
                  <p className="mt-3 text-base leading-7 text-zinc-300">
                    This founder is actively seeking capital. They&#x27;ve validated their core hypothesis and are ready
                    to discuss investment rounds. Check their traction metrics above.
                  </p>
                </section>
              )}

              {currentRole === "Alumni" && (
                <section className="rounded-[22px] border border-purple-500/20 bg-purple-500/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-purple-400">Alumni opportunity</p>
                  <p className="mt-3 text-base leading-7 text-zinc-300">
                    Support your network by offering an introduction to relevant contacts, providing mentorship, or
                    connecting with potential co-founders and investors.
                  </p>
                </section>
              )}
            </div>

            <aside className="space-y-4">
              <div className="rounded-[22px] border border-white/10 bg-[#18191b] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white">
                    {idea.founder
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">{idea.founder}</p>
                    <p className="text-sm text-zinc-400">{idea.role}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm text-zinc-400">
                  <div className="flex items-center justify-between gap-3">
                    <span>Location</span>
                    <span className="text-zinc-200">{idea.location}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Stage</span>
                    <span className="text-zinc-200">{idea.stage}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Urgency</span>
                    <span className="text-right text-zinc-200">{idea.urgency}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-[#18191b] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Engagement</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-lg font-semibold text-white">{idea.likes}</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Likes</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-lg font-semibold text-white">{idea.comments}</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Comments</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-lg font-semibold text-white">{idea.matches}</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Matches</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => !hasConnected && setHasConnected(true)}
                disabled={hasConnected}
                className={`w-full rounded-full px-4 py-3 text-sm font-medium transition ${
                  hasConnected
                    ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {getActionText()}
              </button>

              {hasConnected && (
                <p className="text-center text-xs text-zinc-400">
                  They'll have your contact from your Seedline profile profile.
                </p>
              )}
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}
