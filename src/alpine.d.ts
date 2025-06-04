// Type declarations for Alpine.js
declare module 'alpinejs' {
  interface Alpine {
    start(): void;
    plugin(plugin: any): void;
    store(name: string, value: any): void;
  }
  
  const alpine: Alpine;
  export default alpine;
}

declare module '@alpinejs/collapse' {
  const collapse: any;
  export default collapse;
}

// Add Alpine to window object
interface Window {
  Alpine: any;
}
