export const envConfig = {
  MAP_TOKEN: process.env['MAP_TOKEN'] || process.env['NEXT_PUBLIC_MAP_TOKEN'],
  API_PATH: process.env['API_PATH'] || process.env['NEXT_PUBLIC_API_PATH'],
  STORAGE_BUCKET_URL:
    process.env['STORAGE_BUCKET_URL'] ||
    process.env['NEXT_PUBLIC_STORAGE_BUCKET_URL'],
  JWT_SECRETKEY:
    process.env['JWT_SECRETKEY'] || process.env['NEXT_PUBLIC_JWT_SECRETKEY'],
};
