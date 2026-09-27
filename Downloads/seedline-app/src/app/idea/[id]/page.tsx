import Link from "next/link";
import { notFound } from "next/navigation";
import { ideas } from "@/lib/ideas";

export default function IdeaDetailPage({ params }: { params: { id: string } }) {
  const idea = ideas.find((item) => item.id === params.id);

  if (!idea) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
          ← Back to ideas
        </Link>

        <article className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#111214]">
          <div className="border-b border-white/10 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{idea.category}</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">{idea.title}</h1>
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

              <button className="w-full rounded-full bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                Connect / Offer Help
              </button>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}
