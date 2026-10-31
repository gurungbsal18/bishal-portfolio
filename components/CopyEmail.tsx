"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail() {
  const [message, setMessage] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeout.current !== null) clearTimeout(timeout.current);
    },
    [],
  );

  async function copy() {
    if (timeout.current !== null) clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText("gurungbsal18@gmail.com");
      setMessage("Email copied.");
    } catch {
      setMessage("Copy: gurungbsal18@gmail.com");
    }
    timeout.current = setTimeout(() => setMessage(""), 6000);
  }

  return (
    <>
      <button className="copy-email" type="button" onClick={copy}>
        Copy email <span aria-hidden="true">⧉</span>
      </button>
      <span className="copy-status" role="status">
        {message}
      </span>
    </>
  );
}
