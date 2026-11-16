'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';

interface GooeyInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (query: string) => void;
  onFocus?: () => void;
  className?: string;
  autoExpand?: boolean;
}

export function GooeyInput({
  placeholder = "Qidirish...",
  value: controlledValue,
  onChange: controlledOnChange,
  onSubmit,
  onFocus,
  className = "",
  autoExpand = false,
}: GooeyInputProps) {
  const [internalValue, setInternalValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(autoExpand);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (controlledOnChange) {
      controlledOnChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    if (onFocus) onFocus();
  };

  const handleCollapse = () => {
    if (!value) {
      setIsExpanded(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit(value);
    } else if (e.key === 'Escape') {
      setIsExpanded(false);
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    if (controlledOnChange) {
      const event = {
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;
      controlledOnChange(event);
    } else {
      setInternalValue("");
    }
    inputRef.current?.focus();
  };

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (!value) {
          setIsExpanded(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value]);

  return (
    <div className={`relative flex items-center ${className}`} ref={containerRef}>
      {/* SVG Gooey Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="gooey-search-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0  
                0 1 0 0 0  
                0 0 1 0 0  
                0 0 0 18 -8"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Main Animated Wrapper */}
      <div className="relative flex items-center">
        {/* Gooey Liquid Backdrop Layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ filter: "url(#gooey-search-filter)" }}
        >
          {/* Main expanding blob */}
          <motion.div
            initial={false}
            animate={{
              width: isExpanded ? 240 : 38,
              height: 38,
              borderRadius: 19,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 26,
            }}
            className="bg-[#0F2942]/15"
          />

          {/* Secondary reactive bubble that merges into input */}
          <motion.div
            initial={false}
            animate={{
              x: isExpanded ? 200 : 0,
              scale: isExpanded ? 0.9 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 24,
            }}
            className="absolute top-0 left-0 w-[38px] h-[38px] rounded-full bg-[#108A54]/20"
          />
        </div>

        {/* Crisp Interactive Foreground Element */}
        <motion.div
          initial={false}
          animate={{
            width: isExpanded ? 240 : 38,
            height: 38,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 26,
          }}
          className="relative flex items-center bg-white rounded-full border border-[#E2E8F0] shadow-xs hover:border-[#0F2942]/40 transition-colors overflow-hidden focus-within:ring-0 focus-within:outline-none"
        >
          {/* Search Icon / Trigger Button */}
          <button
            type="button"
            onClick={handleExpand}
            className="w-[38px] h-[38px] shrink-0 flex items-center justify-center text-[#0F2942] hover:text-[#108A54] transition-colors cursor-pointer outline-none focus:outline-none"
            aria-label="Qidirish"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Input field */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex items-center pr-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={value}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  className="w-full bg-transparent text-xs text-[#1B1F2A] placeholder-[#8A91A3] outline-none border-none focus:outline-none focus:ring-0 font-body p-0 shadow-none ring-0"
                />

                {value && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-1 text-[#8A91A3] hover:text-[#1B1F2A] transition-colors shrink-0 outline-none focus:outline-none cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}

                {onSubmit && value && (
                  <button
                    type="button"
                    onClick={() => onSubmit(value)}
                    className="ml-1.5 p-1 rounded-full bg-[#24356F] text-white hover:bg-[#12715A] transition-colors shrink-0 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export function GooeyInputDemo() {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <GooeyInput placeholder="Search..." />
    </div>
  );
}

export default GooeyInput;
