const projects = [
  {
    name: "Nexus",
    kicker: "Backend · Inventário · APIs",
    description:
      "Projeto cliente-servidor para centralizar ativos, usuários, permissões e histórico de alterações, com foco em rastreabilidade e automação de rotinas de TI.",
    stack: ["Python", "FastAPI", "PostgreSQL", "REST API"],
    status: "Case técnico",
    highlight: "Arquitetura cliente → API → banco de dados",
  },
  {
    name: "Unidade Zero",
    kicker: "Operações · Matching · Automação",
    description:
      "Plataforma de pré-mobilização para comparar requisitos de postos com qualificações e disponibilidade de profissionais, reduzindo retrabalho operacional.",
    stack: ["Backend", "SQL", "Automação", "Matching"],
    status: "Em desenvolvimento",
    highlight: "Regras de negócio e rastreabilidade operacional",
  },
  {
    name: "Projeto Escarlate",
    kicker: "Android · Firebase · Backend",
    description:
      "Aplicação pessoal com autenticação, sessão persistente e sincronização de informações entre aplicativo e backend, pensada para centralizar tarefas e rotinas.",
    stack: ["Android", "Firebase", "Python", "APIs"],
    status: "Protótipo funcional",
    highlight: "Autenticação e sincronização de dados",
  },
];

const stack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQL",
  "REST APIs",
  "Firebase",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-6 sm:px-10 lg:px-12">
        <nav className="sticky top-4 z-20 mb-24 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl">
          <a href="#top" className="font-semibold tracking-tight text-white">
            AG
          </a>
          <div className="flex items-center gap-5 text-sm text-zinc-400">
            <a className="transition hover:text-white" href="#projetos">
              Projetos
            </a>
            <a className="hidden transition hover:text-white sm:block" href="#stack">
              Stack
            </a>
            <a className="transition hover:text-white" href="#contato">
              Contato
            </a>
          </div>
        </nav>

        <section id="top" className="grid min-h-[62vh] content-center gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-violet-400">
              Backend · Automação · Sistemas
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Sistemas úteis. Menos trabalho manual.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Sou Augusto Gabriel. Desenvolvo soluções com Python, APIs e bancos de dados, com foco em transformar processos repetitivos em software simples, rastreável e útil.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Ver projetos
              </a>
              <a
                href="https://github.com/KILLERQUEEN16"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Agora</p>
            <p className="mt-3 text-xl font-medium text-white">Buscando oportunidade júnior</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">Backend, Python, automação ou dados.</p>
          </div>
        </section>

        <section id="projetos" className="pt-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Projetos em destaque</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Problema, arquitetura e execução.</h2>
            </div>
            <span className="hidden text-sm text-zinc-500 sm:block">03 projetos</span>
          </div>

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition hover:border-violet-400/30 sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_.55fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">{project.status}</span>
                    </div>
                    <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-violet-400">{project.kicker}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.name}</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-zinc-400">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-xs text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex min-h-44 items-end rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">Destaque técnico</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{project.highlight}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="pt-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Tecnologias</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Ferramentas que eu uso para construir.</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stack.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm font-medium text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="pt-28">
          <div className="rounded-3xl border border-violet-400/20 bg-violet-500/[0.06] p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Contato</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Vamos construir algo que tenha utilidade de verdade.</h2>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200" href="mailto:augusto131060@gmail.com">
                augusto131060@gmail.com
              </a>
              <a
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-zinc-200 transition hover:bg-white/5"
                href="https://github.com/KILLERQUEEN16"
                target="_blank"
                rel="noreferrer"
              >
                github.com/KILLERQUEEN16
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
