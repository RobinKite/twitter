import { Stack, IconButton, Typography, styled } from "@mui/material";
import { Dialog as MuiDialog, Button as MuiButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Cross } from "@/icons";
import { createConversation, setShowDialog } from "@/redux/slices/messagingSlice";
import { SearchField, SearchResults } from "./components";

const Dialog = styled(MuiDialog)({
  "& .MuiDialog-paper": {
    maxWidth: 600,
    minWidth: 600,
    minHeight: 650,
    maxHeight: 650,
    margin: "0 auto",
    padding: "0",
    borderRadius: "1rem",
    boxShadow: "none",
  },
});

const Button = styled(MuiButton)({
  marginLeft: "auto",
  boxShadow: "none",
  color: "white",
  backgroundColor: "#0F1419",
  fontWeight: 600,
  padding: "0.225rem 1rem",
  marginRight: "0.6rem",
  transition: "background-color 200ms",

  ":disabled": {
    color: "white",
    opacity: 0.5,
  },
  ":hover": {
    color: "white",
    backgroundColor: "#282C30",
  },
});

const Wrapper = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  paddingInline: "0.5rem",
  paddingTop: "0.5rem",
});

export const CreateConversationDialog = () => {
  const dispatch = useDispatch();
  const showDialog = useSelector((state) => state.messaging.showDialog);
  const selectedUsers = useSelector((state) => state.messaging.selectedUsers);

  const handleClose = () => dispatch(setShowDialog(false));
  const handleProceed = () => {
    // TODO: 👉 Redirect to existent conversation if found
    dispatch(createConversation(selectedUsers));
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={showDialog}>
      <Wrapper>
        <IconButton onClick={handleClose}>
          <Cross />
        </IconButton>
        <Typography sx={{ marginLeft: "1.5rem", fontWeight: 600, fontSize: "1.25rem" }}>
          New message
        </Typography>
        <Button onClick={handleProceed} disabled={selectedUsers.length === 0}>
          Next
        </Button>
      </Wrapper>
      <SearchField />
      {/* TODO: 👉 Show suggested users instead of results initially */}
      <SearchResults />
    </Dialog>
  );
};
