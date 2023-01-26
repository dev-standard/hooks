import { dirname, resolve } from 'path'
import { readFileSync } from 'fs'
import { useJudge } from '../useJudge'
import { useStack } from '../useStack'

const { isAbsolutePath } = useJudge()
const { getStackInfo } = useStack()

export const useImport = () => {
  const importJson = (path: string, options?: { encoding: 'utf-8' }) => {
    path = isAbsolutePath(path) ? path : resolve(dirname(getStackInfo()[3] as string), path)
    return JSON.parse(readFileSync(path, options) as string)
  }

  return { importJson }
}
