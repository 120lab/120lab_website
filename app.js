// 120LAB - simple client script

// 1) Set the footer year
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Replace with your real email
const CONTACT_EMAIL = "community@120lab.org";

// 3) Copy-to-clipboard for Contact button
const copyBtn = document.getElementById("copyContactBtn");

copyBtn.addEventListener("click", async () => {
  if (CONTACT_EMAIL.includes("YOUR_EMAIL")) {
    alert("Edit CONTACT_EMAIL in app.js (search for YOUR_EMAIL@DOMAIN.COM).");
    return;
  }

  try {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    alert("Email copied: " + CONTACT_EMAIL);
  } catch (e) {
    alert("Couldn't copy automatically. Email: " + CONTACT_EMAIL);
  }
});
