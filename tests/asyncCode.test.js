const fetchData = () => Promise.resolve('peanut butter')
const fetchDataWithError = () => Promise.reject('error')

test('Promise styled: the data is peanut butter', () => {
    return fetchData().then((data) => {
        expect(data).toBe('peanut butter')
    })
})

test('Async / await styled: the data is peanut butter', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
})

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', () => {
    return expect(fetchDataWithError()).rejects.toMatch('error')
})
