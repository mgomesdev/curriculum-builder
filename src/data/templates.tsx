import type { Template } from '@/dto/template-dto';

export const initial_template: Template[] = [
  {
    id: 'template-01',
    name: 'Currículo Moderno',
    sections: [
      // ===== Cabeçalho =====
      {
        id: 'section-header',
        name: 'Cabeçalho',
        type: 'header',
        props: {
          className:
            'flex flex-col items-center gap-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white p-8 rounded-b-2xl shadow-lg',
        },
        elements: [
          {
            id: 'name',
            type: 'p',
            props: {
              children: 'Matheus G. Rodrigues',
              className: 'text-4xl font-bold tracking-wide',
              onClickAction: '',
            },
          },
          {
            id: 'role',
            type: 'p',
            props: {
              children: 'Desenvolvedor Frontend Pleno',
              className: 'text-lg font-medium opacity-90',
              onClickAction: '',
            },
          },
          {
            id: 'btn-download',
            type: 'button',
            props: {
              children: 'Baixar Currículo',
              className:
                'bg-white text-indigo-600 px-6 py-2 rounded-lg shadow hover:shadow-xl hover:bg-gray-100 transition-all font-semibold',
              onClickAction: 'save',
            },
          },
        ],
      },

      // ===== Sobre mim =====
      {
        id: 'section-about',
        name: 'Sobre Mim',
        type: 'section',
        props: {
          className: 'p-8 bg-white text-gray-800 leading-relaxed',
        },
        elements: [
          {
            id: 'about-text',
            type: 'p',
            props: {
              children:
                'Sou um desenvolvedor frontend apaixonado por criar experiências digitais intuitivas, responsivas e de alta performance. Tenho experiência em React, TypeScript, Styled Components e integração com APIs REST. Busco sempre aplicar Clean Code, padrões de arquitetura e boas práticas.',
              className: 'text-base',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== Habilidades =====
      {
        id: 'section-skills',
        name: 'Habilidades',
        type: 'section',
        props: {
          className: 'p-8 bg-gray-50 text-gray-800',
        },
        elements: [
          {
            id: 'skill-1',
            type: 'p',
            props: {
              children: 'ReactJS',
              className: 'text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-2',
            type: 'p',
            props: {
              children: 'TypeScript',
              className: 'text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-3',
            type: 'p',
            props: {
              children: 'Styled Components',
              className: 'text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-4',
            type: 'p',
            props: {
              children: 'API REST',
              className: 'text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-5',
            type: 'p',
            props: {
              children: 'Git/GitHub',
              className: 'text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-6',
            type: 'p',
            props: {
              children: 'Jest',
              className: 'text-sm',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== Experiência =====
      {
        id: 'section-experience',
        name: 'Experiência',
        type: 'section',
        props: {
          className: 'p-8 bg-white text-gray-800',
        },
        elements: [
          {
            id: 'exp-1-title',
            type: 'p',
            props: {
              children: '💼 Desenvolvedor Frontend Pleno — Empresa X (2022 - Presente)',
              className: 'font-semibold mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-desc',
            type: 'p',
            props: {
              children:
                'Desenvolvimento e manutenção de aplicações web modernas, implementação de interfaces responsivas, integração com APIs externas e aplicação de testes unitários.',
              className: 'text-sm text-gray-600 mb-4',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-title',
            type: 'p',
            props: {
              children: '💼 Desenvolvedor Frontend Júnior — Empresa Y (2020 - 2022)',
              className: 'font-semibold mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-desc',
            type: 'p',
            props: {
              children:
                'Participação em projetos de e-commerce e sistemas internos, implementando componentes reutilizáveis e colaborando com equipes de UX e backend.',
              className: 'text-sm text-gray-600',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== Formação =====
      {
        id: 'section-education',
        name: 'Formação Acadêmica',
        type: 'section',
        props: {
          className: 'p-8 bg-gray-50 text-gray-800',
        },
        elements: [
          {
            id: 'edu-1',
            type: 'p',
            props: {
              children: '🎓 Bacharelado em Ciência da Computação — Universidade Z (2016 - 2020)',
              className: 'font-semibold mb-1',
              onClickAction: '',
            },
          },
          {
            id: 'edu-1-desc',
            type: 'p',
            props: {
              children: 'Ênfase em desenvolvimento de software e engenharia de requisitos.',
              className: 'text-sm text-gray-600',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== Contato =====
      {
        id: 'section-contact',
        name: 'Contato',
        type: 'section',
        props: {
          className: 'p-8 bg-indigo-600 text-white flex flex-col items-center gap-2 rounded-t-2xl',
        },
        elements: [
          {
            id: 'contact-email',
            type: 'p',
            props: {
              children: '📧 matheus@example.com',
              className: 'text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'contact-phone',
            type: 'p',
            props: {
              children: '📱 (11) 99999-9999',
              className: 'text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'contact-linkedin',
            type: 'p',
            props: {
              children: '🔗 linkedin.com/in/matheusgrodrigues',
              className: 'text-sm underline',
              onClickAction: '',
            },
          },
        ],
      },
    ],
  },
];
