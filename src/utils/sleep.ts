export const sleep = async (seconds: number) => {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};
