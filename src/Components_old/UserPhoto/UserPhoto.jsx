import { Avatar, Box, Button, styled } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

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

const ContainerFoto = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  height: "200px",
  position: "relative",
  backgroundColor: "rgb(207, 217, 222)",
  boxSizing: "border-box",
}));

const IconAddFoto = styled(Box)(({ theme }) => ({
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

export function UserPhoto({ changeIcon, image, setImage, avatar, setAvatar }) {
  // const [image, setImage] = useState("");
  // const [avatar, setAvatar] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
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
              </Button>{" "}
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
            src={avatar}>
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
            src={avatar}>
            M
          </Avatar>
        )}

        <img src={image} alt="" style={{ width: "100%", maxHeight: "200px" }} />
      </ContainerFoto>
    </>
  );
}
