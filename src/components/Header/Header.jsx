import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto my-4 py-4 border-b-2 border-purple-300">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img className="w-11" src={profile} alt="" />
    </div>
  );
};

export default Header;
