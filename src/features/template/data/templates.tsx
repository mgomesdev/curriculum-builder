import type { Template } from '@/features/template/dto/template-dto';

export const initial_template: Template[] = [
  {
    id: 'template-01',
    name: 'Currículo Executivo Premium',
    sections: [
      // ===== CABEÇALHO PROFISSIONAL =====
      {
        id: 'section-header',
        name: 'Cabeçalho Profissional',
        type: 'header',
        props: {
          className:
            'relative bg-gradient-primary text-primary-foreground p-12 rounded-b-[2rem] shadow-elegant overflow-hidden',
        },
        elements: [
          // Decoração de fundo
          {
            id: 'bg-decoration',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-32 translate-x-32 blur-3xl',
              onClickAction: '',
            },
          },
          {
            id: 'bg-decoration-2',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute bottom-0 left-0 w-64 h-64 bg-primary-glow/20 rounded-full translate-y-20 -translate-x-20 blur-2xl',
              onClickAction: '',
            },
          },
          // Container principal
          {
            id: 'header-content',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto',
              onClickAction: '',
            },
          },
          // Área da foto
          {
            id: 'photo-container',
            type: 'div',
            props: {
              children: '',
              className: 'relative group',
              onClickAction: '',
            },
          },
          {
            id: 'photo-frame',
            type: 'div',
            props: {
              children: '',
              className:
                'w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30 shadow-2xl flex items-center justify-center overflow-hidden group-hover:border-white/50 transition-all duration-500 group-hover:scale-105',
              onClickAction: '',
            },
            subElement: {
              id: 'photo-frame-img',
              type: 'img',
              props: {
                children: '',
                className:
                  'w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30 shadow-2xl flex items-center justify-center overflow-hidden group-hover:border-white/50 transition-all duration-500 group-hover:scale-105',
                onClickAction: '',
                src: '/foto/foto-pecege.jpeg',
              },
            },
          },
          {
            id: 'photo-placeholder',
            type: 'div',
            props: {
              children: '📸',
              className: 'text-6xl opacity-70 group-hover:opacity-90 transition-opacity',
              onClickAction: 'upload-photo',
            },
          },
          {
            id: 'photo-ring',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute inset-0 rounded-full bg-gradient-to-tr from-primary-glow/30 to-white/20 blur-sm group-hover:blur-none transition-all duration-500',
              onClickAction: '',
              src: '/foto/foto-pecege.jpeg',
              width: '50',
              height: '50',
            },
          },
          // Informações principais
          {
            id: 'main-info',
            type: 'div',
            props: {
              children: '',
              className: 'flex-1 text-center lg:text-left space-y-4',
              onClickAction: '',
            },
            subElement: {
              id: 'name',
              type: 'h1',
              props: {
                children: 'Matheus Gomes Rodrigues de Jesus',
                className:
                  'text-4xl lg:text-6xl font-bold tracking-tight drop-shadow-lg bg-clip-text bg-gradient-to-r from-white to-primary-glow/90',
                onClickAction: '',
              },
            },
          },

          {
            id: 'role',
            type: 'h2',
            props: {
              children: 'Desenvolvedor Frontend Sênior & Especialista em React',
              className: 'text-lg lg:text-2xl font-medium text-white/90 leading-relaxed',
              onClickAction: '',
            },
          },
          {
            id: 'tagline',
            type: 'p',
            props: {
              children: '5+ anos transformando ideias em experiências digitais excepcionais',
              className: 'text-base lg:text-lg text-white/75 font-light italic',
              onClickAction: '',
            },
          },
          // Botões de ação
          {
            id: 'action-buttons',
            type: 'div',
            props: {
              children: '',
              className: 'flex flex-wrap gap-4 justify-center lg:justify-start mt-6',
              onClickAction: '',
            },
          },
          {
            id: 'btn-download',
            type: 'button',
            props: {
              children: '📥 Download CV',
              className:
                'bg-white text-primary px-8 py-4 rounded-2xl shadow-hover hover:shadow-elegant hover:scale-105 transition-all duration-300 font-bold text-lg border-2 border-white/20 backdrop-blur-sm hover:bg-white/95',
              onClickAction: 'save',
            },
          },
          {
            id: 'btn-contact',
            type: 'button',
            props: {
              children: '💬 Contato',
              className:
                'bg-white/10 text-white px-8 py-4 rounded-2xl shadow-card hover:shadow-hover hover:scale-105 transition-all duration-300 font-semibold text-lg border-2 border-white/30 backdrop-blur-sm hover:bg-white/20',
              onClickAction: 'contact',
            },
          },
        ],
      },

      // ===== PERFIL PROFISSIONAL =====
      {
        id: 'section-about',
        name: 'Perfil Profissional',
        type: 'section',
        props: {
          className: 'relative p-12 bg-gradient-card text-card-foreground overflow-hidden',
        },
        elements: [
          // Decoração lateral
          {
            id: 'about-decoration',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary to-primary-glow rounded-r-full shadow-lg',
              onClickAction: '',
            },
          },
          {
            id: 'about-bg-pattern',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-20 translate-x-20 blur-3xl',
              onClickAction: '',
            },
          },
          // Conteúdo
          {
            id: 'about-header',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 mb-8',
              onClickAction: '',
            },
          },
          {
            id: 'about-title',
            type: 'h3',
            props: {
              children: '👨‍💻 Perfil Profissional',
              className: 'text-3xl font-bold text-primary flex items-center gap-4 mb-3',
              onClickAction: '',
            },
          },
          {
            id: 'about-subtitle',
            type: 'p',
            props: {
              children: 'Especialista em desenvolvimento frontend com foco em performance e usabilidade',
              className: 'text-lg text-muted-foreground font-medium',
              onClickAction: '',
            },
          },
          // Cards de destaque
          {
            id: 'about-highlights',
            type: 'div',
            props: {
              children: '',
              className: 'grid md:grid-cols-3 gap-6 mb-8',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-1',
            type: 'div',
            props: {
              children: '',
              className:
                'bg-primary/10 border border-primary/20 rounded-xl p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-1-icon',
            type: 'div',
            props: {
              children: '🎯',
              className: 'text-4xl mb-3',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-1-title',
            type: 'h4',
            props: {
              children: '5+ Anos',
              className: 'text-2xl font-bold text-primary mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-1-desc',
            type: 'p',
            props: {
              children: 'Experiência sólida',
              className: 'text-sm text-muted-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-2',
            type: 'div',
            props: {
              children: '',
              className:
                'bg-primary/10 border border-primary/20 rounded-xl p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-2-icon',
            type: 'div',
            props: {
              children: '🚀',
              className: 'text-4xl mb-3',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-2-title',
            type: 'h4',
            props: {
              children: '20+ Projetos',
              className: 'text-2xl font-bold text-primary mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-2-desc',
            type: 'p',
            props: {
              children: 'Entregues com sucesso',
              className: 'text-sm text-muted-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-3',
            type: 'div',
            props: {
              children: '',
              className:
                'bg-primary/10 border border-primary/20 rounded-xl p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-3-icon',
            type: 'div',
            props: {
              children: '⭐',
              className: 'text-4xl mb-3',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-3-title',
            type: 'h4',
            props: {
              children: '98% Satisfação',
              className: 'text-2xl font-bold text-primary mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'highlight-3-desc',
            type: 'p',
            props: {
              children: 'Dos clientes',
              className: 'text-sm text-muted-foreground',
              onClickAction: '',
            },
          },
          // Texto principal
          {
            id: 'about-text',
            type: 'p',
            props: {
              children:
                'Desenvolvedor frontend especializado em React e TypeScript, com paixão por criar experiências digitais excepcionais. Combino expertise técnica sólida com visão estratégica de produto, sempre focando em performance, acessibilidade e experiência do usuário. Tenho histórico comprovado de liderança técnica, mentoria de equipes e entrega de soluções escaláveis que impactam milhares de usuários.',
              className:
                'text-lg leading-9 text-foreground relative z-10 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-card',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== STACK TECNOLÓGICO =====
      {
        id: 'section-skills',
        name: 'Stack Tecnológico',
        type: 'section',
        props: {
          className: 'relative p-12 bg-card text-card-foreground overflow-hidden',
        },
        elements: [
          // Decoração de fundo
          {
            id: 'skills-bg-decoration',
            type: 'div',
            props: {
              children: '',
              className: 'absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent',
              onClickAction: '',
            },
          },
          {
            id: 'skills-pattern',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-y-32 translate-x-32 blur-3xl',
              onClickAction: '',
            },
          },
          // Header da seção
          {
            id: 'skills-header',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 text-center mb-12',
              onClickAction: '',
            },
          },
          {
            id: 'skills-title',
            type: 'h3',
            props: {
              children: '🚀 Stack Tecnológico',
              className: 'text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-4',
              onClickAction: '',
            },
          },
          {
            id: 'skills-subtitle',
            type: 'p',
            props: {
              children: 'Tecnologias que domino para criar soluções de alta performance',
              className: 'text-xl text-muted-foreground font-light',
              onClickAction: '',
            },
          },
          // Categorias de skills
          {
            id: 'skills-categories',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 space-y-10',
              onClickAction: '',
            },
          },
          // Frontend Skills
          {
            id: 'frontend-category',
            type: 'div',
            props: {
              children: '',
              className: 'bg-gradient-card p-8 rounded-2xl shadow-card border border-border/30',
              onClickAction: '',
            },
          },
          {
            id: 'frontend-title',
            type: 'h4',
            props: {
              children: '💻 Frontend Development',
              className: 'text-2xl font-bold text-primary mb-6 flex items-center gap-3',
              onClickAction: '',
            },
          },
          {
            id: 'frontend-skills',
            type: 'div',
            props: {
              children: '',
              className: 'grid grid-cols-2 md:grid-cols-4 gap-4',
              onClickAction: '',
            },
          },
          {
            id: 'skill-1',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-xl p-6 text-center hover:border-primary hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1',
              onClickAction: '',
            },
          },
          {
            id: 'skill-1-icon',
            type: 'div',
            props: {
              children: '⚛️',
              className: 'text-4xl mb-3 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'skill-1-name',
            type: 'h5',
            props: {
              children: 'React',
              className: 'font-bold text-primary mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-1-level',
            type: 'div',
            props: {
              children: '',
              className: 'w-full bg-muted rounded-full h-2 mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-1-bar',
            type: 'div',
            props: {
              children: '',
              className: 'bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full w-11/12 shadow-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-1-percent',
            type: 'p',
            props: {
              children: '95%',
              className: 'text-xs text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'skill-2',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-xl p-6 text-center hover:border-primary hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1',
              onClickAction: '',
            },
          },
          {
            id: 'skill-2-icon',
            type: 'div',
            props: {
              children: '📘',
              className: 'text-4xl mb-3 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'skill-2-name',
            type: 'h5',
            props: {
              children: 'TypeScript',
              className: 'font-bold text-primary mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-2-level',
            type: 'div',
            props: {
              children: '',
              className: 'w-full bg-muted rounded-full h-2 mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-2-bar',
            type: 'div',
            props: {
              children: '',
              className: 'bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full w-5/6 shadow-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-2-percent',
            type: 'p',
            props: {
              children: '90%',
              className: 'text-xs text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'skill-3',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-xl p-6 text-center hover:border-primary hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1',
              onClickAction: '',
            },
          },
          {
            id: 'skill-3-icon',
            type: 'div',
            props: {
              children: '🎨',
              className: 'text-4xl mb-3 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'skill-3-name',
            type: 'h5',
            props: {
              children: 'CSS/SCSS',
              className: 'font-bold text-primary mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-3-level',
            type: 'div',
            props: {
              children: '',
              className: 'w-full bg-muted rounded-full h-2 mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-3-bar',
            type: 'div',
            props: {
              children: '',
              className: 'bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full w-11/12 shadow-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-3-percent',
            type: 'p',
            props: {
              children: '95%',
              className: 'text-xs text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'skill-4',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-xl p-6 text-center hover:border-primary hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-1',
              onClickAction: '',
            },
          },
          {
            id: 'skill-4-icon',
            type: 'div',
            props: {
              children: '🌊',
              className: 'text-4xl mb-3 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'skill-4-name',
            type: 'h5',
            props: {
              children: 'Tailwind',
              className: 'font-bold text-primary mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-4-level',
            type: 'div',
            props: {
              children: '',
              className: 'w-full bg-muted rounded-full h-2 mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'skill-4-bar',
            type: 'div',
            props: {
              children: '',
              className: 'bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full w-4/5 shadow-sm',
              onClickAction: '',
            },
          },
          {
            id: 'skill-4-percent',
            type: 'p',
            props: {
              children: '85%',
              className: 'text-xs text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          // Tools & DevOps
          {
            id: 'tools-category',
            type: 'div',
            props: {
              children: '',
              className: 'bg-gradient-card p-8 rounded-2xl shadow-card border border-border/30',
              onClickAction: '',
            },
          },
          {
            id: 'tools-title',
            type: 'h4',
            props: {
              children: '🛠️ Ferramentas & DevOps',
              className: 'text-2xl font-bold text-primary mb-6 flex items-center gap-3',
              onClickAction: '',
            },
          },
          {
            id: 'tools-grid',
            type: 'div',
            props: {
              children: '',
              className: 'flex flex-wrap gap-3',
              onClickAction: '',
            },
          },
          {
            id: 'tool-1',
            type: 'div',
            props: {
              children: '📂 Git/GitHub',
              className:
                'bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200',
              onClickAction: '',
            },
          },
          {
            id: 'tool-2',
            type: 'div',
            props: {
              children: '🧪 Jest/Testing',
              className:
                'bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200',
              onClickAction: '',
            },
          },
          {
            id: 'tool-3',
            type: 'div',
            props: {
              children: '🔗 REST APIs',
              className:
                'bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200',
              onClickAction: '',
            },
          },
          {
            id: 'tool-4',
            type: 'div',
            props: {
              children: '📊 GraphQL',
              className:
                'bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200',
              onClickAction: '',
            },
          },
          {
            id: 'tool-5',
            type: 'div',
            props: {
              children: '⚡ Vite/Webpack',
              className:
                'bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200',
              onClickAction: '',
            },
          },
          {
            id: 'tool-6',
            type: 'div',
            props: {
              children: '🚀 Vercel/Netlify',
              className:
                'bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== TRAJETÓRIA PROFISSIONAL =====
      {
        id: 'section-experience',
        name: 'Trajetória Profissional',
        type: 'section',
        props: {
          className: 'relative p-12 bg-gradient-card text-card-foreground overflow-hidden',
        },
        elements: [
          // Decoração de fundo
          {
            id: 'exp-bg-decoration',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-primary via-primary-glow to-primary shadow-lg',
              onClickAction: '',
            },
          },
          {
            id: 'exp-pattern',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-20 -translate-x-20 blur-3xl',
              onClickAction: '',
            },
          },
          // Header da seção
          {
            id: 'exp-header',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 text-center mb-12',
              onClickAction: '',
            },
          },
          {
            id: 'experience-title',
            type: 'h3',
            props: {
              children: '💼 Trajetória Profissional',
              className: 'text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-4',
              onClickAction: '',
            },
          },
          {
            id: 'exp-subtitle',
            type: 'p',
            props: {
              children: 'Jornada de crescimento e conquistas na área de tecnologia',
              className: 'text-xl text-muted-foreground font-light',
              onClickAction: '',
            },
          },
          // Timeline container
          {
            id: 'timeline-container',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 space-y-12',
              onClickAction: '',
            },
          },
          // Timeline line
          {
            id: 'timeline-line',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary-glow hidden md:block',
              onClickAction: '',
            },
          },
          // Experience 1 - Current
          {
            id: 'exp-1-wrapper',
            type: 'div',
            props: {
              children: '',
              className: 'relative md:pl-20',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-marker',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute left-6 top-8 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg hidden md:block',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-container',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-3xl p-8 shadow-card hover:shadow-elegant hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-badge',
            type: 'div',
            props: {
              children: 'ATUAL',
              className:
                'inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold mb-4 animate-pulse',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-header',
            type: 'div',
            props: {
              children: '',
              className: 'flex flex-col md:flex-row md:items-center md:justify-between mb-6',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-title',
            type: 'h4',
            props: {
              children: 'Tech Lead Frontend',
              className: 'text-2xl font-bold text-primary mb-2 md:mb-0 group-hover:text-primary-glow transition-colors',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-period',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-2 text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-duration',
            type: 'span',
            props: {
              children: '⏱️ 2 anos',
              className: 'bg-primary/10 px-3 py-1 rounded-full text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-dates',
            type: 'span',
            props: {
              children: '2022 - Presente',
              className: 'text-lg',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-company',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-3 mb-6',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-company-icon',
            type: 'div',
            props: {
              children: '🏢',
              className: 'text-3xl',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-company-info',
            type: 'div',
            props: {
              children: '',
              className: '',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-company-name',
            type: 'h5',
            props: {
              children: 'TechCorp Solutions',
              className: 'text-xl font-bold text-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-company-desc',
            type: 'p',
            props: {
              children: 'Fintech • 500+ funcionários • São Paulo/SP',
              className: 'text-muted-foreground',
              onClickAction: '',
            },
          },
          // Achievements
          {
            id: 'exp-1-achievements',
            type: 'div',
            props: {
              children: '',
              className: 'grid md:grid-cols-3 gap-4 mb-6',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-achievement-1',
            type: 'div',
            props: {
              children: '',
              className: 'text-center p-4 bg-primary/5 rounded-xl border border-primary/10',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-ach-1-number',
            type: 'div',
            props: {
              children: '40%',
              className: 'text-3xl font-bold text-primary mb-1',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-ach-1-desc',
            type: 'p',
            props: {
              children: 'Melhoria na performance',
              className: 'text-sm text-muted-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-achievement-2',
            type: 'div',
            props: {
              children: '',
              className: 'text-center p-4 bg-primary/5 rounded-xl border border-primary/10',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-ach-2-number',
            type: 'div',
            props: {
              children: '15+',
              className: 'text-3xl font-bold text-primary mb-1',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-ach-2-desc',
            type: 'p',
            props: {
              children: 'Projetos liderados',
              className: 'text-sm text-muted-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-achievement-3',
            type: 'div',
            props: {
              children: '',
              className: 'text-center p-4 bg-primary/5 rounded-xl border border-primary/10',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-ach-3-number',
            type: 'div',
            props: {
              children: '8',
              className: 'text-3xl font-bold text-primary mb-1',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-ach-3-desc',
            type: 'p',
            props: {
              children: 'Devs mentoreados',
              className: 'text-sm text-muted-foreground',
              onClickAction: '',
            },
          },
          // Responsibilities
          {
            id: 'exp-1-responsibilities',
            type: 'div',
            props: {
              children: '',
              className: 'space-y-3',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-title',
            type: 'h6',
            props: {
              children: '🎯 Principais Responsabilidades:',
              className: 'font-bold text-foreground mb-4 flex items-center gap-2',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-1',
            type: 'div',
            props: {
              children: '',
              className:
                'flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg hover:from-primary/10 transition-colors',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-1-icon',
            type: 'span',
            props: {
              children: '🚀',
              className: 'text-lg mt-0.5',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-1-text',
            type: 'p',
            props: {
              children:
                'Arquitetura e desenvolvimento de aplicações React complexas com TypeScript, alcançando 99.9% de uptime',
              className: 'text-base text-foreground leading-relaxed',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-2',
            type: 'div',
            props: {
              children: '',
              className:
                'flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg hover:from-primary/10 transition-colors',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-2-icon',
            type: 'span',
            props: {
              children: '👥',
              className: 'text-lg mt-0.5',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-2-text',
            type: 'p',
            props: {
              children: 'Liderança técnica de equipe de 8 desenvolvedores, implementando práticas ágeis e code review',
              className: 'text-base text-foreground leading-relaxed',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-3',
            type: 'div',
            props: {
              children: '',
              className:
                'flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg hover:from-primary/10 transition-colors',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-3-icon',
            type: 'span',
            props: {
              children: '⚡',
              className: 'text-lg mt-0.5',
              onClickAction: '',
            },
          },
          {
            id: 'exp-1-resp-3-text',
            type: 'p',
            props: {
              children: 'Otimização de performance que resultou em 40% de melhoria no tempo de carregamento',
              className: 'text-base text-foreground leading-relaxed',
              onClickAction: '',
            },
          },
          // Experience 2 - Previous
          {
            id: 'exp-2-wrapper',
            type: 'div',
            props: {
              children: '',
              className: 'relative md:pl-20',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-marker',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute left-6 top-8 w-6 h-6 bg-primary-glow rounded-full border-4 border-white shadow-lg hidden md:block',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-container',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-3xl p-8 shadow-card hover:shadow-elegant hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-header',
            type: 'div',
            props: {
              children: '',
              className: 'flex flex-col md:flex-row md:items-center md:justify-between mb-6',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-title',
            type: 'h4',
            props: {
              children: 'Desenvolvedor Frontend Pleno',
              className: 'text-2xl font-bold text-primary mb-2 md:mb-0 group-hover:text-primary-glow transition-colors',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-period',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-2 text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-duration',
            type: 'span',
            props: {
              children: '⏱️ 2 anos',
              className: 'bg-primary/10 px-3 py-1 rounded-full text-sm',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-dates',
            type: 'span',
            props: {
              children: '2020 - 2022',
              className: 'text-lg',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-company',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-3 mb-6',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-company-icon',
            type: 'div',
            props: {
              children: '🏪',
              className: 'text-3xl',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-company-info',
            type: 'div',
            props: {
              children: '',
              className: '',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-company-name',
            type: 'h5',
            props: {
              children: 'E-commerce Brasil',
              className: 'text-xl font-bold text-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-company-desc',
            type: 'p',
            props: {
              children: 'E-commerce • 200+ funcionários • Rio de Janeiro/RJ',
              className: 'text-muted-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'exp-2-desc',
            type: 'p',
            props: {
              children:
                'Desenvolvimento de plataforma e-commerce robusta, implementação de design system escalável e integração com múltiplas APIs de pagamento. Participação ativa em projetos que impactaram mais de 100.000 usuários mensais.',
              className:
                'text-base text-foreground leading-8 bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl border-l-4 border-primary/30',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== FORMAÇÃO & CERTIFICAÇÕES =====
      {
        id: 'section-education',
        name: 'Formação & Certificações',
        type: 'section',
        props: {
          className: 'relative p-12 bg-card text-card-foreground overflow-hidden',
        },
        elements: [
          // Decoração de fundo
          {
            id: 'edu-bg-decoration',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-primary to-primary-glow rounded-l-full shadow-lg',
              onClickAction: '',
            },
          },
          {
            id: 'edu-pattern',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full translate-y-20 -translate-x-20 blur-3xl',
              onClickAction: '',
            },
          },
          // Header da seção
          {
            id: 'edu-header',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 text-center mb-12',
              onClickAction: '',
            },
          },
          {
            id: 'education-title',
            type: 'h3',
            props: {
              children: '🎓 Formação & Certificações',
              className: 'text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-4',
              onClickAction: '',
            },
          },
          {
            id: 'edu-subtitle',
            type: 'p',
            props: {
              children: 'Base sólida em computação e aprendizado contínuo',
              className: 'text-xl text-muted-foreground font-light',
              onClickAction: '',
            },
          },
          // Educação Principal
          {
            id: 'main-education',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 mb-12',
              onClickAction: '',
            },
          },
          {
            id: 'edu-1-container',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-gradient-card border-2 border-primary/20 rounded-3xl p-8 shadow-card hover:shadow-elegant hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2',
              onClickAction: '',
            },
          },
          {
            id: 'edu-header-section',
            type: 'div',
            props: {
              children: '',
              className: 'flex flex-col md:flex-row md:items-start md:justify-between mb-6',
              onClickAction: '',
            },
          },
          {
            id: 'edu-main-info',
            type: 'div',
            props: {
              children: '',
              className: 'flex-1',
              onClickAction: '',
            },
          },
          {
            id: 'edu-1-degree',
            type: 'h4',
            props: {
              children: 'Bacharelado em Ciência da Computação',
              className: 'text-2xl font-bold text-primary mb-3 group-hover:text-primary-glow transition-colors',
              onClickAction: '',
            },
          },
          {
            id: 'edu-institution-info',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-3 mb-4',
              onClickAction: '',
            },
          },
          {
            id: 'edu-institution-icon',
            type: 'div',
            props: {
              children: '🏛️',
              className: 'text-3xl',
              onClickAction: '',
            },
          },
          {
            id: 'edu-institution-details',
            type: 'div',
            props: {
              children: '',
              className: '',
              onClickAction: '',
            },
          },
          {
            id: 'edu-1-institution',
            type: 'h5',
            props: {
              children: 'Universidade Federal de São Paulo (UNIFESP)',
              className: 'text-xl font-bold text-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'edu-period',
            type: 'p',
            props: {
              children: '2016 - 2020 • São Paulo/SP',
              className: 'text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'edu-gpa-badge',
            type: 'div',
            props: {
              children: '',
              className: 'md:self-start',
              onClickAction: '',
            },
          },
          {
            id: 'edu-gpa',
            type: 'div',
            props: {
              children: '',
              className: 'bg-primary/10 border border-primary/20 rounded-xl p-4 text-center',
              onClickAction: '',
            },
          },
          {
            id: 'edu-gpa-label',
            type: 'p',
            props: {
              children: 'CRA',
              className: 'text-sm text-muted-foreground mb-1',
              onClickAction: '',
            },
          },
          {
            id: 'edu-gpa-value',
            type: 'p',
            props: {
              children: '8.7/10',
              className: 'text-2xl font-bold text-primary',
              onClickAction: '',
            },
          },
          // Destaque e descrição
          {
            id: 'edu-highlights',
            type: 'div',
            props: {
              children: '',
              className: 'grid md:grid-cols-2 gap-6 mb-6',
              onClickAction: '',
            },
          },
          {
            id: 'edu-highlight-1',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10',
              onClickAction: '',
            },
          },
          {
            id: 'edu-highlight-1-icon',
            type: 'span',
            props: {
              children: '🏆',
              className: 'text-2xl',
              onClickAction: '',
            },
          },
          {
            id: 'edu-highlight-1-text',
            type: 'p',
            props: {
              children: 'Formado com Distinção',
              className: 'font-semibold text-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'edu-highlight-2',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10',
              onClickAction: '',
            },
          },
          {
            id: 'edu-highlight-2-icon',
            type: 'span',
            props: {
              children: '🔬',
              className: 'text-2xl',
              onClickAction: '',
            },
          },
          {
            id: 'edu-highlight-2-text',
            type: 'p',
            props: {
              children: 'Iniciação Científica',
              className: 'font-semibold text-foreground',
              onClickAction: '',
            },
          },
          {
            id: 'edu-1-desc',
            type: 'p',
            props: {
              children:
                'Formação sólida em algoritmos, estruturas de dados, engenharia de software e arquitetura de sistemas. Participação em projetos de pesquisa na área de interfaces humano-computador e desenvolvimento web. TCC focado em Progressive Web Applications e performance frontend.',
              className:
                'text-base text-foreground leading-8 bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl border-l-4 border-primary/30',
              onClickAction: '',
            },
          },
          // Certificações
          {
            id: 'certifications-section',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10',
              onClickAction: '',
            },
          },
          {
            id: 'cert-title',
            type: 'h4',
            props: {
              children: '📜 Certificações Profissionais',
              className: 'text-2xl font-bold text-primary mb-8 flex items-center gap-3',
              onClickAction: '',
            },
          },
          {
            id: 'certifications-grid',
            type: 'div',
            props: {
              children: '',
              className: 'grid md:grid-cols-2 gap-6',
              onClickAction: '',
            },
          },
          // Certificação 1
          {
            id: 'cert-1',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-2xl p-6 shadow-card hover:shadow-hover hover:border-primary/40 transition-all duration-300 hover:scale-105',
              onClickAction: '',
            },
          },
          {
            id: 'cert-1-header',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-4 mb-4',
              onClickAction: '',
            },
          },
          {
            id: 'cert-1-icon',
            type: 'div',
            props: {
              children: '⚛️',
              className: 'text-4xl group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'cert-1-info',
            type: 'div',
            props: {
              children: '',
              className: 'flex-1',
              onClickAction: '',
            },
          },
          {
            id: 'cert-1-name',
            type: 'h5',
            props: {
              children: 'React Advanced Patterns',
              className: 'text-lg font-bold text-primary mb-1',
              onClickAction: '',
            },
          },
          {
            id: 'cert-1-issuer',
            type: 'p',
            props: {
              children: 'Meta (Facebook) • 2023',
              className: 'text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'cert-1-badge',
            type: 'div',
            props: {
              children: 'VERIFIED',
              className: 'bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold',
              onClickAction: '',
            },
          },
          // Certificação 2
          {
            id: 'cert-2',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white border-2 border-primary/20 rounded-2xl p-6 shadow-card hover:shadow-hover hover:border-primary/40 transition-all duration-300 hover:scale-105',
              onClickAction: '',
            },
          },
          {
            id: 'cert-2-header',
            type: 'div',
            props: {
              children: '',
              className: 'flex items-center gap-4 mb-4',
              onClickAction: '',
            },
          },
          {
            id: 'cert-2-icon',
            type: 'div',
            props: {
              children: '☁️',
              className: 'text-4xl group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'cert-2-info',
            type: 'div',
            props: {
              children: '',
              className: 'flex-1',
              onClickAction: '',
            },
          },
          {
            id: 'cert-2-name',
            type: 'h5',
            props: {
              children: 'AWS Cloud Practitioner',
              className: 'text-lg font-bold text-primary mb-1',
              onClickAction: '',
            },
          },
          {
            id: 'cert-2-issuer',
            type: 'p',
            props: {
              children: 'Amazon Web Services • 2023',
              className: 'text-muted-foreground font-semibold',
              onClickAction: '',
            },
          },
          {
            id: 'cert-2-badge',
            type: 'div',
            props: {
              children: 'CERTIFIED',
              className: 'bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold',
              onClickAction: '',
            },
          },
        ],
      },

      // ===== CONECTE-SE COMIGO =====
      {
        id: 'section-contact',
        name: 'Conecte-se Comigo',
        type: 'section',
        props: {
          className:
            'relative bg-gradient-primary text-primary-foreground p-12 rounded-t-[2rem] shadow-elegant overflow-hidden',
        },
        elements: [
          // Decorações de fundo
          {
            id: 'contact-bg-decoration-1',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-y-32 -translate-x-32 blur-3xl',
              onClickAction: '',
            },
          },
          {
            id: 'contact-bg-decoration-2',
            type: 'div',
            props: {
              children: '',
              className:
                'absolute bottom-0 right-0 w-64 h-64 bg-primary-glow/20 rounded-full translate-y-20 translate-x-20 blur-2xl',
              onClickAction: '',
            },
          },
          // Header da seção
          {
            id: 'contact-header',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 text-center mb-12',
              onClickAction: '',
            },
          },
          {
            id: 'contact-title',
            type: 'h3',
            props: {
              children: '🤝 Vamos Construir Algo Incrível Juntos?',
              className: 'text-3xl lg:text-4xl font-bold mb-6 leading-tight',
              onClickAction: '',
            },
          },
          {
            id: 'contact-subtitle',
            type: 'p',
            props: {
              children: 'Estou sempre aberto para discutir novos projetos, oportunidades e colaborações',
              className: 'text-lg lg:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed',
              onClickAction: '',
            },
          },
          // Cards de contato
          {
            id: 'contact-cards',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12',
              onClickAction: '',
            },
          },
          // Email
          {
            id: 'contact-email-card',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl',
              onClickAction: 'mailto:matheus.gabriel@example.com',
            },
          },
          {
            id: 'email-icon',
            type: 'div',
            props: {
              children: '📧',
              className: 'text-5xl mb-4 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'email-label',
            type: 'h4',
            props: {
              children: 'Email',
              className: 'text-xl font-bold mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'email-value',
            type: 'p',
            props: {
              children: 'matheus.gabriel@example.com',
              className: 'text-white/80 group-hover:text-white transition-colors break-all',
              onClickAction: '',
            },
          },
          // WhatsApp
          {
            id: 'contact-phone-card',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl',
              onClickAction: 'tel:+5511999999999',
            },
          },
          {
            id: 'phone-icon',
            type: 'div',
            props: {
              children: '📱',
              className: 'text-5xl mb-4 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'phone-label',
            type: 'h4',
            props: {
              children: 'WhatsApp',
              className: 'text-xl font-bold mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'phone-value',
            type: 'p',
            props: {
              children: '+55 (11) 99999-9999',
              className: 'text-white/80 group-hover:text-white transition-colors',
              onClickAction: '',
            },
          },
          // LinkedIn
          {
            id: 'contact-linkedin-card',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl',
              onClickAction: 'https://linkedin.com/in/matheusgrodrigues',
            },
          },
          {
            id: 'linkedin-icon',
            type: 'div',
            props: {
              children: '💼',
              className: 'text-5xl mb-4 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'linkedin-label',
            type: 'h4',
            props: {
              children: 'LinkedIn',
              className: 'text-xl font-bold mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'linkedin-value',
            type: 'p',
            props: {
              children: '/in/matheusgrodrigues',
              className: 'text-white/80 group-hover:text-white transition-colors',
              onClickAction: '',
            },
          },
          // GitHub
          {
            id: 'contact-github-card',
            type: 'div',
            props: {
              children: '',
              className:
                'group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl',
              onClickAction: 'https://github.com/matheusgrodrigues',
            },
          },
          {
            id: 'github-icon',
            type: 'div',
            props: {
              children: '💻',
              className: 'text-5xl mb-4 group-hover:scale-110 transition-transform',
              onClickAction: '',
            },
          },
          {
            id: 'github-label',
            type: 'h4',
            props: {
              children: 'GitHub',
              className: 'text-xl font-bold mb-2',
              onClickAction: '',
            },
          },
          {
            id: 'github-value',
            type: 'p',
            props: {
              children: '@matheusgrodrigues',
              className: 'text-white/80 group-hover:text-white transition-colors',
              onClickAction: '',
            },
          },
          // CTA Final
          {
            id: 'contact-cta',
            type: 'div',
            props: {
              children: '',
              className: 'relative z-10 text-center',
              onClickAction: '',
            },
          },
          {
            id: 'cta-text',
            type: 'p',
            props: {
              children: '✨ Pronto para transformar suas ideias em realidade digital?',
              className: 'text-lg lg:text-xl font-semibold mb-6 text-white/95',
              onClickAction: '',
            },
          },
          {
            id: 'cta-buttons',
            type: 'div',
            props: {
              children: '',
              className: 'flex flex-wrap gap-4 justify-center',
              onClickAction: '',
            },
          },
          {
            id: 'cta-main-button',
            type: 'button',
            props: {
              children: '🚀 Vamos Conversar!',
              className:
                'bg-white text-primary px-8 py-4 rounded-2xl shadow-hover hover:shadow-elegant hover:scale-105 transition-all duration-300 font-bold text-lg border-2 border-white/20 hover:bg-white/95',
              onClickAction: 'mailto:matheus.gabriel@example.com',
            },
          },
          {
            id: 'cta-secondary-button',
            type: 'button',
            props: {
              children: '📋 Ver Portfólio',
              className:
                'bg-white/10 text-white px-8 py-4 rounded-2xl shadow-card hover:shadow-hover hover:scale-105 transition-all duration-300 font-semibold text-lg border-2 border-white/30 backdrop-blur-sm hover:bg-white/20',
              onClickAction: 'portfolio',
            },
          },
        ],
      },
    ],
  },
];
