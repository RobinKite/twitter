import React from "react";
import { Form, Formik } from "formik";
import Input from "../Input/Input";
import { ReactComponent as TwiterLogo } from "../../Pages/ExitLogin/svg/twiterLogo.svg";
import { ReactComponent as Apple } from "../../Pages/ExitLogin/svg/apple.svg";
import { ReactComponent as Google } from "../../Pages/ExitLogin/svg/google.svg";
import { ReactComponent as Clos } from "./svg/Clos.svg";
import classNames from "classnames";
import styles from "./LoginForm.module.scss";
import ButtonStyled from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../redux/modalLogin/actionCreators";
import { object, string } from "yup";
const LoginForm = () => {
  const schema = object().shape({
    email: string().required('Email is required').email('Email is not valid')
  })
  const initialValues={
    email: ''
  };
  const onSubmit =(values)=>{
    console.log(values)
  }


  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };
  const fonnClick = (event) => {
    // Перевіряємо, чи клік був здійснений за межами модального вікна
    if (event.currentTarget === event.target) {
      //Якщо так, то додаємо код для закриття модального вікна
      toggleModal();
    }
  };
  return (
    <div className={styles.conteiner} onClick={fonnClick} >
      <div className={styles.modalConteiner}>
        <div className={styles.loginConteiner}>
          <div className={classNames(styles.clossvg)}onClick={toggleModal} >
            <Clos />
          </div>
          <div className={classNames(styles.svgX)}>
            <TwiterLogo />
          </div>
          <h3 className={classNames(styles.titleJoin)}>Sign in to X</h3>
          <ButtonStyled endIcon={<Google />}>Sign in with Google</ButtonStyled>
          <ButtonStyled startIcon={<Apple />}>Sign up with Apple</ButtonStyled>
          <span className={styles.retreat}>or</span>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
            <Form>
              <Input
                name="email" type="email"
                placeholder= "email@"
              />
            </Form>
          </Formik>
          <ButtonStyled sx={{
           color: "white",
           backgroundColor: "rgb(0, 0, 0)",
           "&:hover": { backgroundColor: "rgb(60, 58, 58)" },
            }} >Further</ButtonStyled>
          <ButtonStyled  >Forgot your password</ButtonStyled>
          <p className={styles.textProfile}> 
            Don't have a profile? <a href="###">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
