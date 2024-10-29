const linkInputContainer = document.getElementById("linkInputContainer");

const linkInput = document.getElementById("linkInput");

const qrcodeContainer = document.getElementById("qrcode");

const downloadBtn = document.getElementById("downloadBtn");

function showLinkInput() {
	linkInputContainer.classList.remove("hidden");
	wifiInputContainer.classList.add("hidden");
	qrcodeContainer.innerHTML = "";
	downloadBtn.disabled = true;
}

function generateQRCode() {
	let url = "";
	if (!linkInputContainer.classList.contains("hidden")) {
		url = linkInput.value;
	}
	if (url) {
		QRCode.toDataURL(
			url,
			{ width: 500, height: 500, errorCorrectionLevel: "H" },
			(err, url) => {
				if (err) {
					console.error(err);
					return;
				}
				qrcodeContainer.innerHTML = `<img src="${url}" alt="Generated QR code" width="500" height="500"/>`;
				downloadBtn.disabled = false;
				downloadBtn.onclick = () => {
					const a = document.createElement("a");
					a.href = url;
					a.download = "qrcode.png";
					a.click();
				};
			}
		);
	} else {
		qrcodeContainer.innerHTML = "";
		downloadBtn.disabled = true;
	}
}

linkInput.addEventListener("input", generateQRCode);
