export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve) => {
    const china = chinaDownload();
    const US = USDownload();
    resolve(china.then(() => US).catch(() => US));
  });
}
