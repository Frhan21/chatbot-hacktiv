const express = require("express");
require("dotenv").config();

const fs = require("fs");
const path = require('path')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const multer = require("multer");

const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash",
  generationConfig: {
    temperature: 0.6,
  },
});

const upload = multer({ dest: "uploads/" });

app.post("/generate-text", async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const imageToGenerativePart = (filePath) => ({
  inlineData: {
    data: fs.readFileSync(filePath).toString("base64"),
    mimeType: "image/png",
  },
});

app.post("/generate-image", upload.single("image"), async (req, res) => {
  const { prompt } = req.body || "Describe the image";
  const filePath = req.file.path
  const image = imageToGenerativePart(filePath);

  try {
    const result = await model.generateContent([prompt, image]);
    const response = await result.response.text();
    res.json({ output: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/generate-doc", upload.single("document"), async (req, re) => {
  const filepath = req.file.path;
  const buffer = fs.readFileSync(filepath);
  const base64 = buffer.toString("base64");
  const mimeType = req.file.mimetype;

  try {
    const docPart = {
      inlineData: {
        data: base64,
        mimeType,
      },
    };

    const result = await model.generateContent([
      "Analyse this document: ",
      docPart,
    ]);
    const response = await result.response.text();
    re.json({ output: response });
  } catch (error) {
    re.status(500).json({ error: error.message });
  }
});

app.post("/generate-audio", upload.single("audio"), async (req, res) => {
  const audioPath = req.file.path;
  const audioBuffer = fs.readFileSync(audioPath);
  const base64Audio = audioBuffer.toString("base64");
  const audioPart = {
    inlineData: {
      data: base64Audio,
      mimeType: "audio/mpeg",
    },
  };

  try {
    const result = await model.generateContent(["Transcribe or analyze the following audio", audioPart]);
    const response = await result.response.text();

    res.json({ output: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
