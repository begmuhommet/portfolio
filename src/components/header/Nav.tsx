const menu = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'expirince', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Nav = () => {
  const renderMenu = () => {
    return menu.map(item => (
      <li className="mr-6 last:mr-0">
        <a href={item.id} className="hover:text-secondary-main transition-colors">
          {item.label}
        </a>
      </li>
    ));
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center">{renderMenu()}</ul>
    </nav>
  );
};

export default Nav;
