import sys

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# simple brace validation
open_braces = 0
for i, char in enumerate(css):
    if char == '{':
        open_braces += 1
    elif char == '}':
        open_braces -= 1
        if open_braces < 0:
            print(f"Error: Too many closing braces at index {i}")
            sys.exit(1)

print(f"Final open braces count: {open_braces}")
