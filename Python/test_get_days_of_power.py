import unittest
from get_days_of_power import *


class Test(unittest.TestCase):

    def test_get_days_of_power(self):
        self.assertAlmostEqual(get_days_of_power(R1=1000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=21000), 10)
        self.assertAlmostEqual(get_days_of_power(R1=3000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=700000), 142)
        self.assertAlmostEqual(get_days_of_power(R1=500, D1=3, R2=500, D2=10, R3=500, D3=7, K=21000), 19)
        self.assertAlmostEqual(get_days_of_power(R1=1300, D1=0, R2=500, D2=0, R3=1500, D3=7, K=10000), 6)
        self.assertAlmostEqual(get_days_of_power(R1=10000, D1=3, R2=500, D2=10, R3=1500, D3=7, K=11000), 1)


if __name__ == '__main__':
    unittest.main()

