function Component(nodeName, body) {
  let func = new Function("a", `consosole.log(a)`);
  console.log(func.toString());
  //   return func;
}
const MyCustomComponent = Component("custom-tag", {
  create: () => {
    console.log("abc");
  },
});
// const myComponent = MyCustomComponent("a", "b", "24");
