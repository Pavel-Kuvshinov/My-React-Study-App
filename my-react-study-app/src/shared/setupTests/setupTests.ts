import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import { expect, beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './server';

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
