import { MyUniverse } from "../MyUniverse";

interface Props {}
 const page = ({}: Props) => {
  return (
    <div className="z-10">
      <MyUniverse />
    </div>
  );
};
export default page;