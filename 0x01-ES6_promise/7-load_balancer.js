export default function loadBalancer(chinaDownload, USDownload) {
  // return value that promoised first
  return Promise.race([chinaDownload, USDownload]);
}
