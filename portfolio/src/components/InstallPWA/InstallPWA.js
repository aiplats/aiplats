import React, { useEffect, useState } from "react";
import './InstallPWA.css'

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
    <div className="pwa-container">
      {isInstallable && (
        <button
          onClick={handleInstallClick}
          className="install-btn"
        >
          📲 Install Aiplats App
        </button>
      )}
      </div>
    </>
  );
}

export default InstallPWA;
