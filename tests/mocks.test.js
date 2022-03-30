describe('mocking', () => {
    const mockCallback = jest.fn((x) => 42 + x)

    beforeAll(() => {
        ;[0, 1].forEach(mockCallback)
    })

    test('The mock function is called twice', () => {
        expect(mockCallback.mock.calls.length).toBe(2)
    })

    test('The first argument of the first call to the function was 0', () => {
        expect(mockCallback.mock.calls[0][0]).toBe(0)
    })

    test('The first argument of the second call to the function was 1', () => {
        expect(mockCallback.mock.calls[1][0]).toBe(1)
    })

    test('The return value of the first call to the function was 42', () => {
        expect(mockCallback.mock.results[0].value).toBe(42)
    })
})

describe('return values', () => {
    const myMock = jest.fn()
    test('The mock returns undefined by default', () => {
        expect(myMock()).toBeUndefined()
    })

    test('The mock returns different values', () => {
        myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)

        expect(myMock()).toBe(10)
        expect(myMock()).toBe('x')
        expect(myMock()).toBe(true)
        expect(myMock()).toBe(true)
    })
})
