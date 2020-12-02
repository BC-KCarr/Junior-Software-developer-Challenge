const getDaysOfPower = require('./get_days_of_power')

test('Returns expected hours of power', () => {
    expect(getDaysOfPower(R1=1000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=21000)).toBe(10)
    expect(getDaysOfPower(R1=3000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=700000)).toBe(142)
    expect(getDaysOfPower(R1=500, D1=3, R2=500, D2=10, R3=500, D3=7, K=21000)).toBe(19)
    expect(getDaysOfPower(R1=1300, D1=0, R2=500, D2=0, R3=1500, D3=7, K=10000)).toBe(6)
    expect(getDaysOfPower(R1=10000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=11000)).toBe(1)
})