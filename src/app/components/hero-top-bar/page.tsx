import React from 'react';

interface HeroTopbarProps {
  title: string; // The main title text
  breadcrumbs: { name: string; path?: string; active?: boolean }[]; // Breadcrumb items
  titleStyle?: string; // Optional custom styles for the title
  breadcrumbStyle?: string; // Optional custom styles for the breadcrumbs
}

export default function Herotopbar({
  title,
  breadcrumbs,
  titleStyle = "text-gray-800", // Default title styles
  breadcrumbStyle = "text-gray-400", // Default breadcrumb styles
}: HeroTopbarProps) {
  return (
    <div className="bg-purple-100 py-8">
      <div className="container mx-auto text-center md:text-left mb-12 mt-3 px-4 md:px-12">
        <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${titleStyle}`}>
          {title}
        </h2>
        <p className="text-gray-500">
          {breadcrumbs.map((breadcrumb, index) => (
            <span
              key={index}
              className={`${
                breadcrumb.active
                  ? "text-pink-500 font-medium"
                  : breadcrumbStyle
              }`}
            >
              {breadcrumb.path ? (
                <a href={breadcrumb.path} className="hover:underline">
                  {breadcrumb.name}
                </a>
              ) : (
                breadcrumb.name
              )}
              {index < breadcrumbs.length - 1 && " > "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
