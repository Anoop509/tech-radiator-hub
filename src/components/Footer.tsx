import { Youtube, Instagram, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Videos", href: "#videos" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = [
    { name: "Reviews", href: "#" },
    { name: "Unboxing", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Comparisons", href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-background">TR</span>
              </div>
              <span className="text-xl font-bold text-foreground">Tech Radiator</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ek Engineer jo tech videos bhi banata hai. Honest reviews, detailed unboxings, 
              and engineering insights for tech enthusiasts.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-muted rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted rounded-lg hover:bg-pink-500/10 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted rounded-lg hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@techradiator.com" 
                className="p-2 bg-muted rounded-lg hover:bg-green-500/10 hover:text-green-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:contact@techradiator.com"
                  className="text-primary hover:underline"
                >
                  contact@techradiator.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Business Inquiries</p>
                <a 
                  href="mailto:business@techradiator.com"
                  className="text-primary hover:underline"
                >
                  business@techradiator.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Collaboration</p>
                <p className="text-muted-foreground">Open to partnerships & reviews</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Tech Radiator. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by an Engineer</span>
          </div>
        </div>

        {/* Additional Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            All product names, logos, and brands are property of their respective owners. 
            All company, product and service names used are for identification purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;