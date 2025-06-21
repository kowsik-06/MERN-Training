const validateInput = () => {
  let lastname = "aparna";
  const input = document.getElementById("myInput").value.trim().toLowerCase();

  if (input === "hello") {
    alert("👍 Correct content!");
  } else {
    alert("❌ You entered wrong content. Please check the content.");
  }
};
