import 'vitest'
import { loader } from '~/routes'

describe('loader', () => {
    describe('should have default message', () => {
        test('when no name is provided', async () => {
            const request = new Request('http://test.com/')
            const response = await loader({ context: {}, params: {}, request})
            expect(response.status).toBe(200)

            const data = await response.json()
            expect(data.message).toBe('Welcome to Remix')
        })

        test('when name is blank string', async () => {
            const request = new Request('http://test.com?name=   ')
            const response = await loader({ context: {}, params: {}, request})
            expect(response.status).toBe(200)

            const data = await response.json()
            expect(data.message).toBe('Welcome to Remix')
        })

        test('when name is given', async () => {
            const request = new Request('http://test.com?name=given')
            const response = await loader({ context: {}, params: {}, request})
            expect(response.status).toBe(200)

            const data = await response.json()
            expect(data.message).toBe('Welcome to Remix, given!')
        })
    })
})
