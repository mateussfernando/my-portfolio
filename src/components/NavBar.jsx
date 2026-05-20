export default function NavBar(params) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-center items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="flex gap-8">
        {['INDEX', 'ABOUT', 'PROJECTS', 'EDUCATION', 'CONTACT'].map(
          (item, i) => (
            <span
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-space text-xs tracking-[0.1em] text-white/60 hover:text-white transition-colors uppercase"
            >
              {item}
            </span>
          ),
        )}
      </div>
    </nav>
  )
}
