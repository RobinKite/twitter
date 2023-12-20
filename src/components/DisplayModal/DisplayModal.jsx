import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { ButtonPost } from "../CommentPost/styledSX";
import { Twitter } from "@/icons";
import { MdVerified } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import {
  DialogArticleSX,
  DialogContainerSX,
  DialogContentSX,
  DialogContentTextSX,
  DialogTitleSX,
  FormControlLabelSX,
  FormGroupTitleSX,
  FormLabelsContainerSX,
  TwitterAvatarSX,
  checkIconSX,
} from "./stylesSX";
import { Themes } from "@/themes/theme";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMode } from "@/redux/slices/appSlice";
import { storage } from "@/services";

export function DisplayModal({ open, onClose }) {
  const dispatch = useDispatch();
  const savedStorageMode = storage._get("chosenMode");
  const chosenMode = useSelector((state) => state.app.currentMode);
  const currentMode = savedStorageMode?.length > 0 ? savedStorageMode : chosenMode;
  const handleChange = () => {
    dispatch(setCurrentMode(Themes.LIGHT === currentMode ? Themes.DARK : Themes.LIGHT));
    storage._set("chosenMode", Themes.LIGHT === currentMode ? Themes.DARK : Themes.LIGHT);
  };

  return (
    <Dialog onClose={onClose} open={open} sx={DialogContainerSX}>
      <DialogTitle sx={DialogTitleSX}>Customize your view</DialogTitle>
      <DialogContent sx={DialogContentSX}>
        <DialogContentText sx={DialogContentTextSX}>
          These settings affect all the X accounts on this browser.
        </DialogContentText>
        <Stack sx={DialogArticleSX}>
          <Stack sx={TwitterAvatarSX}>
            <Twitter fill="#fff" size="30px" />
          </Stack>
          <Stack>
            <Stack direction="row" sx={{ alignItems: "center", fontSize: "15px" }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  color: "rgb(15, 20, 25)",
                }}>
                X
              </Typography>
              <MdVerified
                fill="rgb(29, 150, 240)"
                size={18}
                style={{ marginLeft: "2px", marginRight: "4px" }}
              />{" "}
              @X &middot; 3h
            </Stack>
            <Typography sx={{ color: "rgb(15,20,25)", fontSize: "14px" }}>
              At the heart of X are short messages called posts — just like this one —
              which can include photos, videos, links, text, hashtags, and mentions like
              <Typography component="span" sx={{ color: "rgb(29, 150, 240)" }}>
                {" "}
                @X
              </Typography>
              .
            </Typography>
          </Stack>
        </Stack>
        <FormGroup>
          <Typography component="h6" sx={FormGroupTitleSX}>
            Background
          </Typography>
          <Stack sx={FormLabelsContainerSX}>
            <FormControlLabel
              sx={FormControlLabelSX}
              control={
                <Stack sx={{ position: "relative" }}>
                  <Radio
                    checked={currentMode === Themes.LIGHT}
                    value="Default"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "Default" }}
                    onChange={handleChange}
                    sx={{
                      "& .MuiSvgIcon-root ": {
                        color:
                          currentMode === Themes.LIGHT
                            ? "transparent"
                            : "rgb(66, 83, 100)",
                        opacity: currentMode === Themes.LIGHT ? 0 : 1,
                      },

                      "& .css-1hhw7if-MuiSvgIcon-root": {
                        display: "none",
                      },
                    }}
                  />
                  {currentMode === Themes.LIGHT && (
                    <BsCheckLg size={20} color="#fff" style={checkIconSX} />
                  )}
                </Stack>
              }
              label="Default"
            />

            <FormControlLabel
              sx={[
                FormControlLabelSX,
                {
                  backgroundColor: "#000",
                  color: "rgb(66, 83, 100)",
                  "& span": {
                    color: "#fff",
                  },
                },
              ]}
              control={
                <Stack sx={{ position: "relative" }}>
                  <Radio
                    checked={currentMode === Themes.DARK}
                    value="Light out"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "Light out" }}
                    onChange={handleChange}
                    sx={{
                      "& .MuiSvgIcon-root ": {
                        color:
                          currentMode === Themes.DARK
                            ? "transparent"
                            : "rgb(66, 83, 100)",
                        opacity: currentMode === Themes.DARK ? 0 : 1,
                      },
                      "& .css-1hhw7if-MuiSvgIcon-root": {
                        display: "none",
                      },
                    }}
                  />

                  {currentMode === Themes.DARK && (
                    <BsCheckLg size={20} color="#fff" style={checkIconSX} />
                  )}
                </Stack>
              }
              label="Light out"
            />
          </Stack>
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <ButtonPost
          type="button"
          onClick={onClose}
          sx={{ margin: "16px 0 0", maxWidth: "71px", minHeight: "36px" }}>
          Done
        </ButtonPost>
      </DialogActions>
    </Dialog>
  );
}

DisplayModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
