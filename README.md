# INNOVEDA 🛕 - Unfolding the Soul of India

INNOVEDA is an interactive, AI-powered platform designed to bring the rich heritage of India to life. By combining stunning 3D models, Augmented Reality (AR), and a custom Large Language Model (LLM) backend, INNOVEDA offers an immersive educational experience.

## ✨ Key Features

- **Interactive 3D & AR:** Explore detailed 3D models of iconic temples and idols. View them in your own space using WebXR/AR.
- **AI Heritage Assistant:** Integrated with a custom RAG (Retrieval-Augmented Generation) pipeline, the AI assistant answers questions and generates contextual stories based on ancient scriptures.
- **Audio Narration:** On-demand text-to-speech functionality for an engaging storytelling experience.
- **Responsive Design:** A fully responsive, modern UI styled with a cultural aesthetic.

---

## 📸 Website Screenshots

### Home Page

<img width="1600" height="641" alt="image" src="https://github.com/user-attachments/assets/2c37f23f-0fef-4126-95ad-eb6ef2ec8b44" />


### 3D  View
<img width="1600" height="729" alt="image" src="https://github.com/user-attachments/assets/df8c5ce1-b8c9-4596-be6c-6e9d113dabac" />



### AI Heritage Assistant and AR Experience


<img width="1600" height="580" alt="image" src="https://github.com/user-attachments/assets/f6e5cff6-2edd-4ed9-9c44-4e0a982b3e6d" />


---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript  
- **3D Visualization:** Google `<model-viewer>` component  
- **Backend / AI (Indian Ethos API):** Python, FastAPI/HTTP Server, NLP, FAISS (for document retrieval)

---


## 🚀 How to Run Locally

### Frontend
1. Clone the repository.
2. Serve the directory using any static file server:
   ```bash
   npx serve . 
   # or 
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your browser.

### Backend (AI Server)
If you have the `codebook` backend repository:
1. Navigate to the backend directory.
2. Run the python server:
   ```bash
   python backend/server.py
   ```
   Server runs locally at `http://localhost:8000`.


   ### 📩 Assets / Contact

For assets, collaboration, or project resources, contact:

📧sonuvaishnavi39@gmail.com



## 📄 License
This project is licensed under the MIT License.
