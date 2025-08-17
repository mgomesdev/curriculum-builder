import React, { forwardRef } from 'react';
import type { InitialTemplateData } from './initial-template-data';
import { Heading } from '../../../components/heading';
import { Paragraph } from '../../../components/paragraph';

interface InitialTemplateProps {
  initialData: InitialTemplateData;
}

export const InitialTemplate = forwardRef<object, InitialTemplateProps>(({ initialData }, ref) => {
  const { experiences, education, courses, profile } = initialData;
  const { contact } = profile;

  return (
    <div className="container mx-auto flex flex-col py-56" ref={ref as React.RefObject<HTMLDivElement>}>
      <header className="flex items-center gap-24">
        <img className="size-140 rounded-full" src="/foto/foto-pecege.jpeg" alt="" />
        <div className="flex flex-col">
          <Heading className="text-56 font-bold">{profile.name}</Heading>
          <Paragraph className="font-sans text-28">{profile.role}</Paragraph>
        </div>
      </header>

      <main className="mt-24 flex justify-between gap-2">
        <aside className="flex flex-1/2 flex-col gap-12 px-4">
          <section className="flex flex-col gap-12">
            <Heading className="text-24">Perfil</Heading>
            <Paragraph>{profile.description}</Paragraph>
          </section>
          <SectionExperience experiences={experiences} />
          <SectionEducation education={education} />
          <SectionCourse courses={courses} />
        </aside>

        <aside className="mt-24 flex-1/2">
          <section className="flex flex-col pl-56">
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
              <li>Nacionalidade: {contact.nationality}</li>
              <li>Naturalidade: {contact.birthplace}</li>
              <li>Habilitação: {contact.drivingLicense}</li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
});

InitialTemplate.displayName = 'InitialTemplate';

interface SectionExperienceProps {
  experiences: InitialTemplateData['experiences'];
}

const SectionExperience = ({ experiences }: SectionExperienceProps) => {
  return (
    <section className="mt-12 flex flex-col gap-12">
      <Heading className="text-24">Experiência Profissional</Heading>
      {experiences.map(exp => (
        <React.Fragment key={exp.title}>
          <div>
            <strong>
              {`${exp.title} - ${exp.location} - `}
              <span className="mr-4">{exp.duration},</span>
            </strong>
            <Paragraph className="text-14 italic">{`${exp.company} - (${exp.mode})`}</Paragraph>
          </div>

          <ul className="list-disc pl-24">
            {exp.responsibilities.map(resp => (
              <li key={resp}>{resp}</li>
            ))}
          </ul>

          <p className="mt-12">
            <span className="mr-2">
              <strong>Competências:</strong>
            </span>

            {exp.skills.map(skill => (
              <span className="mr-4" key={skill}>
                {skill},
              </span>
            ))}
          </p>
        </React.Fragment>
      ))}
    </section>
  );
};

interface SectionEducationProps {
  education: InitialTemplateData['education'];
}

const SectionEducation = ({ education }: SectionEducationProps) => {
  return (
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
};

interface SectionCourseProps {
  courses: InitialTemplateData['courses'];
}

const SectionCourse = ({ courses }: SectionCourseProps) => {
  return (
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
};
