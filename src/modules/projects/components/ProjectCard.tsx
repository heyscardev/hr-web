import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
interface Props {
  project: null;
}
export const ProjectCard = ({}: Props) => {
  
  return (
    <div className="flex flex-col items-center border hover:shadow-lg hover:shadow-orange-200/50 border-orange-200 rounded p-2 hover:bg-orange-100 hover:border-orange-400 transition-all duration-1000 cursor-pointer">
      <Typography variant="subtitle1" component="div">
        LiveMax
      </Typography>
      <Typography gutterBottom variant="body2" align="center" component="div">
        Lorem ipsum dolor sit amet,
      </Typography>
      <Image
        width={80}
        height={80}
        className="w-full"
        objectFit="contain"
        alt="image"
        src={"/imgs/teslo-shop.png"}
      />
    </div>
  );
};
