//Could use anchor tags instead of p tags but there is no redirect url for them

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
     return (
          <footer className="bg-blue-900 grid grid-cols-[1fr_1fr_2fr] text-white px-12 py-6">
               <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Filters</h3>
                    <p>All</p>
                    <p className="pt-6">&copy;2024 American</p>
               </div>

               <div className="space-y-4">
                    <h3 className="text-xl font-semibold">About us</h3>
                    <p>About Us</p>
                    <p>Contact</p>
               </div>

               <div className="flex items-center flex-col">
                    <div className="space-y-4">
                         <h3 className="text-xl font-semibold">Follow Us</h3>
                         <div className="flex items-center gap-x-4">
                              <IconContainer>
                                   <FaFacebookF />
                              </IconContainer>
                              <IconContainer>
                                   <FaTwitter />
                              </IconContainer>
                              <IconContainer>
                                   <FaInstagram />
                              </IconContainer>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;

function IconContainer({ children }) {
     return (
          <div className="rounded-full bg-blue-600 size-8 flex items-center justify-center">
               {children}
          </div>
     );
}
