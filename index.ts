// TypeScript type definitions for eZunder
export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  subscriptionTier: "free" | "professional" | "enterprise";
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  author?: string;
  description?: string;
  genre?: string;
  coverImage?: string;
  content?: string;
  contentAnalysis?: ContentAnalysis;
  aiRecommendations?: AIRecommendations;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  chapters?: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  content?: string;
  orderIndex: number;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentAnalysis {
  genre: {
    primaryGenre: string;
    subGenre?: string;
    confidence: number;
    themes: string[];
    mood: string;
    targetAudience: string;
  };
  style: {
    averageSentenceLength: number;
    vocabularyComplexity: string;
    toneAnalysis: string;
    readingLevel: string;
  };
  readability: {
    gradeLevel: number;
    readingEase: number;
    avgWordsPerSentence: number;
  };
  grammar: {
    overallScore: number;
    errors: GrammarError[];
  };
}

export interface GrammarError {
  type: "grammar" | "style" | "punctuation" | "spelling";
  text: string;
  suggestion: string;
  explanation?: string;
  position: {
    start: number;
    end: number;
  };
}

export interface AIRecommendations {
  typography: {
    heading: TypographySettings;
    body: TypographySettings;
    accent?: TypographySettings;
  };
  layout: {
    margins: string;
    spacing: string;
    alignment: string;
  };
  suggestions: string[];
}

export interface TypographySettings {
  font: string;
  size: string;
  weight?: string;
  lineHeight?: string;
  confidence?: number;
}

export interface FontRecommendation {
  heading: {
    family: string;
    weight: string;
    size: string;
    confidence: number;
  };
  body: {
    family: string;
    weight: string;
    size: string;
    lineHeight: string;
    confidence: number;
  };
  accent?: {
    family: string;
    usage: string;
    confidence: number;
  };
  pairingRationale: string;
}

export interface CoverDesign {
  imageUrl: string;
  style: {
    name: string;
    description: string;
  };
  designElements: {
    colorPalette: string[];
    typography: string;
  };
  confidence: number;
}

export interface ExportFormat {
  name: string;
  description: string;
  extension: string;
  supported: boolean;
  options?: Record<string, any>;
}

export interface AiAnalysis {
  id: string;
  projectId: string;
  analysisType: string;
  results: any;
  confidenceScore: number;
  createdAt: Date;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: "default" | "neon";
  disabled?: boolean;
}

export interface DashboardConfig {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
}

// Editor specific types
export interface EditorState {
  content: string;
  selection: {
    start: number;
    end: number;
  };
  focusMode: boolean;
  previewMode: "none" | "split" | "full";
  activePanel: "navigation" | "editor" | "properties";
}

export interface EditorTools {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  alignment: "left" | "center" | "right" | "justify";
  fontSize: number;
  fontFamily: string;
}

export interface ProjectStats {
  wordCount: number;
  characterCount: number;
  pageCount: number;
  readingTime: number;
  chaptersCount: number;
}
