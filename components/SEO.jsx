import { useEffect } from 'react';

export function SEO({ title, description, url }) {
  useEffect(() => {
    // 1. Update Title Tag
    document.title = title ? `${title} | Thermovap Engineering` : "Thermovap Engineering | Industrial Evaporator & Dryer Systems";

    // 2. Update Description Meta Tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description || "Thermal processing installations, multiple-effect evaporators, MVR/TVR energy recovery integration systems.");

    // 3. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.thermovapengineering.co.in${url || ''}`);
  }, [title, description, url]);

  return null;
}