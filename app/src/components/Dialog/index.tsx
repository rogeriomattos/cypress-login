import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles.css";

type Props = {
  buttonText?: string;
  id: string;
};

let trigerDialog = (id: string) => {
  const dialog = document.getElementById(id) as any;
  if (dialog?.open) {
    dialog?.close();
  } else {
    dialog?.showModal();
  }
};

const Dialog = ({ id, buttonText, children }: PropsWithChildren<Props>) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trigger = () =>
    dialogRef?.current?.open
      ? dialogRef?.current?.close()
      : dialogRef?.current?.showModal();

  return (
    <>
      {buttonText && <button onClick={trigger}>{buttonText}</button>}
      <dialog ref={dialogRef} id={id}>
        <button className="close" onClick={trigger}>
          X
        </button>
        {children}
      </dialog>
    </>
  );
};

export { Dialog, trigerDialog };
