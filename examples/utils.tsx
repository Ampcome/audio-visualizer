import { useState, useEffect } from "react";

/**
 * Custom hook to check if a media query matches
 * @param query - The media query to check
 * @returns boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Create a media query list
    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Define callback for media query changes
    const handleMediaQueryChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};

/**
 * Custom hook to check if screen is mobile (below 550px)
 * @returns boolean indicating if screen is mobile
 */
export const useMobileScreen = (): boolean => {
  return useMediaQuery("(max-width: 550px)");
};

export default useMobileScreen;
