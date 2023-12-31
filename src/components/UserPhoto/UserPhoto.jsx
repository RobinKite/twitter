import { Avatar, Box, Button, styled } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PropTypes from "prop-types";
import { Themes } from "@/themes/theme";

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

const ContainerPhoto = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  height: "200px",
  position: "relative",
  backgroundColor: theme.palette[theme.palette.mode].accent, //change to grey
  boxSizing: "border-box",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const IconAddPhoto = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  // backgroundColor: "rgba(15, 20, 25, 0.75)",a
  backgroundColor: theme.palette.common.secondary,
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
}));
const IconAddAvatar = styled(Box)(() => ({
  position: "absolute",
  top: "183px",
  left: "44px",
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
      <ContainerPhoto
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === Themes.LIGHT
              ? theme.palette.light.banner
              : theme.palette.dark.banner,
        }}>
        {changeIcon ? (
          <>
            <IconAddPhoto>
              <Button
                component="label"
                endIcon={
                  <AddAPhotoIcon
                    sx={{
                      margin: "0",
                      // color: "white"
                      color: (theme) => theme.palette[theme.palette.mode].primary,
                      marginRight: "10px",
                    }}
                  />
                }
                sx={{
                  "& .css-9tj150-MuiButton-endIcon": {
                    margin: "0",
                  },
                }}>
                <VisuallyHiddenInput
                  onChange={handleFileChange}
                  accept="image/*"
                  type="file"
                />
              </Button>
            </IconAddPhoto>
          </>
        ) : null}

        <Avatar
          changeicon={"false"}
          sx={{
            width: "100px",
            height: "100px",
            position: "absolute",
            bottom: "-50px",
            left: "30px",
          }}
          alt="Remy Sharp"
          src={avatarUrl}></Avatar>

        {changeIcon ? (
          <IconAddAvatar>
            <Button
              component="label"
              endIcon={
                <AddAPhotoIcon
                  sx={{
                    margin: "0px",
                    // color: "white"
                    color: (theme) => theme.palette[theme.palette.mode].primary,
                    marginRight: "10px",
                  }}
                />
              }
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
          </IconAddAvatar>
        ) : null}
        <img
          src={imageUrl}
          alt=""
          style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </ContainerPhoto>
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
