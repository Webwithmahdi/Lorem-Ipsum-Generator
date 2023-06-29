const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.`;

const copyButton = document.querySelector(".copy-button");

const trashButton = document.querySelector(".trash-button");

const generateAreaText = document.querySelector(".generate-area-text textarea");

const generateAreaType = document.querySelectorAll(".generate-area-type input");

const createButton = document.querySelector(".create-lorem-button");

const loremTextCount = document.querySelector(".dynamic-area input");

const generateAreaTitle = document.querySelector(".generate-area-title h2");

createButton.addEventListener("click", function () {
  if (generateAreaType[0].checked) {
    for (let i = 1; i <= loremTextCount.value; i++) {
      generateAreaText.value = "";
      generateAreaText.value = loremText.split(" ", i).join(" ") + " ";
    }
  }
  else if (generateAreaType[1].checked) {
    for (let i = 1; i <= loremTextCount.value; i++) {
      generateAreaText.value = "";
      generateAreaText.value += loremText.split('.',i);
    }
  }
  else{
    for (let i = 1; i <= loremTextCount.value; i++) {
        generateAreaText.value = "";
        generateAreaText.value += loremText;
      }
  }
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(generateAreaText.value);
});
trashButton.addEventListener("click", function () {
  generateAreaText.value = "";
});
