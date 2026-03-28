from pathlib import Path

root = Path(__file__).resolve().parents[1]
page_path = root / "app" / "page.tsx"
layout_path = root / "app" / "layout.tsx"
pkg_path = root / "package.json"

assert page_path.exists(), "app/page.tsx is missing"
assert layout_path.exists(), "app/layout.tsx is missing"
assert pkg_path.exists(), "package.json is missing"

page = page_path.read_text(encoding="utf-8")

required_markers = [
    'id="hero"',
    'id="agents"',
    'id="workflow"',
    'id="platform"',
    'id="cta"',
    'Build AI products with specialized agents',
    'Planning Agent',
    'Coding Agent',
    'Debug Agent',
    'Review Agent',
    'Deployment Agent',
    'Research Agent',
]

missing = [marker for marker in required_markers if marker not in page]
assert not missing, f"Next.js landing page is missing required markers: {missing}"

print("Next.js landing page smoke test passed.")
