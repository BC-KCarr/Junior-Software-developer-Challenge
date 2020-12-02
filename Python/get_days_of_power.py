def get_days_of_power(R1, D1, R2, D2, R3, D3, K):
    days_of_power = 0
    current_day = 0
    daily_rate = 0

    # vars used to make sure daily average is added only once when loan becomes active
    l1_daily_rate_added = False
    l2_daily_rate_added = False
    l3_daily_rate_added = False

    while K >= daily_rate:

        if current_day >= D1:
            if not l1_daily_rate_added:
                daily_rate += R1
                l1_daily_rate_added = True
            else:
                K -= daily_rate
                days_of_power += 1

        if current_day >= D2:
            if not l2_daily_rate_added:
                daily_rate += R2
                l2_daily_rate_added = True
            else:
                K -= daily_rate
                days_of_power += 1

        if current_day >= D3:
            if not l3_daily_rate_added:
                daily_rate += R3
                l3_daily_rate_added = True
            else: 
                K -= daily_rate
                days_of_power += 1

        current_day += 1
        
    return days_of_power
    


