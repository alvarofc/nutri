# Implementation Plan

- [ ] 1. Update Astro configuration for direct Spanish serving

  - Modify astro.config.mjs to set prefixDefaultLocale to false
  - Update sitemap configuration to reflect new URL structure
  - _Requirements: 1.1, 3.1_

- [ ] 2. Replace root index page with Spanish content

  - Remove meta refresh redirect from src/pages/index.astro
  - Import and render Spanish homepage content directly
  - Add proper HTML structure with lang attribute and meta tags
  - _Requirements: 1.1, 1.2, 3.1_

- [ ] 3. Create language detection utility
  - Write JavaScript function to detect browser language preferences
  - Implement logic to check for existing user language preferences in localStorage
  - Add function to determine if redirect to English is needed
  - _Requirements: 2.1, 5.3_

- [ ] 4. Implement client-side English user redirection
  - Create script that runs on Spanish pages to detect English users
  - Implement 302 redirect logic for English-speaking users
  - Add checks to prevent redirect loops and respect manual language selection
  - _Requirements: 2.1, 2.2, 5.3_

- [ ] 5. Create SEO utility functions
  - Write function to generate hreflang tags for both language versions
  - Implement canonical URL generation based on current page and language
  - Create utility to build alternate language URLs
  - _Requirements: 3.2, 4.1, 4.2_

- [ ] 6. Update language switcher component
  - Modify existing language switcher to store preferences in localStorage
  - Add logic to navigate to equivalent pages in selected language
  - Implement session-based preference persistence
  - _Requirements: 5.1, 5.2, 5.3_

- [ ] 7. Add SEO meta tags to all page layouts
  - Update main layout components to include hreflang tags
  - Add canonical URL meta tags to all pages
  - Ensure proper Open Graph and Twitter Card tags for both languages
  - _Requirements: 3.2, 3.3_

- [ ] 8. Create comprehensive test suite for language routing
  - Write unit tests for language detection utility functions
  - Create integration tests for redirect behavior
  - Add tests for localStorage preference handling
  - _Requirements: 2.1, 2.3, 5.1, 5.2_

- [ ] 9. Implement graceful fallback for JavaScript-disabled users
  - Add noscript tags with manual language selection links
  - Ensure core functionality works without JavaScript
  - Create fallback navigation for language switching
  - _Requirements: 1.1, 4.1, 4.2_

- [ ] 10. Update 404 error pages for proper language handling
  - Modify 404.astro pages to respect language context
  - Add language-appropriate error messages and navigation
  - Implement proper redirects for missing translated pages
  - _Requirements: 4.3_

- [ ] 11. Validate and test SEO improvements
  - Create automated tests to verify hreflang tag generation
  - Add tests for canonical URL correctness
  - Implement validation for sitemap entries
  - _Requirements: 3.1, 3.2, 3.3_

- [ ] 12. Performance optimization and final integration
  - Optimize language detection script for minimal performance impact
  - Ensure smooth integration with existing Alpine.js components
  - Add error handling and logging for production monitoring
  - _Requirements: 2.2, 5.1_