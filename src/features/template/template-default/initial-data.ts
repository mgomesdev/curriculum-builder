interface Contact {
  address: string;
  postalCode: string;
  neighborhood: string;
  city: string;
  state: string;
  phones: string[];
  birth: {
    date: string;
    maritalStatus: string;
    age: number;
  };
  nationality: string;
  birthplace: string;
  drivingLicense: string;
}

interface Profile {
  name: string;
  role: string;
  photo: string;
  description: string;
  contact: Contact;
}

interface Experience {
  title: string;
  location: string;
  duration: string;
  company: string;
  mode: string;
  responsibilities: string[];
  skills: string[];
}

interface Education {
  level: string;
  course: string;
  start: number;
  end: number;
  city: string;
  institution: string;
}

interface Course {
  title: string;
  provider: string;
  date: string;
  modules: string[];
}

export interface TemplateDefaultData {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  courses: Course[];
}

export const initialData: TemplateDefaultData = {
  profile: {
    name: 'Matheus Gomes Rodrigues de Jesus',
    role: 'Desenvolvedor Frontend',
    photo: '/foto/foto-pecege.jpeg',
    description:
      'Desenvolvedor Frontend, 31 anos, organizado, formado em Análise e desenvolvimento de sistemas, com mais de 6 anos de experiência, especializado em tecnologias e frameworks específicos. Garantindo soluções responsivas e performaticas para a sua presença online.',
    contact: {
      address: 'Av. Presidente Castelo Branco, 2514 - AP 403',
      postalCode: '11702-005',
      neighborhood: 'Guilhermina',
      city: 'Praia Grande',
      state: 'SP',
      phones: ['(13) 99693-7036', '(13) 98816-4750'],
      birth: {
        date: '12/03/1994',
        maritalStatus: 'Solteiro',
        age: 31,
      },
      nationality: 'Brasileira',
      birthplace: 'São Vicente - SP',
      drivingLicense: 'A/B',
    },
  },

  experiences: [
    {
      title: 'Desenvolvedor Frontend',
      location: 'Palmas - TO',
      duration: '7 meses',
      company: 'CRP Tecnologia',
      mode: 'Remoto',
      responsibilities: [
        'Desenvolvimento e manutenção de software',
        'Realizar todas as atividades relacionadas à codificação e testes unitários, conforme normas, padrões e diretrizes estabelecidas',
        'Implementação de casos de uso',
        'Integração de componentes e módulos do sistema',
        'Gerar e manter as rotinas de implantação',
      ],
      skills: [
        'Performance web, acessibilidade e SEO',
        'Programação orientada a objetos (POO)',
        'Code Review',
        'Tooling (Webpack, gulp, vite, esbuild, rollup)',
        'React Testing Library',
        'Jest',
        'Cypress',
        'Clean Code',
        'Clean Architecture',
        'UML',
        'Git/Github',
        'Web Design Responsivo',
        'APIs Restful',
        'React Query',
        'Redux.js',
        'Testes automatizados de software',
        'BDD, TDD',
        'Metodologias ágeis',
        'Scrum, Kanban',
        'HTML5, CSS3, Sass',
        'Jira',
        'Azure Devops',
        'Javascript/Typescript',
        'Axios',
        'React.js',
        'ContextAPI',
        'Hooks',
        'Integração e entrega contínuas (CI/CD)',
      ],
    },
    // Se houver mais experiências, adicionar aqui
  ],

  education: [
    {
      level: 'Superior',
      course: 'Análise e Desenvolvimento de Sistemas',
      start: 2015,
      end: 2017,
      city: 'Santos - SP',
      institution: 'Universidade São Judas Tadeu - Unimonte',
    },
    {
      level: 'Ensino Médio',
      course: 'Ensino Médio Completo',
      start: 2009,
      end: 2011,
      city: 'São Vicente - SP',
      institution: "Escola Estadual Professor Luiz D'Áurea",
    },
  ],

  courses: [
    {
      title: 'Formação: Desenvolva aplicações Web Acessíveis',
      provider: 'Alura',
      date: 'Setembro, 2023',
      modules: [
        'Acessibilidade web: crie designs inclusivos',
        'Acessibilidade web parte 1: tornando seu front-end inclusivo',
        'Acessibilidade web parte 2: componentes acessíveis com um pouco de javascript',
      ],
    },
  ],
};

export const templateApiResponse = {
  id: 'template-001',
  name: 'Currículo Moderno',
  thumbnailUrl: '/previews/template-001-thumb.png',
  createdAt: '2025-08-16T12:00:00Z',
  updatedAt: '2025-08-16T12:00:00Z',
  version: '1.0.0',
  tags: ['moderno', 'profissional', 'minimalista'],
  category: 'Currículo',
  settings: {
    colors: {
      primary: '#aa88ff',
      secondary: '#23d207',
      accent: '#ff6622',
      neutral: '#282a2d',
      surface: '#0d0e0f',
      customKey: {},
    },
    typography: {
      h1: 'text-56 font-bold',
      p: 'text-28 font-sans',
      customKey: {},
    },
    customKey: {},
  },
  page: {
    title: 'Página Inicial',
    children: [
      {
        type: 'div',
        props: { class: 'container mx-auto flex flex-col gap-6' },
        children: [
          { type: 'h1', props: { class: '' }, children: [] },
          { type: 'p', props: { class: '' }, children: [] },
        ],
      },
    ],
  },
};
