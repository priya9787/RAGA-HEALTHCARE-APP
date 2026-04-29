export const showNotification = async () => {
  if (!("Notification" in window)) {
    alert("Notifications not supported");
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    try {
      if (navigator.serviceWorker.controller) {
        const registration = await navigator.serviceWorker.ready;

        registration.showNotification("Patient Added ✅", {
          body: "A new patient has been successfully added.",
          icon: "/vite.svg",
        });
      } else {
        // 🔥 fallback (this will work even if SW not ready)
        new Notification("Patient Alert 🚑", {
          body: "New patient added successfully!",
        });
      }

      console.log("Notification shown ✅");
    } catch (err) {
      console.error("Notification error:", err);
    }
  }
};
