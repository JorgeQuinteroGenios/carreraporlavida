import * as bcrypt from 'bcrypt';

const SALT: number = 10;

export async function encodePassword(rawPassword: string) {
  return bcrypt.hash(rawPassword, SALT);
}

export function decodePassword(rawPassword: string, hashedPassword: string) {
  return bcrypt.compare(rawPassword, hashedPassword);
}
