import { ReactComponent as ArrowBack } from "./svg/arrow.svg";
import React from "react";
import classNames from "classnames";
import styles from "./profile.module.scss";
import EditForm from "../../Components/EditForm";
import {
  Avatar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Modal,
} from "@mui/material";

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditForm />
      </Modal>

      <Container
        maxWidth="sm"
        sx={{
          borderLeft: "1px solid rgb(239, 243, 244)",
          borderRight: "1px solid rgb(239, 243, 244)",
          padding: "0 !important",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0 5px 20px",
          }}
        >
          <Box className={classNames(styles.arrowSvg)}>
            <ArrowBack />
          </Box>
          <Box className={classNames(styles.containerHederText)}>
            <div>go flex</div>
            <div>post</div>
          </Box>
        </Box>
        <Box className={classNames(styles.containerImg)}>
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              position: "absolute",
              bottom: "-50px",
              left: "30px",
            }}
            alt="Remy Sharp"
            src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
          />
          <img
            // src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
            alt=""
            style={{ width: "100%", maxHeight: "200px" }}
          />
        </Box>

        <Box className={classNames(styles.containerUserInfo)}>
          <Button
            onClick={handleOpen}
            sx={{
              position: "absolute",
              borderRadius: "50px",
              right: "20px",
              top: "20px",
              border: "1px solid rgb(239, 243, 244)",
              color: "black",
              " &:hover": {
                border: "1px solid rgb(207, 217, 222)",
                background: " rgb(239, 243, 244)",
              },
            }}
            variant="outlined"
          >
            Edit profile
          </Button>
          <Typography variant="h6">go flex</Typography>
          <Typography variant="body1">@goflex175802</Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              padding: "15px 0",
            }}
          >
            {"dffddf"}
          </Typography>
          <Typography
            variant="body2"
            sx={
              {
                // paddingTop: "15px",
              }
            }
          >
            Joined September 2023
          </Typography>

          <Typography component="span" variant="body1">
            1 Following
          </Typography>
          <Typography
            component="span"
            variant="body1"
            sx={{
              paddingLeft: "10px",
            }}
          >
            0 Followers
          </Typography>
        </Box>
      </Container>
    </>
  );
}
