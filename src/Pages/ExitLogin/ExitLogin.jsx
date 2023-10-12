import React from "react";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import styles from "./ExitLogin.module.scss";
import classNames from "classnames";
import { ReactComponent as TwiterLogo } from "./svg/twiterLogo.svg";
import { ReactComponent as Apple } from "./svg/apple.svg";
import { ReactComponent as Google } from "./svg/google.svg";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../redux/actions/modalLogin";
import ButtonStyled from "../../Components/Button/Button";


const ExitLogin = ({ setIsLog, isLog }) => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };

   const navigate = useNavigate();

  
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.conteiner)}>
        <div className={classNames(styles.svgX)}>
          <TwiterLogo />
        </div>

        <div className={classNames(styles.exitLogin)}>
          <h1 className={classNames(styles.titleLogin)}>Here and now</h1>
          <h5 className={classNames(styles.titleJoin)}>Join today.</h5>
          <ButtonStyled endIcon={<Google />}>Sign in with Google</ButtonStyled>
          <ButtonStyled startIcon={<Apple />}>Sign up with Apple</ButtonStyled>
          <span className={styles.retreat}>or</span>
          <ButtonStyled
            onClick={() => navigate("/registration")}
            sx={{
              color: "white",
              backgroundColor: "rgb(8, 139, 226)",
              "&:hover": { backgroundColor: "rgb(26, 26, 172)" },
            }}
          >
            Create a profile
          </ButtonStyled>
          <p className={classNames(styles.titleProfile)}>
            Already have a profile?
          </p>

          <ButtonStyled onClick={toggleModal}>Exit</ButtonStyled>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ExitLogin;
