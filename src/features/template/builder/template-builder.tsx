import React from 'react';
import type { TemplateBuilderData } from './template-builder-data';
import { Editor, Frame, useNode, Element } from '@craftjs/core';
import { RenderNode } from '@/utils/template-utils';

interface TemplateBuilderProps {
  initialData: TemplateBuilderData;
}

export const TemplateBuilder = ({ initialData }: TemplateBuilderProps) => {
  const { experiences, education, courses, profile, skills, hoobies, languages, links, tools } = initialData;
  const { contact } = profile;

  return (
    <div className="page-container">
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
        }}>
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
    </div>
  );
};

interface SectionLinksProps {
  links: TemplateBuilderData['links'];
}

const SectionLinks = ({ links }: SectionLinksProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="flex flex-col"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <Heading className="mb-12 text-24">Links</Heading>
      <ul>
        {links.map(link => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </section>
  );
};

interface SectionLanguagesProps {
  languages: TemplateBuilderData['languages'];
}

const SectionLanguages = ({ languages }: SectionLanguagesProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="flex flex-col"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <Heading className="mb-12 text-24">Idioma</Heading>
      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </section>
  );
};

interface SectionHoobiesProps {
  hoobies: TemplateBuilderData['hoobies'];
}

const SectionHoobies = ({ hoobies }: SectionHoobiesProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="flex flex-col"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <Heading className="mb-12 text-24">Hobbies</Heading>
      <ul>
        {hoobies.map(hoobie => (
          <li key={hoobie}>{hoobie}</li>
        ))}
      </ul>
    </section>
  );
};

interface SectionToolsProps {
  tools: TemplateBuilderData['tools'];
}

const SectionTools = ({ tools }: SectionToolsProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="flex flex-col"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <Heading className="mb-12 text-24">Ferramentas e Tecnologias</Heading>
      <ul>
        {tools.map((tool, key) => (
          <li className="inline" key={tool}>
            {tool}
            {key < tools.length - 1 && ', '}
          </li>
        ))}
      </ul>
    </section>
  );
};

interface SectionSkillsProps {
  skills: TemplateBuilderData['skills'];
}

const SectionSkills = ({ skills }: SectionSkillsProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="flex flex-col"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <Heading className="mb-12 text-24">Competências</Heading>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

interface SectionContactProps {
  contact: TemplateBuilderData['profile']['contact'];
}

const SectionContact = ({ contact }: SectionContactProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="flex flex-col"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
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
    </section>
  );
};

interface SectionEducationProps {
  education: TemplateBuilderData['education'];
}

const SectionEducation = ({ education }: SectionEducationProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="mt-12 flex flex-col gap-12"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
      <Heading className="text-24">Formação</Heading>
      {education.map(educ => (
        <Paragraph key={educ.course}>
          <strong className="block">
            {educ.course} - {educ.start} - {educ.end}, {educ.city}
          </strong>
          <span className="text-14 italic">{educ.institution}</span>
        </Paragraph>
      ))}
    </section>
  );
};

interface SectionCourseProps {
  courses: TemplateBuilderData['courses'];
}

const SectionCourse = ({ courses }: SectionCourseProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      className="mt-12 flex flex-col gap-12"
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}>
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
    </section>
  );
};

interface HeaderProps {
  profile: TemplateBuilderData['profile'];
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
      <img className="size-140 rounded-full" src="/foto/foto-pecege.jpeg" alt="" />
      <div className="flex flex-col text-center sm:text-left">
        <Heading className="text-40 font-bold lg:text-48 lg:text-nowrap">{profile.name}</Heading>
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
      className="craftjs-renderer mx-auto flex max-w-[64rem] flex-col border-2 border-dashed px-20 py-56"
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
  profile: TemplateBuilderData['profile'];
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
  experiences: TemplateBuilderData['experiences'];
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
