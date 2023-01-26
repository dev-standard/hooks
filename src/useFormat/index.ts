import consola from 'consola'
import { useJudge } from '../useJudge'

const { isString } = useJudge()

export const useFormat = () => {
  const trimAll = (str: string) => {
    if (!isString(str)) {
      consola.warn(`the input val ${str} isn't a string`)
      return ''
    }

    return str.replaceAll(/\s/g, '')
  }
  return { trimAll }
}
