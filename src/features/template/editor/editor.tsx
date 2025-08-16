import React, { useRef } from 'react';
import { initialData } from '../template-default/initial-data';
import { TemplateDefault } from '../template-default/template-default';
import { domToJSON, renderFromJSON, type JSONNode } from '../utils/domToJSON';

export const TemplateEditor = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDomToJSON = () => {
    if (divRef?.current) {
      const json = domToJSON(divRef.current);
      console.log(json);
    }
  };

  return (
    <>
      <button onClick={handleDomToJSON}>domTOJson</button>
      <TemplateDefault initialData={initialData} ref={divRef} />
      <RenderFromJSON json={fakeAPi} />
    </>
  );
};

const RenderFromJSON = ({ json }: { json: JSONNode | null }) => {
  if (!json) return null;

  return (
    <>
      {json.children &&
        json.children.map((child, index) => (
          <React.Fragment key={index}>{renderFromJSON(child as JSONNode)}</React.Fragment>
        ))}
    </>
  );
};

const fakeAPi: JSONNode = {
  type: 'div',
  props: { class: 'bg-gray-50 min-h-screen p-8 font-sans' },
  children: [
    // Header
    {
      type: 'header',
      props: { class: 'flex items-center justify-between bg-white p-6 rounded-xl shadow-md mb-8' },
      children: [
        {
          type: 'div',
          props: { class: 'flex items-center gap-6' },
          children: [
            {
              type: 'img',
              props: {
                src: '/foto/foto-pecege.jpeg',
                alt: 'Foto Matheus',
                class: 'w-32 h-32 rounded-full border-4 border-indigo-500',
              },
            },
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h1',
                  props: { class: 'text-4xl font-bold text-gray-800' },
                  children: [{ type: '#text', props: {}, children: ['Matheus Gomes Rodrigues'] }],
                },
                {
                  type: 'p',
                  props: { class: 'text-lg text-gray-600' },
                  children: [{ type: '#text', props: {}, children: ['Desenvolvedor Frontend'] }],
                },
              ],
            },
          ],
        },
        {
          type: 'button',
          props: { class: 'bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600' },
          children: [{ type: '#text', props: {}, children: ['Contato'] }],
        },
      ],
    },

    // Main content
    {
      type: 'main',
      props: { class: 'grid grid-cols-3 gap-8' },
      children: [
        // Coluna principal
        {
          type: 'section',
          props: { class: 'col-span-2 bg-white p-6 rounded-xl shadow-md flex flex-col gap-6' },
          children: [
            // Sobre mim
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h2',
                  props: { class: 'text-2xl font-semibold' },
                  children: [{ type: '#text', props: {}, children: ['Sobre Mim'] }],
                },
                {
                  type: 'p',
                  props: { class: 'text-gray-700 leading-relaxed' },
                  children: [
                    {
                      type: '#text',
                      props: {},
                      children: [
                        'Desenvolvedor Frontend com mais de 6 anos de experiência, especializado em React, TypeScript e criação de interfaces responsivas, acessíveis e performáticas. Experiência com testes, metodologias ágeis e projetos complexos.',
                      ],
                    },
                  ],
                },
              ],
            },
            // Experiência Profissional
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h2',
                  props: { class: 'text-2xl font-semibold' },
                  children: [{ type: '#text', props: {}, children: ['Experiência Profissional'] }],
                },
                {
                  type: 'ul',
                  props: { class: 'list-disc pl-6 text-gray-700 flex flex-col gap-4' },
                  children: [
                    {
                      type: 'li',
                      props: {},
                      children: [
                        {
                          type: 'strong',
                          props: {},
                          children: [
                            {
                              type: '#text',
                              props: {},
                              children: ['Desenvolvedor Frontend - CRP Tecnologia (Remoto)'],
                            },
                          ],
                        },
                        {
                          type: 'p',
                          props: { class: 'italic' },
                          children: [{ type: '#text', props: {}, children: ['Palmas - TO, 7 meses'] }],
                        },
                        {
                          type: 'ul',
                          props: { class: 'list-disc pl-6' },
                          children: [
                            {
                              type: 'li',
                              props: {},
                              children: [
                                { type: '#text', props: {}, children: ['Desenvolvimento e manutenção de software'] },
                              ],
                            },
                            {
                              type: 'li',
                              props: {},
                              children: [
                                { type: '#text', props: {}, children: ['Testes unitários e integração de sistemas'] },
                              ],
                            },
                            {
                              type: 'li',
                              props: {},
                              children: [
                                {
                                  type: '#text',
                                  props: {},
                                  children: ['Implementação de casos de uso e funcionalidades'],
                                },
                              ],
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
                          type: 'strong',
                          props: {},
                          children: [{ type: '#text', props: {}, children: ['Desenvolvedor Frontend - Empresa X'] }],
                        },
                        {
                          type: 'p',
                          props: { class: 'italic' },
                          children: [{ type: '#text', props: {}, children: ['São Paulo - SP, 1 ano'] }],
                        },
                        {
                          type: 'ul',
                          props: { class: 'list-disc pl-6' },
                          children: [
                            {
                              type: 'li',
                              props: {},
                              children: [{ type: '#text', props: {}, children: ['Criação de dashboards interativos'] }],
                            },
                            {
                              type: 'li',
                              props: {},
                              children: [{ type: '#text', props: {}, children: ['Integração com APIs RESTful'] }],
                            },
                            {
                              type: 'li',
                              props: {},
                              children: [{ type: '#text', props: {}, children: ['Otimização de performance e SEO'] }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            // Projetos
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h2',
                  props: { class: 'text-2xl font-semibold' },
                  children: [{ type: '#text', props: {}, children: ['Projetos'] }],
                },
                {
                  type: 'ul',
                  props: { class: 'list-disc pl-6 text-gray-700 flex flex-col gap-3' },
                  children: [
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['Portfólio pessoal em React e TypeScript'] }],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['Sistema de gestão interna com Next.js'] }],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['Landing pages responsivas para clientes'] }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Coluna lateral
        {
          type: 'aside',
          props: { class: 'bg-white p-6 rounded-xl shadow-md flex flex-col gap-6' },
          children: [
            // Competências
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h2',
                  props: { class: 'text-2xl font-semibold' },
                  children: [{ type: '#text', props: {}, children: ['Competências'] }],
                },
                {
                  type: 'ul',
                  props: { class: 'list-disc pl-6 text-gray-700 flex flex-col gap-2' },
                  children: [
                    { type: 'li', props: {}, children: [{ type: '#text', props: {}, children: ['React.js'] }] },
                    { type: 'li', props: {}, children: [{ type: '#text', props: {}, children: ['TypeScript'] }] },
                    { type: 'li', props: {}, children: [{ type: '#text', props: {}, children: ['Next.js'] }] },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['Redux.js / ContextAPI'] }],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['Styled Components / Tailwind CSS'] }],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['Testes automatizados (Jest, Cypress)'] }],
                    },
                  ],
                },
              ],
            },
            // Formação
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h2',
                  props: { class: 'text-2xl font-semibold' },
                  children: [{ type: '#text', props: {}, children: ['Formação'] }],
                },
                {
                  type: 'p',
                  props: { class: 'text-gray-700' },
                  children: [
                    {
                      type: '#text',
                      props: {},
                      children: ['Análise e Desenvolvimento de Sistemas - Universidade São Judas Tadeu (2015-2017)'],
                    },
                  ],
                },
                {
                  type: 'p',
                  props: { class: 'text-gray-700' },
                  children: [
                    {
                      type: '#text',
                      props: {},
                      children: ["Ensino Médio Completo - Escola Estadual Professor Luiz D'Áurea (2009-2011)"],
                    },
                  ],
                },
              ],
            },
            // Cursos
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h2',
                  props: { class: 'text-2xl font-semibold' },
                  children: [{ type: '#text', props: {}, children: ['Cursos & Certificações'] }],
                },
                {
                  type: 'ul',
                  props: { class: 'list-disc pl-6 text-gray-700 flex flex-col gap-2' },
                  children: [
                    {
                      type: 'li',
                      props: {},
                      children: [
                        { type: '#text', props: {}, children: ['Desenvolva aplicações Web Acessíveis - Alura (2023)'] },
                      ],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['React Avançado - Alura (2022)'] }],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['Clean Code & Arquitetura - Udemy (2021)'] }],
                    },
                  ],
                },
              ],
            },
            // Contato
            {
              type: 'div',
              props: {},
              children: [
                {
                  type: 'h2',
                  props: { class: 'text-2xl font-semibold' },
                  children: [{ type: '#text', props: {}, children: ['Contato'] }],
                },
                {
                  type: 'ul',
                  props: { class: 'list-none text-gray-700 flex flex-col gap-2' },
                  children: [
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['📍 São Vicente - SP'] }],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['📞 (13) 99693-7036 / (13) 98816-4750'] }],
                    },
                    {
                      type: 'li',
                      props: {},
                      children: [{ type: '#text', props: {}, children: ['✉️ matheus@example.com'] }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Footer
    {
      type: 'footer',
      props: { class: 'mt-12 text-center text-gray-500' },
      children: [
        { type: '#text', props: {}, children: ['© 2025 Matheus Gomes Rodrigues. Todos os direitos reservados.'] },
      ],
    },
  ],
};
