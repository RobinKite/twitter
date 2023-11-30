import { Avatar, Box, Button, styled } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PropTypes from "prop-types";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ContainerFoto = styled(Box)(() => ({
  maxWidth: "600px",
  width: "100%",
  height: "200px",
  position: "relative",
  backgroundColor: "#1d9bf0",
  boxSizing: "border-box",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const IconAddFoto = styled(Box)(() => ({
  width: "40px",
  height: "40px",
  backgroundColor: "rgba(15, 20, 25, 0.75)",
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
}));

export function UserPhoto({
  changeIcon,
  imageUrl,
  setImageUrl,
  avatarUrl,
  setAvatarUrl,
  setFileForServer,
  setFileForServerAvatar,
}) {
  // const [image, setImage] = useState("");
  // const [avatar, setAvatar] = useState("");
  // const image = URL.createObjectURL(file)
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setFileForServer(file);
    }
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const avatarUrl = URL.createObjectURL(file);
      setAvatarUrl(avatarUrl);
      setFileForServerAvatar(file);
    }
  };
  return (
    <>
      <ContainerFoto>
        {changeIcon ? (
          <>
            <IconAddFoto>
              <Button
                component="label"
                endIcon={<AddAPhotoIcon sx={{ margin: "0", color: "white" }} />}
                sx={{
                  "& .css-9tj150-MuiButton-endIcon": {
                    margin: "0px",
                  },
                }}>
                <VisuallyHiddenInput
                  onChange={handleFileChange}
                  accept="image/*"
                  type="file"
                />
              </Button>
            </IconAddFoto>
          </>
        ) : null}

        {changeIcon ? (
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              position: "absolute",
              bottom: "-50px",
              left: "30px",
            }}
            alt="Remy Sharp"
            src={avatarUrl}>
            <Button
              component="label"
              endIcon={<AddAPhotoIcon sx={{ margin: "0px", color: "white" }} />}
              sx={{
                "& .css-9tj150-MuiButton-endIcon": {
                  margin: "0px",
                },
              }}>
              <VisuallyHiddenInput
                onChange={handleAvatarChange}
                accept="image/*"
                type="file"
              />
            </Button>
          </Avatar>
        ) : (
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              position: "absolute",
              bottom: "-50px",
              left: "30px",
            }}
            alt="Remy Sharp"
            src={avatarUrl}>
            M
          </Avatar>
        )}

        <img src={imageUrl} alt="" style={{ width: "100%", maxHeight: "200px" }} />
      </ContainerFoto>
    </>
  );
}

UserPhoto.propTypes = {
  setAvatarUrl: PropTypes.func,
  changeIcon: PropTypes.bool,
  avatarUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  setImageUrl: PropTypes.func,
  setFileForServer: PropTypes.func,
  setFileForServerAvatar: PropTypes.func,
};
