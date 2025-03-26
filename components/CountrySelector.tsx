'use client';

import React, { useState, useEffect, useRef } from 'react';
import { countries } from '../lib/countries';

// Flag component that re-renders completely when the country changes
const CountryFlag = ({ countryCode }: { countryCode: string }) => {
  useEffect(() => {
    // Ensure Iconify is loaded and initialized
    if (typeof window !== 'undefined' && typeof window.Iconify !== 'undefined') {
      setTimeout(() => window.Iconify?.scan(), 0);
    }
  }, [countryCode]);

  return (
    <span 
      className="iconify" 
      data-icon={`flag:${countryCode.toLowerCase()}-4x3`}
    ></span>
  );
};

interface CountrySelectorProps {
  onSelect?: (country: { name: string; code: string }) => void;
  placeholder?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ 
  onSelect, 
  placeholder = "-- Select Your Country --" 
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<{ name: string; code: string } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Load Iconify script if it's not already loaded
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.Iconify === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectOption = (country: { name: string; code: string }) => {
    setSelectedCountry(country);
    setIsActive(false);
    setSearchQuery('');
    if (onSelect) onSelect(country);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      className={`country-selector-wrapper ${isActive ? 'active' : ''}`}
      ref={wrapperRef}
    >
      <div className="country-selector-btn" onClick={toggleDropdown}>
        <span>
          {selectedCountry ? (
            <>
              {/* Key forces complete re-render when country changes */}
              <span key={`flag-${selectedCountry.code}`} className="flag-container">
                <CountryFlag countryCode={selectedCountry.code} />
              </span>
              <span className="country-name">{selectedCountry.name}</span>
            </>
          ) : (
            placeholder
          )}
        </span>
        <i className={`fas fa-chevron-down ${isActive ? 'rotated' : ''}`}></i>
      </div>
      
      <div className="country-selector-content">
        <div className="country-selector-search">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={handleSearch}
            spellCheck={false}
          />
        </div>
        
        <ul>
          {countries.map((country) => (
            <li 
              key={country.code}
              className={`country-option ${
                searchQuery && !country.name.toLowerCase().includes(searchQuery.toLowerCase()) 
                  ? 'hide' 
                  : ''
              }`}
              onClick={() => handleSelectOption(country)}
            >
              <CountryFlag countryCode={country.code} />
              <span className="country-name">{country.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountrySelector; 