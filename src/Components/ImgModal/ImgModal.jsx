import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material";


const ModalBox = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // position: "relative",
    maxWidth: "700px",
    width: "100%",
    height:'100%',
    // minHeight: "30em",
    // maxHeight: "55em",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: "white",
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "flex-start",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: 24,
    paddingLeft: 16,
    paddingRight: 16,
    "@media(max-width: 700px)": {
      minWidth: "100%",
      minHeight: "100%",
    },
  }));


  export default function ImgModal({imageUrl,onClose  }) {
    // const { open } = props;
    // const dispatch = useDispatch();
    // const toggleModalPost = () => {
    //   dispatch(setModalPost());
    // };
  
    // const fonnClick = (event) => {
    //   // Перевіряємо, чи клік був здійснений за межами модального вікна
    //   if (event.currentTarget === event.target) {
    //     //Якщо так, то додаємо код для закриття модального вікна
    //     toggleModalPost();
    //   }
    // };
  
    return (
      <div>
        <Modal
          // open={open}
          // onClose={fonnClick}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
          <img src={imageUrl} alt="Full Image" style={{ width: "100%", objectFit: "cover" }}/>
          <button onClick={onClose}>Закрити</button>
          </ModalBox>
        </Modal>
      </div>
    );
  }