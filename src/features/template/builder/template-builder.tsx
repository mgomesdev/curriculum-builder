import React, { forwardRef } from 'react';
import type { TemplateBuilderData } from './template-builder-data';
import { Heading } from '../../../components/heading';
import { Paragraph } from '../../../components/paragraph';

interface TemplateBuilderProps {
  initialData: TemplateBuilderData;
}

export const TemplateBuilder = forwardRef<object, TemplateBuilderProps>(({ initialData }, ref) => {
  const { experiences, education, courses, profile, skills, hoobies, languages, links, tools } = initialData;
  const { contact } = profile;

  return (
    <div className="mx-auto flex max-w-[64rem] flex-col px-20 py-56" ref={ref as React.RefObject<HTMLDivElement>}>
      <header className="sm:px-none flex flex-col items-center gap-24 sm:flex-row">
        <img className="size-140 rounded-full" src="/foto/foto-pecege.jpeg" alt="" />
        <div className="flex flex-col text-center sm:text-left">
          <Heading className="text-40 font-bold lg:text-48 lg:text-nowrap">{profile.name}</Heading>
          <Paragraph className="font-sans text-28">{profile.role}</Paragraph>
        </div>
      </header>

      <main className="mt-48 flex flex-col justify-between gap-2 sm:mt-28 lg:flex-row">
        <aside className="flex flex-col gap-12 px-4 sm:flex-1/2 lg:pr-48">
          <section className="flex flex-col gap-12">
            <Heading className="text-24">Perfil</Heading>
            <Paragraph>{profile.description}</Paragraph>
          </section>

          <SectionExperience experiences={experiences} />
          <SectionEducation education={education} />
          <SectionCourse courses={courses} />
        </aside>

        <aside className="mt-24 flex flex-col gap-24 sm:flex-1/6 lg:mt-[0]">
          <SectionContact contact={contact} />
          <SectionSkills skills={skills} />
          <SectionTools tools={tools} />
          <SectionHoobies hoobies={hoobies} />
          <SectionLanguages languages={languages} />
          <SectionLinks links={links} />
        </aside>
      </main>
    </div>
  );
});

interface SectionLinksProps {
  links: TemplateBuilderData['links'];
}

const SectionLinks = ({ links }: SectionLinksProps) => (
  <section className="flex flex-col">
    <Heading className="mb-12 text-24">Links</Heading>
    <ul>
      {links.map(link => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  </section>
);

interface SectionLanguagesProps {
  languages: TemplateBuilderData['languages'];
}

const SectionLanguages = ({ languages }: SectionLanguagesProps) => (
  <section className="flex flex-col">
    <Heading className="mb-12 text-24">Idioma</Heading>
    <ul>
      {languages.map(language => (
        <li key={language}>{language}</li>
      ))}
    </ul>
  </section>
);

interface SectionHoobiesProps {
  hoobies: TemplateBuilderData['hoobies'];
}

const SectionHoobies = ({ hoobies }: SectionHoobiesProps) => (
  <section className="flex flex-col">
    <Heading className="mb-12 text-24">Hobbies</Heading>
    <ul>
      {hoobies.map(hoobie => (
        <li key={hoobie}>{hoobie}</li>
      ))}
    </ul>
  </section>
);

interface SectionToolsProps {
  tools: TemplateBuilderData['tools'];
}

const SectionTools = ({ tools }: SectionToolsProps) => (
  <section className="flex flex-col">
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

interface SectionSkillsProps {
  skills: TemplateBuilderData['skills'];
}

const SectionSkills = ({ skills }: SectionSkillsProps) => (
  <section className="flex flex-col">
    <Heading className="mb-12 text-24">Competências</Heading>
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </section>
);

interface SectionContactProps {
  contact: TemplateBuilderData['profile']['contact'];
}

const SectionContact = ({ contact }: SectionContactProps) => (
  <section className="flex flex-col">
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

TemplateBuilder.displayName = 'TemplateBuilder';

interface SectionExperienceProps {
  experiences: TemplateBuilderData['experiences'];
}

const SectionExperience = ({ experiences }: SectionExperienceProps) => (
  <section className="mt-12 flex flex-col gap-12">
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

interface SectionEducationProps {
  education: TemplateBuilderData['education'];
}

const SectionEducation = ({ education }: SectionEducationProps) => (
  <section className="mt-12 flex flex-col gap-12">
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

interface SectionCourseProps {
  courses: TemplateBuilderData['courses'];
}

const SectionCourse = ({ courses }: SectionCourseProps) => (
  <section className="mt-12 flex flex-col gap-12">
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
