import { describe, expect, test } from 'vitest'
import { useJudge, useStatus } from '../src'

const { isPlainObject } = useJudge()

describe('test useStatus', () => {
  test('test getStatusInfo', () => {
    const { getStatusInfo } = useStatus()
    const info = getStatusInfo()
    expect(isPlainObject(info)).toBe(true)
    expect(Object.keys(info).length).toBe(60)
  })

  test('test getStatusMessage', () => {
    const { getStatusMessage } = useStatus()
    expect(getStatusMessage(100)).toBe('Continue')
    expect(getStatusMessage('100')).toBe('Continue')
    expect(getStatusMessage('test')).toBe(null)
    expect(getStatusMessage(0)).toBe(null)
  })

  test('test getStatusCode', () => {
    const { getStatusCode } = useStatus()
    expect(getStatusCode('Continue')).toBe(100)
    expect(getStatusCode('continue')).toBe(100)
    expect(getStatusCode('test')).toBe(null)
    expect(getStatusCode('con')).toBe(null)
  })
})
