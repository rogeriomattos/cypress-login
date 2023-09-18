import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles.css";

type Props = {
  buttonText?: string;
};

let trigerDialog = () => {};

const Dialog = ({ buttonText, children }: PropsWithChildren<Props>) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trigger = () =>
    dialogRef?.current?.open
      ? dialogRef?.current?.close()
      : dialogRef?.current?.showModal();
  trigerDialog = trigger;
  return (
    <>
      {buttonText && <button onClick={trigger}>{buttonText}</button>}
      <dialog ref={dialogRef}>
        <button className="close" onClick={trigger}>
          X
        </button>
        {children}
      </dialog>
    </>
  );
};

export { Dialog, trigerDialog };
