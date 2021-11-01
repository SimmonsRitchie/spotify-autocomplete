import React from "react";
import { scrollToTarget } from "../api/scrollToTarget";

const BUTTONS = [
  { label: "Songs", href: "#tracks" },
  { label: "Albums", href: "#albums" },
  { label: "Artists", href: "#artists" },
];

const ScrollNav = () => {
  return (
    <div className="flex gap-4">
      {BUTTONS.map(({label, href}, index) => {
        return (
          <button
            onClick={() => scrollToTarget(href)}
            key={label}
            className="rounded font-semibold text-white text-xs rounded-r-full rounded-l-full bg-purple-600 px-3 py-1"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ScrollNav;
