
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const switchLanguage = (lang: 'en' | 'it') => {
    setLanguage(lang);
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-primary">Casa Zaratan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-600 hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/details" className="font-medium text-gray-600 hover:text-primary transition-colors">
              {t('nav.villaDetails')}
            </Link>
            <Link to="/gallery" className="font-medium text-gray-600 hover:text-primary transition-colors">
              {t('nav.gallery')}
            </Link>
            <Link to="/booking" className="font-medium text-gray-600 hover:text-primary transition-colors">
              {t('nav.booking')}
            </Link>
            <Link to="/guest-info" className="font-medium text-gray-600 hover:text-primary transition-colors">
              {t('nav.guestInfo')}
            </Link>
          </nav>

          {/* Language Switcher and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLanguage('en')} className={language === 'en' ? "font-bold" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLanguage('it')} className={language === 'it' ? "font-bold" : ""}>
                  Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Book Now Button - Desktop Only */}
            <div className="hidden md:block">
              <Button asChild>
                <Link to="/booking">
                  {t('common.bookNow')}
                </Link>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t animate-fade-in">
            <Link 
              to="/" 
              className="block px-4 py-2 font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/details" 
              className="block px-4 py-2 font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.villaDetails')}
            </Link>
            <Link 
              to="/gallery" 
              className="block px-4 py-2 font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.gallery')}
            </Link>
            <Link 
              to="/booking" 
              className="block px-4 py-2 font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.booking')}
            </Link>
            <Link 
              to="/guest-info" 
              className="block px-4 py-2 font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.guestInfo')}
            </Link>
            <div className="px-4 py-2">
              <Button asChild className="w-full">
                <Link to="/booking">
                  {t('common.bookNow')}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
