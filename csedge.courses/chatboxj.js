const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const predefinedAnswers = {
    "What is CSEdge?": "CSEdge is an online internship platform that provides students with the opportunity to gain practical experience in the field of software development. We offer a variety of internship programs designed to help students develop their skills and enhance their employability.",
    "What kind of internship programs does CSEdge offer?": "CSEdge offers a variety of internship programs focused on software development. Our programs are designed to provide practical experience and skill development in various areas of software engineering.",
    "Why should I choose CSEdge for my internship?": "CSEdge internships are designed to help students gain practical experience and develop their skills in software development. We are MSME registered and our programs are AICTE approved, ensuring top-notch quality and relevance.",
    "Are CSEdge internship programs AICTE approved?": "Yes, our internship programs are AICTE approved, ensuring top-notch quality and relevance.",
    "Is CSEdge MSME registered?": "Yes, CSEdge is MSME registered, emphasizing our commitment to quality and continuous learning.",
    "How can I apply for an internship at CSEdge?": "You can apply for an internship at CSEdge by visiting our website and navigating to the internship programs section. Follow the instructions provided to submit your application.",
    "What are the benefits of doing an internship at CSEdge?": "Internships at CSEdge provide practical experience in software development, helping you develop your skills and enhance your employability. Our programs are AICTE approved, ensuring they meet high standards of quality.",
    "How long are the internship programs at CSEdge?": "The duration of our internship programs varies depending on the specific program. Please visit our website for detailed information on each program's duration.",
    "Is there any fee to join the internship programs at CSEdge?": "For detailed information about the fees associated with our internship programs, please visit our website or contact our support team.",
    "Can international students apply for internships at CSEdge?": "Yes, international students are welcome to apply for our internship programs. Please check the specific program details for any additional requirements."
};


const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Check if the message matches a predefined question
    if (predefinedAnswers[userMessage]) {
        setTimeout(() => {
            const incomingChatLi = createChatLi(predefinedAnswers[userMessage], "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    } else {
        setTimeout(() => {
            // Display "Thinking..." message while waiting for the response
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    }
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
