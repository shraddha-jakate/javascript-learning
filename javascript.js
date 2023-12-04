var client;

init();

async function init() {
    client = await app.initialized();
    client.events.on("app.activated", renderFeedbackForm);
}

function renderFeedbackForm() {
    const container = document.getElementById("app");
    // You can customize the rendering based on your needs
    // For simplicity, we are replacing the content of the container

    // ... Your existing code for rendering the ticket details could go here ...

    // Now, append the feedback form to the container
    const feedbackForm = document.createElement("div");
    feedbackForm.innerHTML = `
        <h2>Customer Feedback</h2>
        <p>Rate your experience:</p>
        <div>
            <label for="sentiment">Sentiment:</label>
            <select id="sentiment" name="sentiment">
                <option value="0">Very Bad</option>
                <option value="1">Bad</option>
                <option value="2">Average</option>
                <option value="3">Good</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
            </select>
        </div>
        <p>Leave a review:</p>
        <textarea id="review" rows="4" cols="50" placeholder="Write your review here..."></textarea>
        <button onclick="submitFeedback()">Submit</button>
    `;
    container.innerHTML = "";
    container.appendChild(feedbackForm);
}

async function submitFeedback() {
    try {
        const sentiment = document.getElementById("sentiment").value;
        const review = document.getElementById("review").value;

        // You can perform actions to send the sentiment and review to your backend or store it as needed
        console.log("Sentiment:", sentiment);
        console.log("Review:", review);

        // You may also want to update the UI or perform additional actions based on the sentiment and review
    } catch (error
