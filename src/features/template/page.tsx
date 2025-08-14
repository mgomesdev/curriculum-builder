export const Page = () => {
  return (
    <div className="container mx-auto flex flex-col py-6">
      <header className="flex items-center gap-6">
        <img className="size-36 rounded-full" src="/foto/foto-pecege.jpeg" alt="" />
        <div className="flex flex-col gap-2">
          <Heading>Matheus Gomes Rodrigues de jesus</Heading>
          <Paragraph>Desenvolvedor Frontend</Paragraph>
        </div>
      </header>

      <main className="mt-6 flex justify-between gap-2">
        <aside className="flex flex-1/2 flex-col gap-6 px-6">
          <section className="flex flex-col gap-1">
            <Heading>Perfil</Heading>
            <Paragraph>
              Desenvolvedor Frontend, 31 anos, organizado, formado em Análise e desenvolvimento de sistemas, com mais de
              6 anos de experiência, especializado em tecnologias e frameworks específicos. Garantindo soluções
              responsivas e performaticas para a sua presença online.
            </Paragraph>
          </section>
          <SectionExperience />
          <SectionExperience />
          <SectionExperience />
        </aside>

        <aside className="flex-1/2">
          <section className="flex flex-col">
            <ul>
              <li>Av. Presidente Castelo Branco, 2514 - AP 403</li>
              <li>11702-005, Guilhermina - Praia Grande - SP</li>
              <li>(13) 99693-7036 / (13) 98816-4750</li>
              <li>12/03/1994 - Solteiro - 31 anos</li>
              <li>Nacionalidade: Brasileira</li>
              <li>Naturalidade: São Vicente - SP</li>
              <li>Habilitação: A/B</li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
};

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

const Heading = ({ children, ...props }: HeadingProps) => {
  return (
    <h1 className="text-6xl font-bold" {...props}>
      {children}
    </h1>
  );
};

interface ParagraphProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return (
    <p className="text-1xl" {...props}>
      {children}
    </p>
  );
};

const SectionExperience = () => {
  return (
    <section className="flex flex-col gap-2">
      <Heading>EXPERIÊNCIA PROFISSIONAL</Heading>

      <div>
        <strong>
          Desenvolvedor Frontend - Palmas - TO - <span>7 meses</span>
        </strong>
        <Paragraph>CRP Tecnologia - (Remoto)</Paragraph>
      </div>

      <ul className="list-disc pl-6">
        <li>Desenvolvimento e manutenção de software</li>
        <li>
          Realizar todas as atividades relacionadas á codificação e testes unitários, conforme normas, padrôes e
          diretrizes estabelecidas.
        </li>
        <li>Implementação de casos de uso.</li>
        <li>Integração de componentes e módulos do sistema.</li>
        <li>Gerar e manter as rotinas de implantação.</li>
      </ul>

      <p className="mt-3">
        <span>
          <strong>Competências:</strong>
        </span>
        <span>Performance web, acessibilidade e SEO</span>
        <span>Programação orientada a objetos (POO)</span>
        <span>Code Review</span>
        <span>Tooling (Webpack, gulp, vite, esbuild, rollup)</span>
        <span>React Testing Library</span>
        <span>Jest</span>
        <span>Cypress</span>
        <span>Clean Code,</span>
        <span>Clean Architecture</span>
        <span>UML</span>
        <span>Git/Github</span>
        <span>Web Design Responsivo</span>
        <span>APIsRestful</span>
        <span>React Query</span>
        <span>Redux.js</span>
        <span>Testes automatizados de software</span>
        <span>BDD, TDD</span>
        <span>Metodologias ágeis</span>
        <span>Scrum, Kanban</span>
        <span>HTML5, CSS3, Sass</span>
        <span>Jira</span>
        <span>Azure Devops</span>
        <span>Javascript/Typescript</span>
        <span>Axios</span>
        <span>React.js</span>
        <span>ContextAPI</span>
        <span>Hooks</span>
        <span>Integração e entrega contínuas (CI/CD).</span>
      </p>
    </section>
  );
};
