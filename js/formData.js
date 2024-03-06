let storedFormData = {};

function saveFormData(data) {
  storedFormData = data;
}

function getStoredFormData() {
  return storedFormData;
}

module.exports = {
  saveFormData,
  getStoredFormData,
};