/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function lint(
  fileName: string,
  sourceCode: string | Buffer,
  allRules?: boolean | undefined | null,
  excludeRules?: Array<string> | undefined | null,
  includeRules?: Array<string> | undefined | null,
): Array<string>
export function denolint(
  dirname: string,
  configPath: string,
  scanDirs?: Array<string> | undefined | null
): boolean
