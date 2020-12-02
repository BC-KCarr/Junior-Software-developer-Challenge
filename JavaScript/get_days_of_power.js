function getDaysOfPower(R1, D1, R2, D2, R3, D3, K) {
    let daysOfPower = 0
    let currentDay = 0
    let dailyRate = 0

    // vars used to make sure daily average is added only once when loan becomes active
    let l1DailyRateAdded = false
    let l2DailyRateAdded = false
    let l3DailyRateAdded = false

    while(K >= dailyRate) {

        if(currentDay >= D1) {
            if(!l1DailyRateAdded) {
                dailyRate += R1
                l1DailyRateAdded = true
            } else {
                K -= dailyRate
                daysOfPower ++ 
            } 
        }

        if(currentDay >= D2) {
            if(!l2DailyRateAdded) {
                dailyRate += R2
                l2DailyRateAdded = true
            } else {
                K -= dailyRate
                daysOfPower ++
            }
        }

        if(currentDay >= D3) {
            if(!l3DailyRateAdded) {
                dailyRate += R3
                l3DailyRateAdded = true
            } else {
                K -= dailyRate
                daysOfPower ++
            }
        }

        currentDay ++
    }

    return daysOfPower
}

module.exports = getDaysOfPower