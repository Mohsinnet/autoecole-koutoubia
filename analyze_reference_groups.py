import requests
from bs4 import BeautifulSoup
html = requests.get('https://conduire.ma/ar/panneaux', timeout=30).text
soup = BeautifulSoup(html, 'html.parser')
for heading in soup.find_all(['h2','h3']):
    text = ' '.join(heading.get_text(' ', strip=True).split())
    if text:
        print(heading.name, repr(text), 'parent=', heading.parent.get('class'))
