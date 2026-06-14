"""Regenerate the funnel figure (PNG) from the source SVG.

Usage:
    python src/render_funnel.py

Requires cairosvg (see requirements.txt). The SVG in figures/ is the source of
truth; edit it there and re-run this to refresh the PNG.
"""

import os

try:
    import cairosvg
except ImportError:
    raise SystemExit("cairosvg not installed. Run: pip install cairosvg")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SVG = os.path.join(ROOT, "figures", "ai-funnel-figure.svg")
PNG = os.path.join(ROOT, "figures", "ai-funnel-figure.png")

cairosvg.svg2png(url=SVG, write_to=PNG, output_width=1360, output_height=1160)
print(f"Rendered {PNG}")
