import { SignJWT, jwtVerify } from "jose";

export async function sign(payload) {
  let secret = process.env.SECRET;
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60; // one hour

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}

export async function verify(token) {
  let secret = process.env.SECRET;
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  let address = payload.address;
  return address;
}
