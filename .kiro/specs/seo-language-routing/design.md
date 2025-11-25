# Design Document

## Overview

This design addresses the SEO issues caused by the current meta refresh redirect at the root URL by implementing a server-side language detection and routing system. The solution leverages Astro's built-in i18n capabilities while ensuring Spanish content is served directly at the root domain for optimal SEO performance.

## Architecture

The current Astro configuration already has i18n set up with Spanish as the default locale and `prefixDefaultLocale: true`. However, the root index page uses a problematic meta refresh redirect. The new architecture will:

1. **Remove the meta refresh redirect** from the root index page
2. **Serve Spanish content directly** at the root URL (`/`)
3. **Implement client-side language detection** for English users
4. **Use proper HTTP redirects** instead of meta refresh
5. **Maintain existing URL structure** for both languages

## Components and Interfaces

### 1. Root Index Page (`src/pages/index.astro`)
- **Purpose**: Serve Spanish content directly instead of redirecting
- **Behavior**: 
  - Render the Spanish homepage content
  - Include language detection script for English users
  - Provide proper SEO meta tags and structured data
- **Interface**: Standard Astro page component

### 2. Language Detection Script
- **Purpose**: Detect English-speaking users and redirect them client-side
- **Behavior**:
  - Check browser language preferences
  - Check for existing language preference in localStorage
  - Perform redirect only for English users who haven't manually selected Spanish
- **Interface**: JavaScript module that can be imported into pages

### 3. Language Switcher Component
- **Purpose**: Allow manual language switching with preference persistence
- **Behavior**:
  - Store user language preference in localStorage
  - Navigate to equivalent page in selected language
  - Prevent automatic redirects when user has made manual selection
- **Interface**: Astro component with Alpine.js integration

### 4. SEO Enhancement Utilities
- **Purpose**: Generate proper hreflang tags and canonical URLs
- **Behavior**:
  - Generate hreflang tags for both language versions
  - Set canonical URLs appropriately
  - Provide structured data in the correct language
- **Interface**: Utility functions for use in Astro layouts

## Data Models

### Language Preference Storage
```typescript
interface LanguagePreference {
  locale: 'en' | 'es';
  isManualSelection: boolean;
  timestamp: number;
}
```

### Page Metadata
```typescript
interface PageMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  alternateUrls: {
    en: string;
    es: string;
  };
}
```

## Error Handling

### Language Detection Failures
- **Fallback**: If language detection fails, serve Spanish content (default)
- **Logging**: Log detection failures for monitoring
- **Graceful degradation**: Ensure site remains functional without JavaScript

### Redirect Failures
- **Client-side redirects**: Use try-catch blocks around navigation
- **Fallback mechanism**: Provide manual language switcher as backup
- **Error reporting**: Log redirect failures for debugging

### Missing Translations
- **Fallback strategy**: Redirect to equivalent page in default language (Spanish)
- **404 handling**: Custom 404 pages for each language
- **Content validation**: Ensure all pages exist in both languages

## Testing Strategy

### SEO Testing
- **Lighthouse audits**: Verify improved SEO scores
- **Search console**: Monitor crawl errors and indexing
- **Meta tag validation**: Ensure proper hreflang and canonical tags
- **Structured data testing**: Validate schema markup

### Functionality Testing
- **Language detection**: Test with various browser language settings
- **Manual switching**: Verify language switcher works correctly
- **Preference persistence**: Test localStorage functionality
- **Redirect behavior**: Ensure proper redirect codes and timing

### Performance Testing
- **Page load times**: Measure impact of language detection script
- **Core Web Vitals**: Ensure no degradation in performance metrics
- **JavaScript execution**: Test script performance across devices

### Cross-browser Testing
- **Browser compatibility**: Test language detection across major browsers
- **JavaScript disabled**: Ensure graceful degradation
- **Mobile devices**: Verify functionality on mobile browsers

## Implementation Approach

### Phase 1: Core Routing Changes
1. Replace meta refresh with Spanish content in root index
2. Implement client-side language detection
3. Update Astro configuration if needed

### Phase 2: SEO Enhancements
1. Add proper hreflang tags to all pages
2. Implement canonical URL generation
3. Update sitemap generation

### Phase 3: User Experience Improvements
1. Enhance language switcher component
2. Add preference persistence
3. Implement smooth transitions

### Phase 4: Testing and Optimization
1. Comprehensive testing across browsers and devices
2. SEO validation and monitoring setup
3. Performance optimization

## Technical Considerations

### Astro i18n Configuration
The existing configuration is mostly correct:
```javascript
i18n: {
  defaultLocale: 'es',
  locales: ['en', 'es'],
  routing: {
    prefixDefaultLocale: true
  }
}
```

However, we may need to adjust `prefixDefaultLocale` to `false` to serve Spanish content directly at the root.

### Client-side vs Server-side Detection
- **Client-side chosen** for simplicity and static site compatibility
- **Server-side alternative** could be implemented with Astro's SSR mode if needed
- **Hybrid approach** possible with edge functions for enhanced performance

### SEO Impact Mitigation
- **Gradual rollout**: Implement changes incrementally to monitor SEO impact
- **Monitoring setup**: Track search rankings and crawl errors
- **Rollback plan**: Maintain ability to revert changes if issues arise