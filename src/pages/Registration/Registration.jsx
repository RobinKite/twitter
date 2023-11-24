import { useDispatch } from "react-redux";
import { Footer, Button } from "../../components";
import { setCreateProfileModal, setModal } from "../../redux/slices/appSlice";
import { TwitterIcon, Apple, Google } from "@/icons";
import styles from "./Registration.module.scss";

export const Registration = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setModal());
  };

  const handleCreateElementClick = () => {
    dispatch(setCreateProfileModal());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <TwitterIcon className={styles.logo} />
        </div>

        <div className={styles.exitLogin}>
          <h1 className={styles.titleLogin}>Here and now</h1>
          <h5 className={styles.titleJoin}>Join today.</h5>
          <Button startIcon={<Google size={22} />}>Sign up with Google</Button>
          <Button startIcon={<Apple size={22} />}>Sign up with Apple</Button>
          <span className={styles.retreat}>or</span>
          <Button
            onClick={handleCreateElementClick}
            sx={{
              color: "white",
              backgroundColor: "rgb(8, 139, 226)",
              "&:hover": { backgroundColor: "rgb(26, 26, 172)" },
            }}>
            Create a profile
          </Button>
          <p className={styles.titleProfile}>Already have a profile?</p>
          <Button onClick={toggleModal}>Sign in</Button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* {firstModalOpen && <LoginForm open={firstModalOpen} />} */}
    </div>
  );
};
