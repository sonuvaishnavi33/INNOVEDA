document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE ---
    // This has been updated to include all 5 heritage sites.
    const heritageData = [
        {
            id: 'puri-jagannath',
            name: 'Jagannath Temple – Puri, Odisha',
            mainExplanation: 'The Jagannath Temple in Puri, Odisha, built in the 12th century by King Anantavarman Chodaganga Deva, is one of the four sacred Char Dham pilgrimage sites. Dedicated to Lord Jagannath, Balabhadra, and Subhadra, the temple is famous for its 65-meter shikhara, Kalinga-style architecture, wooden deities replaced in the Nabakalebara ritual, the grand Rath Yatra festival, and the world’s largest temple kitchen preparing Mahaprasad.',
            qrCodeImg: 'assets/images/jagannath_diety.jpg',
            submodels: [
                {
                    name: 'Main Temple',
                    modelSrc: 'assets/models/Jagannath_Temple.glb', // Your existing model
                    explanation: 'The main temple features a towering shikhara crowned with Lord Vishnu’s chakra, supported by four sections—Vimana, Jagamohana, Nata Mandapa, and Bhoga Mandapa—built in Kalinga style with intricate carvings and daily-flag changing rituals.',
                    narration: 'Behold the majestic tower of the Jagannath Temple, its spire rising proudly into the sky, crowned by the sacred chakra and eternal flag, carrying centuries of prayers and devotion.'
                },
                {
                    name: 'Diety',
                    modelSrc: 'assets/models/Jagannath_alter.glb', // Your existing model
                    explanation: 'The sanctum’s altar, called Ratna Vedi, houses the wooden idols of Jagannath, Balabhadra, Subhadra, and the Sudarshana Chakra, symbolizing compassion and eternity, and serving as the heart of all daily and festive rituals.',
                    narration: 'Here rests the divine altar of Puri, where the wide-eyed forms of Jagannath, Balabhadra, and Subhadra radiate timeless love and spiritual power.'
                }
            ]
        },
        {
            id: 'murdeshwar-temple',
            name: 'Murdeshwar Temple – Karnataka',
            mainExplanation: 'The Murdeshwar Temple in Karnataka is dedicated to Lord Shiva and located on the Arabian Sea coast. It is renowned for its massive 20-story Raja Gopura and the world’s second tallest Shiva statue, standing at 123 feet, overlooking the sea, making it a unique blend of devotion and scenic beauty.',
            qrCodeImg: 'assets/images/murdeshwar-qr.png', // Add your QR image here
            submodels: [
                {
                    name: 'Main Temple',
                    modelSrc: 'assets/models/Murdeshwar_Temple.glb', // Add your .glb model here
                    explanation: 'The main temple, rebuilt in the Dravidian style, features a towering Raja Gopura of 249 feet with an elevator offering panoramic sea views, while the sanctum enshrines the revered Shiva linga.',
                    narration: 'Witness the Murdeshwar Temple, its towering Raja Gopura standing tall against the sea breeze, guiding devotees into the sanctum of Lord Shiva’s eternal presence.'
                },
                {
                    name: 'Shiva Idol',
                    modelSrc: 'assets/models/Murdeshwar_Mahadev.glb', // Add your .glb model here
                    explanation: 'The colossal 123-foot Shiva idol sits on Kanduka Hill, facing the Arabian Sea, symbolizing divine grandeur and peace, and is illuminated beautifully at night.',
                    narration: 'Gaze upon the magnificent Shiva idol of Murdeshwar, the towering guardian of the sea, radiating divine strength, peace, and eternal majesty.'
                }
            ]
        },
        {
            id: 'padmanabhaswamy-temple',
            name: 'Padmanabhaswamy Temple – Thiruvananthapuram, Kerala',
            mainExplanation: 'The Padmanabhaswamy Temple in Thiruvananthapuram, Kerala, is one of the richest temples in the world, dedicated to Lord Vishnu. Built in Dravidian style, it is famous for its grand gopuram and the deity reclining on Ananta Shesha, symbolizing cosmic balance and eternity.',
            qrCodeImg: 'assets/images/padmanabhaswamy-qr.png', // Add your QR image here
            submodels: [
                {
                    name: 'Main Temple',
                    modelSrc: 'assets/models/Padmanabhaswamy_LordVishnu.glb', // Add your .glb model here
                    explanation: 'The temple’s main shrine is a Dravidian-style structure with a 100-foot gopuram, intricately carved corridors, and heavily fortified walls guarding treasures of immense historical and spiritual value.',
                    narration: 'Marvel at the grandeur of Padmanabhaswamy Temple, where divine artistry and timeless devotion blend within its towering gopuram and sacred halls.'
                },
                {
                    name: 'Lord Vishnu Statue',
                    modelSrc: 'assets/models/Padmanabhaswamy_LordVishnu.glb', // Add your .glb model here
                    explanation: 'The sanctum houses Lord Vishnu reclining majestically on Ananta Shesha, a unique 18-foot-long idol viewed through three separate doors, signifying cosmic rest and eternal preservation.',
                    narration: 'Behold the reclining Lord Padmanabha, resting on the mighty serpent Ananta, embodying the eternal protector and preserver of the universe.'
                }
            ]
        },
        {
            id: 'sripuram-golden-temple',
            name: 'Sripuram Golden Temple – Vellore, Tamil Nadu',
            mainExplanation: 'The Sripuram Golden Temple near Vellore, Tamil Nadu, is a modern marvel dedicated to Goddess Mahalakshmi. Built in 2007, the temple is covered with pure gold leaf and surrounded by a star-shaped path symbolizing spiritual journey and harmony.',
            qrCodeImg: 'assets/images/sripuram-qr.png', // Add your QR image here
            submodels: [
                {
                    name: 'Main Temple',
                    modelSrc: 'assets/models/Sripuram_GoldenTemple.glb', // Add your .glb model here
                    explanation: 'The temple structure is entirely covered with gold, set within a vast spiritual park, and accessed through a star-shaped path guiding devotees toward the sanctum of Goddess Mahalakshmi.',
                    narration: 'Glimpse the dazzling Sripuram Golden Temple, a modern marvel shining with divine radiance, guiding devotees through its star-shaped spiritual pathway.'
                },
                {
                    name: 'Sri Mahalakshmi Idol',
                    modelSrc: 'assets/models/Sripuram_ShriMahalakshmi.glb', // Add your .glb model here
                    explanation: 'At the sanctum rests the idol of Goddess Mahalakshmi, adorned with gold and jewels, symbolizing wealth, prosperity, and divine grace.',
                    narration: 'At the heart of Sripuram glows the idol of Sri Mahalakshmi, radiating prosperity, blessings, and divine love to all who seek her grace.'
                }
            ]
        },
        {
            id: 'thousand-pillar-temple',
            name: 'Thousand Pillar Temple – Warangal, Telangana',
            mainExplanation: 'The Thousand Pillar Temple in Warangal, Telangana, built in the 12th century by the Kakatiya dynasty, is dedicated to Lord Shiva, Vishnu, and Surya. It is renowned for its richly carved thousand pillars, star-shaped design, and intricate stone sculptures.',
            qrCodeImg: 'assets/images/thousand_pillar.jpg', // Add your QR image here
            submodels: [
                {
                    name: 'Main Temple',
                    modelSrc: 'assets/models/1000Pillar-temple.glb', // Add your .glb model here
                    explanation: 'The main temple showcases a star-shaped architectural plan with richly decorated pillars, three shrines dedicated to Shiva, Vishnu, and Surya, and finely detailed stone carvings depicting divine themes.',
                    narration: 'Enter the Thousand Pillar Temple of Warangal, where star-shaped design and a forest of carved pillars echo the artistry and devotion of the Kakatiya dynasty.'
                }
            ]
        }
    ];

    // --- GLOBAL ELEMENTS & SPEECH SYNTHESIS SETUP ---
    const menuButton = document.getElementById('menu-button');
    const dropdown = document.getElementById('heritage-dropdown');
    const mainContent = document.getElementById('main-content');
    const siteTemplate = document.getElementById('heritage-site-template');
    const synth = window.speechSynthesis;
    let currentUtterance = null;

    // --- NAVIGATION ---
    function populateDropdown() {
        dropdown.innerHTML = '<a href="/">Home</a>';
        const sortedData = [...heritageData].sort((a, b) => a.name.localeCompare(b.name));
        sortedData.forEach(site => {
            const link = document.createElement('a');
            link.href = `?site=${site.id}`;
            link.textContent = site.name;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.history.pushState({siteId: site.id}, site.name, `?site=${site.id}`);
                loadPageContent(site.id);
                dropdown.classList.remove('show');
            });
            dropdown.appendChild(link);
        });
    }

    menuButton.addEventListener('click', () => dropdown.classList.toggle('show'));
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#menu-button')) { dropdown.classList.remove('show'); }
    });

    // --- PAGE LOADING LOGIC ---
    function loadPageContent(siteId) {
        synth.cancel();
        if (!siteId) { window.location.href = window.location.pathname; return; }
        const siteData = heritageData.find(site => site.id === siteId);
        if (!siteData) { mainContent.innerHTML = '<h2>Heritage site not found.</h2>'; return; }

        document.title = `${siteData.name} | INNOVEDA`;
        const templateNode = siteTemplate.content.cloneNode(true);
        mainContent.innerHTML = '';
        mainContent.appendChild(templateNode);
        
        document.getElementById('site-name').textContent = siteData.name;
        document.getElementById('main-explanation').textContent = siteData.mainExplanation;
        document.getElementById('qr-code-img').src = siteData.qrCodeImg || 'assets/images/dummy-qr.png';

        const submodelButtonsContainer = document.getElementById('submodel-buttons');
        submodelButtonsContainer.innerHTML = '';
        siteData.submodels.forEach((submodel, index) => {
            const button = document.createElement('button');
            button.className = 'submodel-btn';
            button.textContent = submodel.name;
            button.dataset.index = index;
            submodelButtonsContainer.appendChild(button);
        });
        
        attachHeritagePageListeners(siteData);
        selectSubmodel(siteData, 0);
    }
    
    // --- EVENT LISTENERS FOR HERITAGE PAGE ---
    function attachHeritagePageListeners(siteData) {
        document.querySelectorAll('.submodel-btn').forEach(button => {
            button.addEventListener('click', () => selectSubmodel(siteData, parseInt(button.dataset.index)));
        });

        const audioBtn = document.getElementById('audio-toggle-btn');
        audioBtn.addEventListener('click', () => {
            const activeBtn = document.querySelector('.submodel-btn.active');
            if (!activeBtn) return;
            const narrationText = siteData.submodels[parseInt(activeBtn.dataset.index)].narration;
            if (synth.speaking) { synth.cancel(); } 
            else if (narrationText) {
                currentUtterance = new SpeechSynthesisUtterance(narrationText);
                currentUtterance.onstart = () => { audioBtn.textContent = '⏹️ Stop Narration'; };
                currentUtterance.onend = () => { audioBtn.textContent = '🔊 Play Narration'; };
                synth.speak(currentUtterance);
            }
        });

        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const viewerSection = document.getElementById('viewer-section');
        fullscreenBtn.addEventListener('click', () => {
            viewerSection.classList.toggle('fullscreen');
            fullscreenBtn.textContent = viewerSection.classList.contains('fullscreen') ? "Exit" : "⛶";
        });

        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        sendBtn.addEventListener('click', () => handleUserQuery(siteData));
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleUserQuery(siteData);
        });
    }

    function selectSubmodel(siteData, index) {
        if (!siteData.submodels[index]) return;
        synth.cancel();
        const submodel = siteData.submodels[index];
        document.getElementById('model-viewer-element').src = submodel.modelSrc;
        document.getElementById('submodel-explanation').textContent = submodel.explanation;
        document.getElementById('audio-toggle-btn').textContent = '🔊 Play Narration';
        document.querySelectorAll('.submodel-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    async function handleUserQuery(siteData) {
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');
        const userQuery = chatInput.value.trim();
        if (userQuery === "") return;

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user-message';
        userMessageDiv.textContent = userQuery;
        chatMessages.appendChild(userMessageDiv);
        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'chat-message ai-message';
        aiMessageDiv.textContent = 'Thinking...';
        chatMessages.appendChild(aiMessageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // Attempt to connect to the actual Indian Ethos API Backend
            const response = await fetch('http://127.0.0.1:8000/story', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: userQuery, style: 'informative' })
            });
            
            if (response.ok) {
                const data = await response.json();
                aiMessageDiv.textContent = data.story || "I found some information, but no story could be generated.";
            } else {
                throw new Error("Backend not available");
            }
        } catch (error) {
            // Graceful fallback if backend is offline
            console.warn("AI Backend unreachable, using fallback response:", error);
            setTimeout(() => {
                const aiResponse = `As an AI assistant for the ${siteData.name}, I'm here to help. While my full capabilities are under development, I can tell you that this site is a prime example of ancient Indian architecture. What specific details are you interested in?`;
                aiMessageDiv.textContent = aiResponse;
            }, 1000);
        }
    }

    // --- INITIALIZATION ---
    populateDropdown();
    const initialParams = new URLSearchParams(window.location.search);
    const initialSiteId = initialParams.get('site');
    if (initialSiteId) {
        loadPageContent(initialSiteId);
    }
});