import requests, json
from bs4 import BeautifulSoup
html = requests.get('https://conduire.ma/ar/panneaux', timeout=30).text
soup = BeautifulSoup(html, 'html.parser')
result=[]
for h2 in soup.find_all('h2'):
    title=' '.join(h2.get_text(' ', strip=True).split())
    parent=h2.parent
    section=parent.parent
    imgs=section.find_all('img') if section else []
    items=[]
    for img in imgs:
        src=img.get('src') or img.get('data-src')
        alt=(img.get('alt') or '').strip()
        if src and 'assets.conduire.ma/signs/' in src: items.append({'name':alt,'src':src})
    if items: result.append({'title':title,'count':len(items),'items':items})
print(json.dumps(result, ensure_ascii=False, indent=2))
