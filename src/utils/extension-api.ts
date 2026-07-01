
export const isExtension = typeof chrome !== 'undefined' && !!chrome.runtime?.id;

export async function getBrowserAPI() {
  if (!isExtension) {
    console.log("Not in an extension environment. Returning mock fallback.");
    return null;
  }
  
  const mod = await import("webextension-polyfill");
  console.log(mod.default)
  return mod.default;
}