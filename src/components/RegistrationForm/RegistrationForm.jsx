import { Modal } from "@mui/material";
import { RegistrationForm as Form } from "@/forms";
// import { setCreateProfileModal } from "../../redux/slices/appSlice";
import { CloseButton, FormBox, FormTitle } from "./styleSX";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import PropTypes from "prop-types";

export const RegistrationForm = ({ handleRegModalClose, handleRegModalOpen }) => {
  // const isProfileModalActive = useSelector((state) => state.app.isProfileModalActive);

  return (
    <Modal open={handleRegModalOpen} onClose={handleRegModalClose}>
      <FormBox>
        <CloseButton onClick={handleRegModalClose}>
          <CloseSharpIcon />
        </CloseButton>
        <FormTitle variant="h2">Create your account</FormTitle>
        <Form />
      </FormBox>
    </Modal>
  );
};

RegistrationForm.propTypes = {
  handleRegModalOpen: PropTypes.bool,
  handleRegModalClose: PropTypes.func,
};

RegistrationForm.defaultProps = {
  handleRegModalOpen: false,
  handleRegModalClose: () => {},
};
