declare class AntPathMatcher {
  constructor(pathSeparator?: string)
  match(pattern: string, path: string): boolean
  matchStart(pattern: string, path: string): boolean
  doMatch(pattern: string, path: string, fullMatch: boolean, uriTemplateVariables?: { [key: string]: string }): boolean
  extractPathWithinPattern(pattern: string, path: string): string
  extractUriTemplateVariables(pattern: string, path: string): { [key: string]: string }
  combine(pattern1: string, pattern2: string): string
  setPathSeparator(pathSeparator: string): void
  setCaseSensitive(caseSensitive: boolean): void
  setTrimTokens(trimTokens: boolean): void
  setCachePatterns(cachePatterns: boolean): void
  isPattern(path: string): boolean
  isWildcardChar(candidate: string): boolean
  tokenizePattern(pattern: string): string[] | null
  tokenizePath(path: string): string[] | null
}

export default AntPathMatcher
