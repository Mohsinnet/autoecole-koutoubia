import re, json, requests
from bs4 import BeautifulSoup
html = requests.get('https://conduire.ma/ar/panneaux', timeout=30).text
soup = BeautifulSoup(html, 'html.parser')
items = []
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src')
    alt = (img.get('alt') or '').strip()
    if src and 'assets.conduire.ma/signs/' in src:
        items.append({'name': alt, 'src': src})
print(json.dumps(items, ensure_ascii=False, indent=2))
