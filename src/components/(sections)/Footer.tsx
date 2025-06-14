const footerItems = ["contact", "Privacy Policy", "Terms & Conditions"];
export function Footer() {
  return (
    <section className="py-16 flex justify-center mt-16 text-white/15">
      <footer className="flex justify-between w-full max-w-6xl px-4 lg:flex-row flex-col">
        {/* Texto */}
        <div className="font-medium hover:text-white/20 transition">
          Layers &copy; {new Date().getFullYear()}. All rights reserved.
        </div>

        <nav className="flex gap-4 flex-col lg:flex-row">
          {footerItems.map((item) => (
            
            <p
            key={item}
            className="relative inline-block  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-lime-500 before:transition-all before:duration-300 hover:before:w-[100%] cursor-pointer hover:text-lime-400 transition-all duration-300">
              {item}
            </p>
          ))}
        </nav>
      </footer>
    </section>
  );
}
