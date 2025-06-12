import React, { useRef, useEffect, useState } from "react";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  scrolled?: boolean;
  currentPath?: string; // Add this prop
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  scrolled = false,
  currentPath = "/", // Add default value
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  // Calculate active index based on current path
  const getActiveIndexFromPath = () => {
    const index = items.findIndex(item => item.href === currentPath);
    return index !== -1 ? index : 0; // fallback to 0 if not found
  };
  
  const [activeIndex, setActiveIndex] = useState<number>(getActiveIndexFromPath());
  
  // Update activeIndex when currentPath changes
  useEffect(() => {
    const newActiveIndex = getActiveIndexFromPath();
    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  }, [currentPath, items]);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (
    distance: number,
    pointIndex: number,
    totalPoints: number
  ): [number, number] => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (
    i: number,
    t: number,
    d: [number, number],
    r: number
  ) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        // Better color handling for scrolled state
        const particleColor = scrolled 
          ? `var(--color-${p.color}-dark, #333)` 
          : `var(--color-${p.color}, white)`;
        particle.style.setProperty("--color", particleColor);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current!.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          { currentTarget: liEl } as React.MouseEvent<HTMLLIElement>,
          index
        );
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[
        activeIndex
      ] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex, scrolled]);

  return (
    <>
      <style>
        {`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
            
            /* Color definitions for particles */
            --color-1: #3b82f6;
            --color-2: #10b981;
            --color-3: #f59e0b;
            --color-4: #ef4444;
            
            /* Dark versions for scrolled state */
            --color-1-dark: #1d4ed8;
            --color-2-dark: #059669;
            --color-3-dark: #d97706;
            --color-4-dark: #dc2626;
          }
          
          .gooey-nav-container {
            --text-color: ${scrolled ? '#000' : '#fff'};
            --text-shadow: ${scrolled ? 'none' : '0 1px 1px hsl(205deg 30% 10% / 0.2)'};
            --active-bg: ${scrolled ? '#000' : '#fff'};
            --active-text: ${scrolled ? '#fff' : '#000'};
            --blend-mode: ${scrolled ? 'multiply' : 'lighten'};
          }
          
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
            transition: all 0.3s ease;
          }
          
          .effect.text {
            color: var(--text-color);
            text-shadow: var(--text-shadow);
            transition: all 0.3s ease;
          }
          
          .effect.text.active {
            color: var(--active-text);
            text-shadow: none;
            font-weight: 500;
          }
          
          .effect.filter {
            filter: blur(7px) contrast(100) blur(0);
            mix-blend-mode: var(--blend-mode);
            transition: all 0.3s ease;
          }
          
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: -75px;
            z-index: -2;
            background: transparent;
          }
          
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--active-bg);
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
            transition: all 0.3s ease;
          }
          
          .effect.active::after {
            animation: pill 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          
          @keyframes pill {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }
          
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 10px);
            left: calc(50% - 10px);
            animation: particle calc(var(--time)) cubic-bezier(0.4, 0, 0.2, 1) 1 -350ms;
          }
          
          .point {
            background: var(--color);
            opacity: 1;
            animation: point calc(var(--time)) cubic-bezier(0.4, 0, 0.2, 1) 1 -350ms;
            box-shadow: 0 0 20px var(--color);
          }
          
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease-out;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 0.8;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 0;
            }
          }
          
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.3));
              opacity: 0.6;
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease-out;
            }
            85% {
              transform: scale(calc(var(--scale) * 0.9));
              opacity: 0.8;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          
          .gooey-nav-item {
            color: var(--text-color);
            text-shadow: var(--text-shadow);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: visible;
          }
          
          .gooey-nav-item:hover {
            transform: translateY(-1px);
          }
          
          .gooey-nav-item.active {
            color: var(--active-text);
            text-shadow: none;
            font-weight: 500;
          }
          
          .gooey-nav-item.active::after {
            opacity: 1;
            transform: scale(1);
          }
          
          .gooey-nav-item::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            background: var(--active-bg);
            opacity: 0;
            transform: scale(0);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
            box-shadow: ${scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 4px 20px rgba(255,255,255,0.2)'};
          }
          
          .gooey-nav-item a {
            position: relative;
            z-index: 2;
            text-decoration: none;
            display: block;
            transition: all 0.3s ease;
          }
          
          .gooey-nav-item a:focus {
            outline: 2px solid ${scrolled ? '#3b82f6' : '#fff'};
            outline-offset: 2px;
            border-radius: 4px;
          }
        `}
      </style>
      <div className="relative gooey-nav-container" ref={containerRef}>
        <nav
          className="flex relative"
          style={{ transform: "translate3d(0,0,0.01px)" }}
        >
          <ul
            ref={navRef}
            className="flex gap-6 list-none p-0 px-4 m-0 relative z-[3]"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`gooey-nav-item py-[0.7em] px-[1.2em] rounded-full relative cursor-pointer ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, index)}
              >
                <a
                  href={item.href}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;