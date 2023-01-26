import { useJudge } from '../useJudge'

const { isString } = useJudge()

interface UseStackGetStackInfoOptions {
  location: boolean
}

const handleStackInfo = (str: string, options: UseStackGetStackInfoOptions) => {
  return str.split('\n').map((line, i) => {
    const arr = line.split(' ')
    if (!i)
      return arr.slice(1).join(' ')

    let path = arr[arr.length - 1]

    if (path?.startsWith('('))
      path = path.slice(1, -1)

    if (!options.location)
      return path?.split(':').slice(0, -2).join('')

    return path
  })
}

export const useStack = () => {
  const getStackInfo = (name?: string, options: UseStackGetStackInfoOptions = { location: false }) => {
    let info

    try {
      throw new Error(isString(name) ? name : 'useStackInfo')
    }
    catch (e) {
      info = JSON.parse(JSON.stringify(e, ['stack']))
    }

    return handleStackInfo(info.stack, options)
  }

  return { getStackInfo }
}
