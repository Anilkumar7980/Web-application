document.addEventListener("DOMContentLoaded", function () {
  const servicesDropdown = document.getElementById("servicesDropdown");
  servicesDropdown.addEventListener("mouseover", function () {
    showDropdownContent(servicesDropdown);
  });

  function showDropdownContent(dropdown) {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.display = "block";
  }
});

const awsBtn = document.getElementById("aws");
const azureBtn = document.getElementById("azure");
const gcpBtn = document.getElementById("gcp");
const deploymentButtons = document.getElementById("deploymentButtons");
const startDeploymentBtn = document.getElementById("startDeployment");
const endDeploymentBtn = document.getElementById("endDeployment");

awsBtn.addEventListener("click", () => {
  startDeploymentBtn.style.display = "block";
  endDeploymentBtn.style.display = "block";
});

azureBtn.addEventListener("click", () => {
  startDeploymentBtn.style.display = "block";
  endDeploymentBtn.style.display = "block";
});

gcpBtn.addEventListener("click", () => {
  startDeploymentBtn.style.display = "block";
  endDeploymentBtn.style.display = "block";
});

startDeploymentBtn.addEventListener("click", () => {
  alert("Deployment started!....");
});
endDeploymentBtn.addEventListener("click", () => {
  alert("Deployment finished!....");
});
