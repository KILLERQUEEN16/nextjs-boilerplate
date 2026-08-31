const projects = [
  {
    name: "Nexus",
    type: "Projeto técnico",
    headline: "Inventário corporativo com rastreabilidade de ponta a ponta.",
    description:
      "Projeto cliente-servidor pensado para centralizar equipamentos, usuários, permissões e histórico de alterações sem depender de planilhas espalhadas.",
    problem:
      "Inventário fragmentado, mudanças difíceis de acompanhar e pouca visibilidade sobre o estado dos equipamentos.",
    engineering:
      "Cliente → API FastAPI → PostgreSQL, com histórico, heartbeat, controle de acesso e operações de inventário.",
    stack: ["Python", "FastAPI", "PostgreSQL", "REST API"],
  },
  {
    name: "Unidade Zero",
    type: "Em desenvolvimento",
    headline: "Pré-mobilização operacional baseada em regras de negócio.",
    description:
      "Plataforma para apoiar a seleção de profissionais conforme requisitos do posto, qualificações, disponibilidade e critérios operacionais.",
    problem:
      "Decisões manuais e retrabalho na escolha, validação e encaminhamento de profissionais para operações.",
    engineering:
      "Modelagem de requisitos, matching de candidatos, trilha de auditoria e backend preparado para automações e integrações.",
    stack: ["Backend", "SQL", "Automação", "Matching"],
  },
  {
    name: "Projeto Escarlate",
    type: "Aplicação pessoal",
    headline: "Autenticação, sessão persistente e sincronização de dados.",
    description:
      "Aplicação Android criada para centralizar tarefas e informações pessoais, com autenticação e comunicação entre app e backend.",
    problem:
      "Informações e rotinas distribuídas entre ferramentas diferentes, sem uma camada única de organização.",
    engineering:
      "Firebase Authentication, sessão persistente, backend Python e sincronização de dados entre cliente e servidor.",
    stack: ["Android", "Firebase", "Python", "APIs"],
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

const experience = [
  "Atendimento remoto e presencial com diagnóstico de incidentes de hardware, software e sistemas corporativos.",
  "Apoio ao inventário, controle de ativos e organização de equipamentos de TI.",
  "Conferência e atualização de dados, acompanhamento de chamados e comunicação com áreas internas.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_8%,rgba(139,92,246,0.10),transparent_28%),radial-gradient(circle_at_8%_45%,rgba(139,92,246,0.05),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <nav className="sticky top-4 z-30 flex items-center justify-between rounded-2xl border border-white/10 bg-[#09090b]/75 px-5 py-3.5 backdrop-blur-xl">
          <a href="#inicio" className="text-sm font-semibold tracking-tight text-white" aria-label="Voltar ao início">
            AG
          </a>
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-400 sm:gap-6 sm:text-sm">
            <a className="transition hover:text-white" href="#projetos">Projetos</a>
            <a className="hidden transition hover:text-white sm:inline" href="#experiencia">Experiência</a>
            <a className="transition hover:text-white" href="#contato">Contato</a>
          </div>
        </nav>

        <section id="inicio" className="grid min-h-[78vh] content-center gap-12 py-20 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.24em] text-violet-400 sm:text-xs">
              Backend · Automação · Dados
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
              Eu transformo processo manual em software.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Sou Augusto Gabriel, desenvolvedor júnior focado em Python, APIs e bancos de dados. Gosto de pegar problemas operacionais confusos e reduzir tudo a regras claras, dados organizados e automação.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                Ver projetos
              </a>
              <a href="https://github.com/KILLERQUEEN16" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/5">
                GitHub
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Foco</p>
              <p className="mt-2 text-sm font-medium text-zinc-200">Python · Backend · Automação</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Experiência</p>
              <p className="mt-2 text-sm font-medium text-zinc-200">+1 ano em ambiente corporativo</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Local</p>
              <p className="mt-2 text-sm font-medium text-zinc-200">São Paulo, Brasil</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="scroll-mt-24 py-24">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-400">Projetos selecionados</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Menos card bonito. Mais problema e engenharia.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
              Cada projeto abaixo existe para demonstrar uma parte diferente do meu raciocínio técnico: modelagem, backend, dados, automação e integração.
            </p>
          </div>

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article key={project.name} className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.035] sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-zinc-700">0{index + 1}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-zinc-400">{project.type}</span>
                    </div>
                    <h3 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.name}</h3>
                    <p className="mt-3 text-lg leading-7 text-zinc-300">{project.headline}</p>
                    <p className="mt-4 max-w-xl leading-7 text-zinc-500">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-lg bg-white/[0.05] px-3 py-1.5 font-mono text-[11px] text-zinc-300">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">Problema</p>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{project.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">Engenharia</p>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{project.engineering}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-24 grid gap-10 border-t border-white/10 py-24 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-400">Experiência</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Ambiente real antes de código bonito.</h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">Grupo Brasanitas</h3>
                <p className="mt-1 text-sm text-zinc-400">Aprendiz de TI</p>
              </div>
              <p className="font-mono text-xs text-zinc-600">fev/2025 — jul/2026</p>
            </div>
            <div className="mt-7 grid gap-3">
              {experience.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="border-t border-white/10 py-24">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-400">Stack</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Ferramentas, não decoração.</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stack.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-5 text-sm font-medium text-zinc-300">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 py-24">
          <div className="rounded-[2rem] border border-violet-400/20 bg-violet-500/[0.055] p-7 sm:p-10 lg:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-400">Contato</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Procuro uma oportunidade para construir, aprender rápido e entregar coisa que funcione.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">Backend, Python, automação ou dados. Sem título inflado e sem promessa milagrosa. Código, contexto e evolução.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200" href="mailto:augusto131060@gmail.com">Enviar e-mail</a>
              <a className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/5" href="https://github.com/KILLERQUEEN16" target="_blank" rel="noreferrer">Ver GitHub</a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Augusto Gabriel · Backend e Automação</p>
          <p>Feito com Next.js e TypeScript.</p>
        </footer>
      </div>
    </main>
  );
}
