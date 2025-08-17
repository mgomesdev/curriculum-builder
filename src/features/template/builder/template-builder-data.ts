import type { Template } from '../dto/template-dto';

interface Contact {
  address: string;
  postalCode: string;
  neighborhood: string;
  city: string;
  state: string;
  phones: string[];
  emails: string[];
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

export interface TemplateBuilderData {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  courses: Course[];
  skills: string[];
  tools: string[];
  hoobies: string[];
  languages: string[];
  links: string[];
}

export const templateBuilderData: TemplateBuilderData = {
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
      emails: ['matheusgomes1203@hotmail.com'],
    },
  },
  skills: [
    'Desenvolvimento de interfaces responsivas',
    'Integração com API Rest',
    'Expericência com metologoas ágeis',
    'Clean Code',
    'Trabalho em equipe',
    'Proatividade',
  ],
  tools: [
    'Html5',
    'Css3',
    'Sass',
    'BEM',
    'Javascript',
    'Typescript',
    'React.js',
    'Next.js',
    'React Hooks',
    'Testes automatizados',
    'Toolings (Webpack, gulp, vite, esbuild, rollup',
    'Styled-components',
    'Atomic Design',
    'TDD',
    'Jest',
    'Cypress',
    'React Testing Library',
    'CI/CD',
    'Redux',
    'Git/Github',
    'Linux',
    'Bootstrap',
    'Figma',
    'Storybook',
    'ApisRestfull',
    'Web Design Responsivo',
    'Acessibilidade e SEO',
    'Flux',
    'NodeJS',
    'Clean Code',
    'Code Review',
    'Clean Architecture',
    'Zustand',
    'TailwindCSS',
    'ReactNative/EXPO',
  ],
  hoobies: ['Standup Paddle', 'Corrida', 'Natação', 'Musculação', 'Leitura', 'Ouvir Charlie Brown JR'],
  languages: ['Português (Nativo)', 'Inglês básico (Leitura, escrita)'],
  links: [
    'matheusgomes1203@hotmail.com',
    'https://www.linkedin.com/in/matheusgomes',
    'https://github.com/mgomesdev',
    'https://github.com/matheusgrodrigues (antigo)',
  ],
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

export const fakeTemplateApiResponse: Template = {
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
        props: {
          class: 'container mx-auto flex flex-col py-56',
        },
        children: [
          {
            type: 'header',
            props: {
              class: 'flex items-center gap-24',
            },
            children: [
              {
                type: 'img',
                props: {
                  class: 'size-140 rounded-full',
                  alt: '',
                  src: '/foto/foto-pecege.jpeg',
                },
              },
              {
                type: 'div',
                props: {
                  class: 'flex flex-col',
                },
                children: [
                  {
                    type: 'h1',
                    props: {
                      class: 'text-56 font-bold',
                    },
                    children: [
                      {
                        type: '#text',
                        props: {},
                        children: ['Matheus Gomes Rodrigues de Jesus'],
                      },
                    ],
                  },
                  {
                    type: 'p',
                    props: {
                      class: 'font-sans text-28',
                    },
                    children: [
                      {
                        type: '#text',
                        props: {},
                        children: ['Desenvolvedor Frontend'],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'main',
            props: {
              class: 'mt-24 flex justify-between gap-2',
            },
            children: [
              {
                type: 'aside',
                props: {
                  class: 'flex flex-1/2 flex-col gap-12 px-4',
                },
                children: [
                  {
                    type: 'section',
                    props: {
                      class: 'flex flex-col gap-12',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          class: 'text-24',
                        },
                        children: [
                          {
                            type: '#text',
                            props: {},
                            children: ['Perfil'],
                          },
                        ],
                      },
                      {
                        type: 'p',
                        props: {},
                        children: [
                          {
                            type: '#text',
                            props: {},
                            children: [
                              'Desenvolvedor Frontend, 31 anos, organizado, formado em Análise e desenvolvimento de sistemas, com mais de 6 anos de experiência, especializado em tecnologias e frameworks específicos. Garantindo soluções responsivas e performaticas para a sua presença online.',
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'section',
                    props: {
                      class: 'mt-12 flex flex-col gap-12',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          class: 'text-24',
                        },
                        children: [
                          {
                            type: '#text',
                            props: {},
                            children: ['Experiência Profissional'],
                          },
                        ],
                      },
                      {
                        type: 'div',
                        props: {},
                        children: [
                          {
                            type: 'strong',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Desenvolvedor Frontend - Palmas - TO -'],
                              },
                              {
                                type: 'span',
                                props: {
                                  class: 'mr-4',
                                },
                                children: [
                                  {
                                    type: '#text',
                                    props: {},
                                    children: ['7 meses'],
                                  },
                                  {
                                    type: '#text',
                                    props: {},
                                    children: [','],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'p',
                            props: {
                              class: 'text-14 italic',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['CRP Tecnologia - (Remoto)'],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'ul',
                        props: {
                          class: 'list-disc pl-24',
                        },
                        children: [
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Desenvolvimento e manutenção de software'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: [
                                  'Realizar todas as atividades relacionadas à codificação e testes unitários, conforme normas, padrões e diretrizes estabelecidas',
                                ],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Implementação de casos de uso'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Integração de componentes e módulos do sistema'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Gerar e manter as rotinas de implantação'],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'p',
                        props: {
                          class: 'mt-12',
                        },
                        children: [
                          {
                            type: 'span',
                            props: {
                              class: 'mr-2',
                            },
                            children: [
                              {
                                type: 'strong',
                                props: {},
                                children: [
                                  {
                                    type: '#text',
                                    props: {},
                                    children: ['Competências:'],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Performance web, acessibilidade e SEO'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Programação orientada a objetos (POO)'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Code Review'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Tooling (Webpack, gulp, vite, esbuild, rollup)'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['React Testing Library'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Jest'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Cypress'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Clean Code'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Clean Architecture'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['UML'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Git/Github'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Web Design Responsivo'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['APIs Restful'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['React Query'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Redux.js'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Testes automatizados de software'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['BDD, TDD'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Metodologias ágeis'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Scrum, Kanban'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['HTML5, CSS3, Sass'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Jira'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Azure Devops'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Javascript/Typescript'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Axios'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['React.js'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['ContextAPI'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Hooks'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'mr-4',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Integração e entrega contínuas (CI/CD)'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'section',
                    props: {
                      class: 'mt-12 flex flex-col gap-12',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          class: 'text-24',
                        },
                        children: [
                          {
                            type: '#text',
                            props: {},
                            children: ['Formação'],
                          },
                        ],
                      },
                      {
                        type: 'p',
                        props: {},
                        children: [
                          {
                            type: 'strong',
                            props: {
                              class: 'block',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Análise e Desenvolvimento de Sistemas'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['-'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['2015'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['-'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['2017'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['Santos - SP'],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'text-14 italic',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Universidade São Judas Tadeu - Unimonte'],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'p',
                        props: {},
                        children: [
                          {
                            type: 'strong',
                            props: {
                              class: 'block',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Ensino Médio Completo'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['-'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['2009'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['-'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['2011'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: [','],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['São Vicente - SP'],
                              },
                            ],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'text-14 italic',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ["Escola Estadual Professor Luiz D'Áurea"],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'section',
                    props: {
                      class: 'mt-12 flex flex-col gap-12',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          class: 'text-24',
                        },
                        children: [
                          {
                            type: '#text',
                            props: {},
                            children: ['Cursos'],
                          },
                        ],
                      },
                      {
                        type: 'strong',
                        props: {},
                        children: [
                          {
                            type: '#text',
                            props: {},
                            children: ['Formação: Desenvolva aplicações Web Acessíveis -'],
                          },
                          {
                            type: 'span',
                            props: {
                              class: 'font-medium italic',
                            },
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Alura - Setembro, 2023'],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'ul',
                        props: {
                          class: 'list-disc pl-24',
                        },
                        children: [
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Acessibilidade web: crie designs inclusivos'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Acessibilidade web parte 1: tornando seu front-end inclusivo'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: [
                                  'Acessibilidade web parte 2: componentes acessíveis com um pouco de javascript',
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'aside',
                props: {
                  class: 'mt-24 flex-1/2',
                },
                children: [
                  {
                    type: 'section',
                    props: {
                      class: 'flex flex-col pl-56',
                    },
                    children: [
                      {
                        type: 'ul',
                        props: {},
                        children: [
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Av. Presidente Castelo Branco, 2514 - AP 403'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['11702-005, Guilhermina - Praia Grande - SP'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: 'span',
                                props: {},
                                children: [
                                  {
                                    type: '#text',
                                    props: {},
                                    children: ['(13) 99693-7036'],
                                  },
                                  {
                                    type: '#text',
                                    props: {},
                                    children: ['/'],
                                  },
                                ],
                              },
                              {
                                type: 'span',
                                props: {},
                                children: [
                                  {
                                    type: '#text',
                                    props: {},
                                    children: ['(13) 98816-4750'],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['12/03/1994 - Solteiro - 31 anos'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Nacionalidade:'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['Brasileira'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Naturalidade:'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['São Vicente - SP'],
                              },
                            ],
                          },
                          {
                            type: 'li',
                            props: {},
                            children: [
                              {
                                type: '#text',
                                props: {},
                                children: ['Habilitação:'],
                              },
                              {
                                type: '#text',
                                props: {},
                                children: ['A/B'],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
