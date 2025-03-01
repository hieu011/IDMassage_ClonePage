import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ["bizweb.dktcdn.net"],
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);  
