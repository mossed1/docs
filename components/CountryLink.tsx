'use client';

import { useState, useEffect } from 'react';
import { productLinks } from '../lib/productLinks';

interface CountryLinkProps {
  productId: string;
  children: React.ReactNode;
}

const CountryLink: React.FC<CountryLinkProps> = ({ productId, children }) => {
  const [currentLink, setCurrentLink] = useState<string>('');
  const [currentCountry, setCurrentCountry] = useState<string>('US');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDefaultLink, setIsDefaultLink] = useState<boolean>(false);
  
  // Function to update link based on selected country
  const updateLink = () => {
    // Get the currently selected country from localStorage
    const selectedCountry = localStorage.getItem('selectedCountry');
    let countryCode = 'US'; // Default fallback
    
    if (selectedCountry) {
      try {
        const country = JSON.parse(selectedCountry);
        countryCode = country.code;
      } catch (e) {
        console.error('Error parsing selected country', e);
      }
    }
    
    // Get the product
    const product = productLinks[productId];
    
    if (product) {
      // Check if we need to use the default link
      const hasCountrySpecificLink = !!product.countryLinks[countryCode];
      setIsDefaultLink(!hasCountrySpecificLink);
      
      // Use the country-specific link or fall back to default
      if (hasCountrySpecificLink) {
        setCurrentLink(product.countryLinks[countryCode]);
        setCurrentCountry(countryCode);
      } else {
        setCurrentLink(product.defaultLink);
        setCurrentCountry('US'); // Default country for fallback links
      }
    } else {
      console.warn(`Product ID ${productId} not found in product links`);
      setCurrentLink('#');
      setCurrentCountry('US');
      setIsDefaultLink(true);
    }
    
    setIsLoading(false);
  };
  
  // Initial link setup and listen for localStorage changes
  useEffect(() => {
    // Initial update
    updateLink();
    
    // Create a handler for storage events
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'selectedCountry') {
        updateLink();
      }
    };
    
    // Also listen for custom event for components on the same page
    const handleCustomEvent = () => {
      updateLink();
    };
    
    // Add event listeners
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('countryChange', handleCustomEvent);
    
    // Create a polling mechanism for backup
    const intervalId = setInterval(() => {
      updateLink();
    }, 2000); // Check every 2 seconds
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('countryChange', handleCustomEvent);
      clearInterval(intervalId);
    };
  }, [productId]);
  
  // Optional: Add a badge to indicate if link is country-specific
  // Requires subscribing to a global state or context to detect country changes
  
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <a href={currentLink} target="_blank" rel="noopener noreferrer">
          {children} ({currentCountry})
        </a>
      )}
    </>
  );
};

export default CountryLink; 