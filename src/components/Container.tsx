import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Consistent container component for perfect alignment across all sections
 * Uses a 12-column grid system with standardized spacing
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Consistent section wrapper with standardized vertical spacing
 */
export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

interface GridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 4 | 6 | 8 | 10 | 12;
  className?: string;
}

/**
 * Consistent grid component with equal gaps
 */
export function Grid({ children, columns = 2, gap = 8, className = "" }: GridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    5: "md:grid-cols-3 lg:grid-cols-5",
    6: "md:grid-cols-3 lg:grid-cols-6",
  };

  const gapClass = `gap-${gap}`;

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
