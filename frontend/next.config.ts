// frontend/next.config.ts

import type { NextConfig } from 'next';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
