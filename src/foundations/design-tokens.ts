const colorPalette = {
  green: {
    100: '#f1f8f2',    // #51B848 기준 매우 밝은 버전 (채도 낮음, 명도 높음)
    200: '#e3f1e6',    // 매우 밝은 초록
    300: '#c6e3ca',    // 밝은 초록  
    400: '#8cd494',    // 연한 초록
    500: '#51B848',    // 기존 default 값 (기준 색상)
    600: '#469d3f',    // 조금 더 진한 초록
    700: '#3b8536',    // 어두운 초록
    800: '#306d2c',    // 더 어두운 초록
    900: '#255622',    // 매우 어두운 초록
    1000: '#1a3e19',   // 가장 어두운 초록
  },
  blue: {
    100: '#eff6ff',    // #2563eb 기준 매우 밝은 버전 (채도 낮음, 명도 높음)
    200: '#dbeafe',    // 매우 밝은 파랑
    300: '#93c5fd',    // 밝은 파랑
    400: '#60a5fa',    // 연한 파랑
    500: '#2563eb',    // 기준 색상 (진한 파랑)
    600: '#1d4ed8',    // 조금 더 진한 파랑
    700: '#1e40af',    // 어두운 파랑
    800: '#1e3a8a',    // 더 어두운 파랑
    900: '#1e3170',    // 매우 어두운 파랑
    1000: '#172554',   // 가장 어두운 파랑
  },
  red: {
    100: '#fef2f2',    // #E03A3A 기준 매우 밝은 버전 (채도 낮음, 명도 높음)
    200: '#fde8e8',    // 매우 밝은 빨강
    300: '#fbb4b4',    // 밝은 빨강
    400: '#f87171',    // 연한 빨강
    500: '#E03A3A',    // 기존 default 값 (기준 색상)
    600: '#dc2626',    // 조금 더 진한 빨강
    700: '#b91c1c',    // 어두운 빨강
    800: '#991b1b',    // 더 어두운 빨강
    900: '#7f1d1d',    // 매우 어두운 빨강
    1000: '#5b1313',   // 가장 어두운 빨강
  },
  yellow: {
    100: '#fefdf7',    // hsl(57, 30%, 98%) - 채도 낮춤, 명도 높임
    200: '#fefbec',    // hsl(57, 50%, 95%) - 채도 낮춤, 명도 높임  
    300: '#fef6d3',    // hsl(57, 70%, 90%) - 채도 낮춤, 명도 높임
    400: '#fef0b3',    // hsl(57, 85%, 85%) - 채도 낮춤, 명도 높임
    500: '#FFEB00',    // hsl(57, 100%, 50%) - 기준 색상
    600: '#e6d400',    // hsl(57, 100%, 45%) - 같은 채도, 명도만 낮춤
    700: '#ccbe00',    // hsl(57, 100%, 40%) - 같은 채도, 명도만 낮춤  
    800: '#b3a700',    // hsl(57, 100%, 35%) - 같은 채도, 명도만 낮춤
    900: '#999100',    // hsl(57, 100%, 30%) - 같은 채도, 명도만 낮춤
    1000: '#807a00',   // hsl(57, 100%, 25%) - 같은 채도, 명도만 낮춤
  },
  gray: {
    100: '#F9FAF9',    // 기존 값 (가장 밝은 회색)
    200: '#f1f3f1',    // 매우 밝은 회색
    300: '#e8eae8',    // 밝은 회색
    400: '#d4d7d4',    // 연한 회색
    500: '#b8bdb8',    // 중간 회색
    600: '#5A5D5D',    // 기존 값
    700: '#484c48',    // 조금 더 어두운 회색
    800: '#2F2F2F',    // 기존 값 (어두운 회색)
    900: '#232323',    // 더 어두운 회색
    1000: '#171717',   // 가장 어두운 회색
  },
  static: {
    black: '#000000',
    white: '#FFFFFF',
  },
} as const;

const semanticColors = {
  primary: colorPalette.green[500],   
  secondary: colorPalette.gray[500],  
  success: colorPalette.blue[500],    
  warning: colorPalette.yellow[500],  
  error: colorPalette.red[500],       

  background: colorPalette.gray[100], 
  border: colorPalette.gray[1000],
  text: {
    primary: colorPalette.static.black,
    secondary: colorPalette.gray[800],
    disabled: colorPalette.gray[400],
    black: colorPalette.static.black,
    white: colorPalette.static.white,
  },
} as const;

export default {
  palette : colorPalette,
  semantic: semanticColors,
}