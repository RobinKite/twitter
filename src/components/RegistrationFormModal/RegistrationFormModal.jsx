import { Modal } from "@mui/material";
import { RegistrationForm as Form } from "@/forms";
// import { setCreateProfileModal } from "../../redux/slices/appSlice";
import { CloseButtonSX, ModalBoxSX, ModalTitleSX } from "./styleSX";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import PropTypes from "prop-types";

export const RegistrationFormModal = ({ handleRegModalClose, handleRegModalOpen }) => {
  // const isProfileModalActive = useSelector((state) => state.app.isProfileModalActive);

  return (
    <Modal open={handleRegModalOpen} onClose={handleRegModalClose}>
      <ModalBoxSX>
        <CloseButtonSX onClick={handleRegModalClose}>
          <CloseSharpIcon />
        </CloseButtonSX>
        <ModalTitleSX variant="h2">Create your account</ModalTitleSX>
        <Form />
      </ModalBoxSX>
    </Modal>
  );
};

RegistrationFormModal.propTypes = {
  handleRegModalOpen: PropTypes.bool,
  handleRegModalClose: PropTypes.func,
};

RegistrationFormModal.defaultProps = {
  handleRegModalOpen: false,
  handleRegModalClose: () => {},
};
