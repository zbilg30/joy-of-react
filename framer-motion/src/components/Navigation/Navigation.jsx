import React, { useId } from "react";
import { motion } from "framer-motion";
function Navigation() {
  const [hoveredNavItem, setHoveredNavItem] = React.useState(null);
  const id = useId();

  return (
    <nav onMouseLeave={() => setHoveredNavItem(null)}>
      <ul>
        {LINKS.map(({ slug, label, href, bg }) => (
          <li key={slug}>
            {hoveredNavItem === slug && (
              <motion.div
                className="hovered-backdrop"
                layoutId={id}
                style={{ backgroundColor: bg }}
              />
            )}

            <a href={href} onMouseEnter={() => setHoveredNavItem(slug)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const LINKS = [
  {
    slug: "home",
    label: "Home",
    href: "/",
    bg: "red",
  },
  {
    slug: "usage",
    label: "Usage",
    href: "/usage",
    bg: "blue",
  },
  {
    slug: "integrations",
    label: "Integrations",
    href: "/integrations",
    bg: "green",
  },
];

export default Navigation;
