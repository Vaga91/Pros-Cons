import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";
import { setErrorModal } from "../../../redux/actions/ErrorActions";

const ErrorModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);

  const handleClose = () => {
    dispatch(setErrorModal({ ...error, show: false }));
  };

  return (
    <Dialog open={error?.show} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{error?.title || t("modal.error.title")}</DialogTitle>
      {!!error?.message && <DialogContent>{error.message}</DialogContent>}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {error.closeTxt || t("modal.close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(ErrorModal);
