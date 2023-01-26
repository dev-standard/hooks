import { resolve } from 'path'
import { describe, expect, test } from 'vitest'
import { useImport } from '../src'

describe('test useImport', () => {
  describe('test importJosn', () => {
    test('test importJosn & relative path', () => {
      const { importJson } = useImport()
      const data = importJson('./mock/data.json')
      expect(data.test).toBe('useImport')
    })

    test('test importJosn & absolute path', () => {
      const { importJson } = useImport()
      const data = importJson(resolve(__dirname, './mock/data.json'))
      expect(data.test).toBe('useImport')
    })
  })
})
