import consola from 'consola'
import { useJudge } from '../useJudge'
import { useImport } from '../useImport'

const { isNumber } = useJudge()
const { importJson } = useImport()
// last updated: 2022-06-08
const statusInfo = importJson('./iana.json')

export const useStatus = () => {
  const getStatusInfo = () => {
    return statusInfo
  }

  const getStatusMessage = (code: number | string) => {
    code = isNumber(code) ? code.toString() : code

    for (const key in statusInfo) {
      if (key === code)
        return statusInfo[key]
    }

    const relatedMessages: string[] = []
    for (const key in statusInfo) {
      if (key.includes(code as string) || (code as string).includes(key))
        relatedMessages.push(statusInfo[key])
    }
    if (!relatedMessages.length)
      consola.warn(`no related message found for code ${code}, you could check all statusInfo by calling getStatusInfo`)
    else
      consola.warn(`no message found for code ${code}, but there are some related messages: ${JSON.stringify(relatedMessages, null, 2)} `)

    return null
  }

  const getStatusCode = (message: string) => {
    for (const [code, msg] of Object.entries(statusInfo)) {
      if ((msg as string).toLowerCase() === message.toLowerCase())
        return parseInt(code)
    }

    const relatedCodes: number[] = []
    for (const [code, msg] of Object.entries(statusInfo)) {
      if ((msg as string).toLowerCase().includes(message.toLowerCase()) || message.toLowerCase().includes((msg as string).toLowerCase()))
        relatedCodes.push(parseInt(code))
    }

    if (!relatedCodes.length)
      consola.warn(`no related code found for message ${message}, you could check all statusInfo by calling getStatusInfo`)
    else
      consola.warn(`no code found for message ${message}, but there are some related codes: ${JSON.stringify(relatedCodes, null, 2)} `)

    return null
  }

  return { getStatusInfo, getStatusMessage, getStatusCode }
}
