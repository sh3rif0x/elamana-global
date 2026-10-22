import Navbar from "./Navbar";

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
      <Navbar className="mobile-nav" onNavigate={onClose} />
    </div>
  );
}
