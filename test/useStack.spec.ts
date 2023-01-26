import { describe, expect, test } from 'vitest'
import { useStack } from '../src'

describe('test useStack', () => {
  describe('test getStackInfo', () => {
    test('test getStackInfo & default', () => {
      const { getStackInfo } = useStack()
      const info = getStackInfo('test useStack')
      expect(info[0]).toBe('test useStack')
    })

    test('test getStackInfo & location', () => {
      const { getStackInfo } = useStack()
      const info1 = getStackInfo('test useStack')
      expect(info1[2]).toBe(__filename)
      const info2 = getStackInfo('test useStack', { location: true })
      expect(info2[2]).not.toBe(__filename)
      expect(info2[2].includes(__filename)).toBe(true)
    })
  })
})
