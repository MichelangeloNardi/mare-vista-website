
import { useLanguage } from "@/context/LanguageContext";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, image = "/hero-bg.jpg", url = window.location.href }: SEOProps) => {
  const { language } = useLanguage();
  
  // Update document title
  document.title = title;
  
  // Find and update or create meta tags
  const updateMetaTag = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) || 
               document.querySelector(`meta[property="${name}"]`);
    
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      meta = document.createElement("meta");
      const isProperty = name.startsWith("og:") || name.startsWith("twitter:");
      
      if (isProperty) {
        meta.setAttribute("property", name);
      } else {
        meta.setAttribute("name", name);
      }
      
      meta.setAttribute("content", content);
      document.head.appendChild(meta);
    }
  };
  
  // Set meta tags
  updateMetaTag("description", description);
  updateMetaTag("og:title", title);
  updateMetaTag("og:description", description);
  updateMetaTag("og:image", image.startsWith("http") ? image : window.location.origin + image);
  updateMetaTag("og:url", url);
  updateMetaTag("og:type", "website");
  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", image.startsWith("http") ? image : window.location.origin + image);
  
  // Set hreflang annotations
  const baseUrl = window.location.origin;
  const path = window.location.pathname;
  const currentLang = language;
  const alternateLang = currentLang === 'en' ? 'it' : 'en';
  
  // Remove any existing hreflang links
  const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflangs.forEach(link => link.remove());
  
  // Add current language hreflang
  const currentLangLink = document.createElement("link");
  currentLangLink.setAttribute("rel", "alternate");
  currentLangLink.setAttribute("hreflang", currentLang);
  currentLangLink.setAttribute("href", `${baseUrl}/${currentLang}${path}`);
  document.head.appendChild(currentLangLink);
  
  // Add alternate language hreflang
  const alternateLangLink = document.createElement("link");
  alternateLangLink.setAttribute("rel", "alternate");
  alternateLangLink.setAttribute("hreflang", alternateLang);
  alternateLangLink.setAttribute("href", `${baseUrl}/${alternateLang}${path}`);
  document.head.appendChild(alternateLangLink);
  
  // Add x-default hreflang
  const defaultLangLink = document.createElement("link");
  defaultLangLink.setAttribute("rel", "alternate");
  defaultLangLink.setAttribute("hreflang", "x-default");
  defaultLangLink.setAttribute("href", `${baseUrl}/en${path}`);
  document.head.appendChild(defaultLangLink);
  
  return null;
};

export default SEO;
