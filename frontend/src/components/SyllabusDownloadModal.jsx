import { useEffect, useRef } from "react";
import { DemoFormFields, useDemoForm } from "./DemoForm.jsx";

export default function SyllabusDownloadModal({ pdfUrl, onClose }) {
  const { form, update, status, errorMsg, handleSubmit } = useDemoForm("syllabus-download-form");
  const triggeredRef = useRef(false);
  const dialogRef = useRef(null);

  // Once the enquiry form succeeds, kick off the actual PDF download.
  useEffect(() => {
    if (status === "success" && !triggeredRef.current) {
      triggeredRef.current = true;
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }, [status, pdfUrl]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="syllabus-modal__overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="syllabus-modal" role="dialog" aria-modal="true" aria-labelledby="syllabus-modal-title" ref={dialogRef} tabIndex={-1}>
        <button type="button" className="syllabus-modal__close" aria-label="Close" onClick={onClose}>
          ×
        </button>

        {status === "success" ? (
          <div className="syllabus-modal__success">
            <span className="syllabus-modal__check" aria-hidden="true">✓</span>
            <h3 id="syllabus-modal-title">Thanks — your download has started</h3>
            <p>We've also sent your details to our team; expect a quick call to answer any questions.</p>
            <a href={pdfUrl} download className="btn btn-primary btn-block">
              Download didn't start? Click here
            </a>
          </div>
        ) : (
          <>
            <p className="syllabus-modal__eyebrow">Download the Syllabus</p>
            <h3 id="syllabus-modal-title" className="syllabus-modal__title">
              Fill these details to download the syllabus
            </h3>
            <DemoFormFields
              form={form}
              update={update}
              status={status}
              errorMsg={errorMsg}
              handleSubmit={handleSubmit}
              compact
              hideHeading
              submitLabel="Download →"
            />
          </>
        )}
      </div>
    </div>
  );
}
