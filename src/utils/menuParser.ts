export interface MenuItem {
  id: string;
  category: string;
  category_en?: string;
  title: string;
  title_en?: string;
  price: number;
  image?: string;
  description?: string;
  description_en?: string;
}

export function parseMenuHTML(html: string): MenuItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
  const container = doc.querySelector('#menu-container');
  if (!container) return [];

  const items: MenuItem[] = [];
  container.querySelectorAll('.menu-item').forEach(div => {
    items.push({
      id: div.id,
      category: div.getAttribute('data-category') || '',
      category_en: div.getAttribute('data-category-en') || '',
      title: div.querySelector('.item-title')?.textContent || '',
      title_en: div.querySelector('.item-title-en')?.textContent || '',
      price: parseFloat(div.querySelector('.item-price')?.textContent || '0') || 0,
      image: div.querySelector('.item-image')?.getAttribute('src') || '',
      description: div.querySelector('.item-description')?.textContent || '',
      description_en: div.querySelector('.item-description-en')?.textContent || '',
    });
  });
  return items;
}
