import React from "react";
import CustomDialog from "../UI/CustomDialog/CustomDialog";

const SortingInfo = ({ type }) => {
  const [isOpen, setIsOpen] = useState("");
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  return (
    <CustomDialog isOpen={isOpen} handleClose={handleDialogClose}>
      {type}
    </CustomDialog>
  );
};

export default SortingInfo;
