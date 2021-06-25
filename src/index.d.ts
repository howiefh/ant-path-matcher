declare class AntPathMatcher {
  constructor(pathSeparator?: string)
  match(pattern: string, path: string): boolean
  matchStart(pattern: string, path: string): boolean
  doMatch(pattern: string, path: string, fullMatch: boolean, uriTemplateVariables?: { [key: string]: string }): boolean
  matchStrings(pattern: string, str: string, uriTemplateVariables?: { [key: string]: string }): boolean
  extractPathWithinPattern(pattern: string, path: string): string
  extractUriTemplateVariables(pattern: string, path: string): { [key: string]: string }
  combine(pattern1: string, pattern2: string): string
  concat(path1: string, path2: string): string
  setPathSeparator(pathSeparator: string): void
  setCaseSensitive(caseSensitive: boolean): void
  setTrimTokens(trimTokens: boolean): void
  setCachePatterns(cachePatterns: boolean): void
  deactivatePatternCache(): void
  isPattern(path: string): boolean
  isPotentialMatch(path: string, pattDirs: string[]): boolean
  skipSegment(path: string, pos: number, prefix: string): number
  skipSeparator(path: string, pos: number, separator: string): number
  isWildcardChar(candidate: string): boolean
  tokenizePattern(pattern: string): string[] | null
  tokenizePath(path: string): string[] | null
}

export default AntPathMatcher