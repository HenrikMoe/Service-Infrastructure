Rust Crate with Py JAX Container

VM1: Rust Crate

Env:

install cargo

cargo build

cargo run 

./target/debug/it

Routing: 

VM2: Py Env

Env:

python3 -m venv myenv

source myenv/bin/activate

pip install jax jaxlib

pip install numpy scipy

python test_service.py

Routing:
