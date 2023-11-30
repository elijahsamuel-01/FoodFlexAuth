import userHook from "../hook/userHook";

const HomeScreen = () => {
  const { data }: any = userHook();
  console.log("This is the userName", data?.username);

  return <div>HomeScreen {data?.username}</div>;
};

export default HomeScreen;
