import { Modal } from "@mui/material";
import { RegistrationForm } from "@/forms";
import { CloseButtonSX, ModalBoxSX, ModalTitleSX } from "./styleSX";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import PropTypes from "prop-types";

export const RegistrationFormModal = ({ handleRegModalClose, handleRegModalOpen }) => {
  return (
    <Modal open={handleRegModalOpen} onClose={handleRegModalClose}>
      <ModalBoxSX>
        <CloseButtonSX onClick={handleRegModalClose}>
          <CloseSharpIcon />
        </CloseButtonSX>
        <ModalTitleSX variant="h2">Create your account</ModalTitleSX>
        <RegistrationForm />
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
