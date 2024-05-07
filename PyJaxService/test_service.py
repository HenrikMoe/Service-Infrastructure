# test_service.py
import unittest
import jax.numpy as jnp
from service import calculate_mean

class TestService(unittest.TestCase):
    def test_calculate_mean(self):
        values = jnp.array([1, 2, 3, 4, 5])  # Convert list to JAX array
        self.assertAlmostEqual(calculate_mean(values), 3.0)

if __name__ == '__main__':
    unittest.main()

