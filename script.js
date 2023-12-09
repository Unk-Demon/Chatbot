async function sendQuery() {
    let prompt = document.getElementById('userInput').value;
    let responseArea = document.getElementById('response');

    const data = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "Eres un asistente virtual"
            },
            {
                role: "user",
                content: prompt
            }
        ]
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        responseArea.innerHTML = result.choices[0].message.content;
    } catch (error) {
        responseArea.innerHTML = 'Error: ' + error;
    }
}
