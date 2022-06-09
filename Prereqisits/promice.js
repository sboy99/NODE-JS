const Problem = true;
const promise = new Promise((resolve, reject) => {
  if (Problem) reject("Problem");
  else resolve("Hello Dear");
});
// promise.then((res) => console.log(res)).catch((err) => console.log(err));
const promiseFunc = async () => {
  try {
    const data = await promise;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
promiseFunc();
