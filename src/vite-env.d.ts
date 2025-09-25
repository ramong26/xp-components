/// <reference types="vite/client" />
import { expect, vi } from 'vitest';
vi.mock('whatwg-url', () => ({
  URL: class {
    constructor() {}
  }
}));
