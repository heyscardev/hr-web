import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props extends DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  withButtons?: boolean;
  disablePadding?: boolean;
}
export const Modal = ({
  open,
  onClose,
  withButtons = false,
  disablePadding = false,
  title,
  children,
  ...modal
}: Props) => {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        {...modal}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent
          className="bg-transparent"
          style={
            disablePadding
              ? {
                  padding: 0,
                }
              : {}
          }
        >
          {children}
        </DialogContent>
        {withButtons && (
          <DialogActions>
            <Button onClick={onClose}>Disagree</Button>
            <Button onClick={onClose}>Agree</Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
};
