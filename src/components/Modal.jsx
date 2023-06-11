import React from 'react';
import { createPortal } from "react-dom";

const Modal = ({ setOpen }) => {
  return createPortal(
    <div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: "linear",
        duration: 0.5,
      }}
    >
      <p onClick={() => setOpen(false)}>✕</p>
      <iframe
        title="video"
        width="600"
        height="430"
        frameborder="0"
        src={`https://www.youtube.com/embed/uVju5--RqtY?modestbranding=1&amp;rel=0&amp;showinfo=0`}
      ></iframe>
    </div>
  
  )
}

export default Modal
