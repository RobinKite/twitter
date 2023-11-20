import React from "react";
import Footer from "../../Components/Footer/Footer";

import styles from "./ExitLogin.module.scss";
import classNames from "classnames";
import { ReactComponent as TwiterLogo } from "./svg/twiterLogo.svg";
import { ReactComponent as Apple } from "./svg/apple.svg";
import { ReactComponent as Google } from "./svg/google.svg";
import { useDispatch } from "react-redux";

import ButtonStyled from "../../Components/Button/Button";
import { setCreateProfileModal, setModal } from "../../reduxToolkit/slices/appSlice";

const ExitLogin = ({ setIsLog, isLog }) => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };

  const handleCreateElementClick = () => {
    dispatch(setCreateProfileModal());
  };

  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.conteiner)}>
        <div className={classNames(styles.svgX)}>
          <TwiterLogo />
        </div>

        <div className={classNames(styles.exitLogin)}>
          <h1 className={classNames(styles.titleLogin)}>Here and now</h1>
          <h5 className={classNames(styles.titleJoin)}>Join today.</h5>
          <ButtonStyled endIcon={<Google />}>Sign up with Google</ButtonStyled>
          <ButtonStyled startIcon={<Apple />}>Sign up with Apple</ButtonStyled>
          <span className={styles.retreat}>or</span>
          <ButtonStyled
            onClick={handleCreateElementClick}
            sx={{
              color: "white",
              backgroundColor: "rgb(8, 139, 226)",
              "&:hover": { backgroundColor: "rgb(26, 26, 172)" },
            }}>
            Create a profile
          </ButtonStyled>
          <p className={classNames(styles.titleProfile)}>Already have a profile?</p>

          <ButtonStyled onClick={toggleModal}>Sign in</ButtonStyled>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* {firstModalOpen && <LoginForm open={firstModalOpen} />} */}
    </div>
  );
};

export default ExitLogin;
