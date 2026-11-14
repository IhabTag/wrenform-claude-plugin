#!/usr/bin/env bash
set -euo pipefail
src="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../tests/fixtures/next-app" && pwd)"
cp -R "$src/." .
