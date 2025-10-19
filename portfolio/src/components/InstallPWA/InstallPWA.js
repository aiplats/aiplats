import React, { useEffect, useState } from "react";

function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      // Prevent default mini-infobar prompt
      event.preventDefault();
      // Store the event for later use
      setDeferredPrompt(event);
      // Show your custom button
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for user's choice
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User choice:", outcome);

    // Hide the install button after installing or dismissing
    setIsInstallable(false);
    setDeferredPrompt(null);
  };

  return (
    <>
      {isInstallable && (
        <button
          onClick={handleInstallClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
          }}
        >
          📲 Install Aiplats App
        </button>
      )}
    </>
  );
}

export default InstallPWA;
