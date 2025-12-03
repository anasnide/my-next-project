export default function Footer() {
  return (
    <footer className="mt-16 bg-black/70 backdrop-blur-md text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Mr Anas Nidir. All Rights Reserved.</p>
      </div>
    </footer>
  );
}