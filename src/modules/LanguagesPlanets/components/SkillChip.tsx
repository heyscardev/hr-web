import { Chip, ChipOwnProps, Tooltip } from "@mui/material";
import { orange } from "@mui/material/colors";

interface Props {
  title?: string;
  content?: ChipOwnProps["label"];
}
export const SkillChip = ({ title, content }: Props) => {
  return (
    // <Tooltip
    //   title={"Backend"}
    //   placement="right"
    //   componentsProps={{
    //     tooltip: {
    //       style: {
    //         backgroundColor: "#fefefe",
    //         color: orange[600],
    //         border: "1px solid",
    //         borderRadius: "50px",
    //         borderColor: orange[300],
    //         fontWeight: "bolder",
    //         letterSpacing: "1px",
    //         //background: "#f1f1f1",
    //       },
    //     },
    //   }}
    // >
      <Tooltip
        title={title}
        arrow
        componentsProps={{
          tooltip: {
            style: {
              border: "1px solid",
              backgroundColor: orange[100],
              borderColor: "#c3c3c3",
              color: "#656565",
              //background: "#f1f1f1",
            },
          },
        }}
      >
        <Chip
          size="small"
          variant="outlined"
          color={"default"}
          className="shadow  "
          sx={{
            cursor: "pointer",
            userSelect: "none",
            background: orange[100],
            fontWeight: "bold",
            letterSpacing: "1px",
            color: orange[600],
            borderColor: orange[400],
            ":hover": { background: "#ffffff" },
          }}
          label={content}
        ></Chip>
      </Tooltip>
    // </Tooltip>
  );
};
