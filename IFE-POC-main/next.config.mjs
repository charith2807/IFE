/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "my-stapi-bucket.s3.us-east-2.amazonaws.com"],
  },
};

export default nextConfig;
