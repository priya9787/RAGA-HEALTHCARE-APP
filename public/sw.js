self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  self.skipWaiting(); // ✅ activate immediately
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
  event.waitUntil(self.clients.claim()); // ✅ take control
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});

self.addEventListener("push", function (event) {
  const data = event.data?.text() || "New Notification";

  event.waitUntil(
    self.registration.showNotification("Healthcare Update", {
      body: data,
    })
  );
});