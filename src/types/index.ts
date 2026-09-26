export interface CourseTrack {
  id: 'reactjs' | 'springboot';
  title: string;
  subtitle: string;
  badge: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: 'cyan' | 'emerald';
  primaryUrl: string;
  githubUrl: string;
  stats: {
    modules: number;
    lessons: number;
    interactiveSandboxes: number;
    durationEstimate: string;
    level: string;
  };
  highlights: string[];
  techStack: string[];
  curriculum: {
    category: string;
    items: string[];
  }[];
  codePreview: {
    fileName: string;
    language: string;
    code: string;
    outputTitle: string;
    outputContent: string;
  };
}

export interface SearchTopic {
  id: string;
  title: string;
  category: string;
  track: 'reactjs' | 'springboot';
  trackTitle: string;
  url: string;
  description: string;
}

export interface LabTask {
  id: string;
  title: string;
  track: 'reactjs' | 'springboot';
  difficulty: 'Core' | 'Advanced' | 'Enterprise';
  chaptersCovered: string;
  scenario: string;
  appGoal: string;
  requirements: string[];
  starterSnippet: {
    fileName: string;
    language: string;
    code: string;
  };
  solutionBlueprint: {
    explanation: string;
    code: string;
  };
  docUrl: string;
}
