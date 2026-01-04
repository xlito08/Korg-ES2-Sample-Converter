const fileInput = document.getElementById("fileInput");
const convertBtn = document.getElementById("convertBtn");
const status = document.getElementById("status");
const download = document.getElementById("download");

const TARGET_SR = 48000;

convertBtn.onclick = async () => {
  if (!fileInput.files.length) {
    alert("Bitte Datei auswählen");
    return;
  }

  const file = fileInput.files[0];
  status.textContent = "Datei wird geladen...";

  const arrayBuffer = await file.arrayBuffer();
  const audioCtx = new AudioContext();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  status.textContent = "Resampling auf 48 kHz...";

  const offlineCtx = new OfflineAudioContext(
    1,
    audioBuffer.duration * TARGET_SR,
    TARGET_SR
  );

  const source = offlineCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(offlineCtx.destination);
  source.start();

  const renderedBuffer = await offlineCtx.startRendering();
  const wavBlob = audioBufferToWav(renderedBuffer);

  const url = URL.createObjectURL(wavBlob);
  const outName = file.name.replace(/\.[^/.]+$/, "") + "_KORG_ES2.wav";

  download.href = url;
  download.download = outName;
  download.textContent = "⬇ Download KORG ES2 WAV";
  download.style.display = "block";

  status.textContent = "Fertig ✅";
};

/* ================= WAV ENCODER ================= */

function audioBufferToWav(buffer) {
  const channelData = buffer.getChannelData(0);
  const length = channelData.length * 2;
  const bufferOut = new ArrayBuffer(44 + length);
  const view = new DataView(bufferOut);

  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + length, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, TARGET_SR, true);
  view.setUint32(28, TARGET_SR * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, length, true);

  let offset = 44;
  for (let i = 0; i < channelData.length; i++) {
    let sample = Math.max(-1, Math.min(1, channelData[i]));
    view.setInt16(offset, sample * 0x7fff, true);
    offset += 2;
  }

  return new Blob([view], { type: "audio/wav" });
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
