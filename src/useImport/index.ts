import { resolve } from 'path'
import { readFileSync } from 'fs-extra'
import type { JFReadOptions } from 'jsonfile'
import { useJudge } from '../useJudge'

export const useImport = () => {
  const { isAbsolutePath } = useJudge()
  const importJson = (path: string, options: JFReadOptions = undefined) => {
    path = isAbsolutePath(path) ? path : resolve(__dirname, path)
    // @ts-expect-error options type
    return readFileSync(path, options)
  }

  return { importJson }
}
