import { ReactNode } from "react";

export interface ColorSwatch {
  color: string;
  name: string;
  description?: string;
  cssVar?: string;
  tailwindClass?: string;
}

export interface SingleColorStoryDefinition {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'single-color';
  colors: ColorSwatch[];
}

export interface ComprehensiveColorStoryDefinition {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'comprehensive-color';
  render: () => ReactNode;
  code: string;
}

export type ColorStoryDefinition = SingleColorStoryDefinition | ComprehensiveColorStoryDefinition;