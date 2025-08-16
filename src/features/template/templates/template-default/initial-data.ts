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

export const data: TemplateDefaultData = {
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
