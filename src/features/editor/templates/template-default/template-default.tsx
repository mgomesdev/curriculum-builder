import React from 'react';
import type { TemplateDefaultData } from '../template-default/template-default-data';
import { Editor, Frame, useNode, Element } from '@craftjs/core';
import { RenderNode } from '@/features/editor/utils/template-utils';
import { TouchWrapper } from '@/features/editor/utils/touch-wrapper';
import { Section } from '../components/section';

/* TODO: US - clicar e arrastar itens
 * estilizar o container do item após selecionar.
 * permitir opção de clicar em subir ou descer elemento no mobile.
 * remover a opção mover no mobile.
 * configurar opção de salvar/editar (editor -> enabled(false/true))
 * ajustar estilos da borda de foco.
 * quando clicar fora desselecionar.
 * criar abstrações para os componentes.
 * adicionar informações reais no initialData do curriculo.
 * revisar, finalizar e fazer PR.
 */

interface TemplateDefaultProps {
  initialData: TemplateDefaultData;
}

export const TemplateDefault = ({ initialData }: TemplateDefaultProps) => {
  const { experiences, education, courses, profile, skills, hoobies, languages, links, tools } = initialData;
  const { contact } = profile;

  return (
    <div className="page-container">
      <TouchWrapper>
        <Editor
          onRender={RenderNode}
          resolver={{
            Element,
            Container,
            Header,
            Main,
            AsideLeft,
            AsideRight,
            Heading,
            Paragraph,
            SectionExperience,
            SectionEducation,
            SectionCourse,
            SectionContact,
            SectionSkills,
            SectionTools,
            SectionHoobies,
            SectionLanguages,
            SectionLinks,
          }}
          enabled={true}>
          <Frame>
            <Element is={Container} canvas>
              <Element profile={profile} is={Header} />
              <Element is={Main}>
                <Element profile={profile} is={AsideLeft} canvas>
                  <Element experiences={experiences} is={SectionExperience} />
                  <Element education={education} is={SectionEducation} />
                  <Element courses={courses} is={SectionCourse} />
                </Element>
                <Element is={AsideRight} canvas>
                  <Element contact={contact} is={SectionContact} />
                  <Element skills={skills} is={SectionSkills} />
                  <Element tools={tools} is={SectionTools} />
                  <Element hoobies={hoobies} is={SectionHoobies} />
                  <Element languages={languages} is={SectionLanguages} />
                  <Element links={links} is={SectionLinks} />
                </Element>
              </Element>
            </Element>
          </Frame>
        </Editor>
      </TouchWrapper>
    </div>
  );
};

interface SectionLinksProps {
  links: TemplateDefaultData['links'];
}

const SectionLinks = ({ links }: SectionLinksProps) => {
  return (
    <Section className="flex flex-col">
      <Heading className="mb-12 text-24">Links</Heading>
      <ul>
        {links.map(link => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </Section>
  );
};

interface SectionLanguagesProps {
  languages: TemplateDefaultData['languages'];
}

const SectionLanguages = ({ languages }: SectionLanguagesProps) => {
  return (
    <Section className="flex flex-col">
      <Heading className="mb-12 text-24">Idioma</Heading>
      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </Section>
  );
};

interface SectionHoobiesProps {
  hoobies: TemplateDefaultData['hoobies'];
}

const SectionHoobies = ({ hoobies }: SectionHoobiesProps) => {
  return (
    <Section className="flex flex-col">
      <Heading className="mb-12 text-24">Hobbies</Heading>
      <ul>
        {hoobies.map(hoobie => (
          <li key={hoobie}>{hoobie}</li>
        ))}
      </ul>
    </Section>
  );
};

interface SectionToolsProps {
  tools: TemplateDefaultData['tools'];
}

const SectionTools = ({ tools }: SectionToolsProps) => {
  return (
    <Section className="flex flex-col">
      <Heading className="mb-12 text-24">Ferramentas e Tecnologias</Heading>
      <ul>
        {tools.map((tool, key) => (
          <li className="inline" key={tool}>
            {tool}
            {key < tools.length - 1 && ', '}
          </li>
        ))}
      </ul>
    </Section>
  );
};

interface SectionSkillsProps {
  skills: TemplateDefaultData['skills'];
}

const SectionSkills = ({ skills }: SectionSkillsProps) => {
  return (
    <Section className="flex flex-col">
      <Heading className="mb-12 text-24">Competências</Heading>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  );
};

interface SectionContactProps {
  contact: TemplateDefaultData['profile']['contact'];
}

const SectionContact = ({ contact }: SectionContactProps) => {
  return (
    <Section className="flex flex-col">
      <Heading className="mb-12 text-24">Contato</Heading>

      <ul>
        <li>{contact.address}</li>
        <li>{`${contact.postalCode}, ${contact.neighborhood} - ${contact.city} - ${contact.state}`}</li>
        <li>
          {contact.phones.map((phone, key) => (
            <span key={phone}>
              {phone}
              {key < contact.phones.length - 1 && ' / '}
            </span>
          ))}
        </li>
        <li>{`${contact.birth.date} - ${contact.birth.maritalStatus} - ${contact.birth.age} anos`}</li>
        <li>Email: {contact.emails.map(email => email)}</li>
        <li>Nacionalidade: {contact.nationality}</li>
        <li>Naturalidade: {contact.birthplace}</li>
        <li>Habilitação: {contact.drivingLicense}</li>
      </ul>
    </Section>
  );
};

interface SectionEducationProps {
  education: TemplateDefaultData['education'];
}

const SectionEducation = ({ education }: SectionEducationProps) => {
  return (
    <Section className="mt-12 flex flex-col gap-12">
      <Heading className="text-24">Formação</Heading>
      {education.map(educ => (
        <Paragraph key={educ.course}>
          <strong className="block">
            {educ.course} - {educ.start} - {educ.end}, {educ.city}
          </strong>
          <span className="text-14 italic">{educ.institution}</span>
        </Paragraph>
      ))}
    </Section>
  );
};

interface SectionCourseProps {
  courses: TemplateDefaultData['courses'];
}

const SectionCourse = ({ courses }: SectionCourseProps) => {
  return (
    <Section className="mt-12 flex flex-col gap-12">
      <Heading className="text-24">Cursos</Heading>
      {courses.map(course => (
        <React.Fragment key={course.title}>
          <strong>
            Formação: Desenvolva aplicações Web Acessíveis -{' '}
            <span className="font-medium italic">Alura - Setembro, 2023</span>
          </strong>
          <ul className="list-disc pl-24">
            {course.modules.map(module => (
              <li key={module}>{module}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Section>
  );
};

interface HeaderProps {
  profile: TemplateDefaultData['profile'];
}

const Header = ({ profile }: HeaderProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <header
      className="sm:px-none flex flex-col items-center gap-24 sm:flex-row"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <img className="size-120 rounded-full" src="/foto/foto-pecege.jpeg" alt="" />
      <div className="flex flex-col text-center sm:text-left">
        <Heading className="text-40 font-bold lg:text-40 lg:text-nowrap">{profile.name}</Heading>
        <Paragraph className="font-sans text-28">{profile.role}</Paragraph>
      </div>
    </header>
  );
};

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      className="craftjs-renderer mx-auto flex max-w-[64rem] flex-col border-2 border-dashed border-gray-300 px-20 py-56"
      ref={(ref: HTMLDivElement) => {
        connect(drag(ref));
      }}>
      {children}
    </div>
  );
};

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <main
      className="mt-48 flex flex-col justify-between gap-2 sm:mt-28 lg:flex-row"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      {children}
    </main>
  );
};

interface AsideLeftProps {
  children: React.ReactNode;
  profile: TemplateDefaultData['profile'];
}

const AsideLeft = ({ children, profile }: AsideLeftProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <aside
      className="flex flex-col gap-12 px-4 sm:flex-1/2 lg:pr-48"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <section className="flex flex-col gap-12">
        <Heading className="text-24">Perfil</Heading>
        <Paragraph>{profile.description}</Paragraph>
      </section>

      {children}
    </aside>
  );
};

interface AsideRightProps {
  children: React.ReactNode;
}

const AsideRight = ({ children }: AsideRightProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <aside
      className="mt-24 flex flex-col gap-24 sm:flex-1/6 lg:mt-[0]"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      {children}
    </aside>
  );
};

interface ParagraphProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <p
      {...props}
      ref={(ref: HTMLParagraphElement) => {
        connect(drag(ref));
      }}>
      {children}
    </p>
  );
};

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const Heading = ({ children, ...props }: HeadingProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <h1
      {...props}
      ref={(ref: HTMLHeadingElement) => {
        connect(drag(ref));
      }}>
      {children}
    </h1>
  );
};

interface SectionExperienceProps {
  experiences: TemplateDefaultData['experiences'];
}

const SectionExperience = ({ experiences }: SectionExperienceProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode(node => ({
    selected: node.events.selected,
  }));

  return (
    <section
      className="mt-12 flex flex-col gap-12"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}
      style={{
        border: selected ? '2px solid blue' : '1px solid transparent',
        padding: '20px',
        margin: '10px 0',
      }}>
      <Heading className="text-24">Experiência Profissional</Heading>
      {experiences.map(exp => (
        <React.Fragment key={exp.title}>
          <div>
            <strong>
              {`${exp.title} - ${exp.location} - `}
              <span>{exp.duration},</span>
            </strong>
            <Paragraph className="text-14 italic">{`${exp.company} - (${exp.mode})`}</Paragraph>
          </div>

          <ul className="list-disc pl-24">
            {exp.responsibilities.map(resp => (
              <li key={resp}>{resp}</li>
            ))}
          </ul>

          <p className="mt-12 break-words">
            <span className="mr-2">
              <strong>Competências:</strong>
            </span>

            {exp.skills.map(skill => (
              <span key={skill}>{skill},</span>
            ))}
          </p>
        </React.Fragment>
      ))}
    </section>
  );
};
