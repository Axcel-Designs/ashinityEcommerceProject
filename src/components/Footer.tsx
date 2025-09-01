import { Link } from "react-router-dom";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

//   return (
//     <section className="bg-[#f5f5f5] text-[#1e1e1e] p-4">
//       <div className="container mx-auto bg-amber-400">
//         <div className="grid md:grid-cols-3 lg:grid-cols-3">
//           <div>
//             <dl>
//               <dt className="text-sm font-semibold my-4">INFO</dt>
//               <dd>PRICING</dd>
//               <dd>ABOUT</dd>
//               <dd>CONTACTS</dd>
//             </dl>
//           </div>
//           <div>
//             <dl>
//               <dt className="text-sm font-semibold my-4">LANGUAGE</dt>
//               <dd>ENG</dd>
//               <dd>ESP</dd>
//               <dd>SVE</dd>
//             </dl>
//           </div>
//           <div>
//             <dl>
//               <dt className="text-sm font-semibold my-4">LANGUAGE</dt>
//               <dd>ENG</dd>
//               <dd>ESP</dd>
//               <dd>SVE</dd>
//             </dl>
//           </div>
//         </div>
//       </div>
//       <div className="text-sm flex justify-center items-center"> <p>&copy; axcelDesigns</p><p className="ml-10">Privacy</p></div>
//     </section>
//   )
// }

  return (
    <footer className=" bg-[#EAEAEA] text-[#1e1e1e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-lg">TechStore</h3>
              <p className="text-sm  pr-0 sm:pr-4 lg:pr-0">
                Your trusted destination for the latest technology products.
                Quality, innovation, and customer satisfaction are our priorities.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2 text-sm">
                  {/* <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> */}
                  <span className="break-words">123 Tech Street, San Francisco, CA 94105</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  {/* <Phone className="h-4 w-4 text-primary flex-shrink-0" /> */}
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  {/* <Mail className="h-4 w-4 text-primary flex-shrink-0" /> */}
                  <span className="break-all">support@techstore.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/shop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
                <Link to="/shop?category=smartphones" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Smartphones
                </Link>
                <Link to="/shop?category=laptops" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Laptops
                </Link>
                <Link to="/shop?category=gaming" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gaming
                </Link>
                <Link to="/shop?category=audio" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Audio
                </Link>
              </nav>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h4 className="font-semibold">Customer Service</h4>
              <nav className="space-y-2">
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping Info
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Returns & Exchanges
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Size Guide
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Track Your Order
                </a>
              </nav>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Subscribe to get special offers, free giveaways, and exclusive deals.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                {/* <Input
                  type="email"
                  holder="Enter your email"
                /> */}
                {/* <Button type="submit" className="w-full" size="sm">
                  Subscribe
                </Button> */}
              </form>

              {/* Social Media Links */}
              <div className="space-y-3">
                <h5 className="font-medium text-sm">Follow Us</h5>
                <div className="flex space-x-2">
                  {/* <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0">
                    <Youtube className="h-4 w-4" />
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Footer */}
        <div className="py-4 md:py-6">
          <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center lg:text-left order-2 lg:order-1">
              © {new Date().getFullYear()} TechStore. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-center gap-x-4 gap-y-2 order-1 lg:order-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 order-3">
              <span className="text-sm text-muted-foreground whitespace-nowrap">We accept:</span>
              <div className="flex space-x-1">
                <div className="h-6 w-9 bg-muted rounded text-xs flex items-center justify-center font-medium">
                  VISA
                </div>
                <div className="h-6 w-9 bg-muted rounded text-xs flex items-center justify-center font-medium">
                  MC
                </div>
                <div className="h-6 w-9 bg-muted rounded text-xs flex items-center justify-center font-medium">
                  AMEX
                </div>
                <div className="h-6 w-9 bg-muted rounded text-xs flex items-center justify-center font-medium">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-4 border-t">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-muted-foreground">
              <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <span className="whitespace-nowrap">Secure Payment</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-muted-foreground">
              <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xs">🚚</span>
              </div>
              <span className="whitespace-nowrap">Free Shipping Over $50</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-muted-foreground">
              <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 text-xs">↩</span>
              </div>
              <span className="whitespace-nowrap">30-Day Returns</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-muted-foreground">
              <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 text-xs">⭐</span>
              </div>
              <span className="whitespace-nowrap">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}