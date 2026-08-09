import json
from pathlib import Path
source=json.loads(Path('grouped-reference-signs.json').read_text())
lines=['export type ReferenceSign = { name: string; image: string };','export type ReferenceGroup = { title: string; items: ReferenceSign[] };','export const referenceGroups: ReferenceGroup[] = [']
for group in source:
    title=group['title'].replace('عالمات','علامات').replace('األسبقية','الأسبقية').replace('الرسوم التبيانية','الرسوم البيانية').replace('لويحات','لوحات').strip()
    if not title: title='علامات إضافية'
    lines.append('  { title: '+json.dumps(title, ensure_ascii=False)+', items: [')
    for item in group['items']:
        lines.append('    { name: '+json.dumps(item['name'], ensure_ascii=False)+', image: '+json.dumps(item['src'], ensure_ascii=False)+' },')
    lines.append('  ] },')
lines.append('];')
Path('client/src/referenceSigns.ts').write_text('\n'.join(lines)+'\n')
