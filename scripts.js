const linkInputContainer = document.getElementById("linkInputContainer");
const linkInput = document.getElementById("linkInput");
const qrcodeContainer = document.getElementById("qrcode");

function showLinkInput() {
	linkInputContainer.classList.remove("hidden");
	qrcodeContainer.innerHTML = "";
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
				qrcodeContainer.innerHTML = <img src="${url}" alt="Generated QR code" width="500" height="500"/>;
			}
		);
	}
}

linkInput.addEventListener("input", generateQRCode);