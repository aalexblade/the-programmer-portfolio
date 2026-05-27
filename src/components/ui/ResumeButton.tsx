"use client";

import { Button } from "./Button";

/**
 * ResumeButton Client Component
 * Handles the interactivity for the Resume CTA without passing 
 * event handlers across the Server/Client boundary in the Header.
 */
export const ResumeButton = () => {
  const handleResumeClick = () => {
    // Logic for downloading resume or opening a PDF
    window.open("/resume.pdf", "_blank");
  };

  return (
    <Button 
      variant="secondary" 
      className="hidden sm:inline-flex"
      onClick={handleResumeClick}
    >
      Resume
    </Button>
  );
};
