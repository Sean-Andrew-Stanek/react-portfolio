//Local Funct
//let azureFunctionURI = 'http://localhost:7071/api/get_message';

//Azure Funct
let azureFunctionURI =
    'https://portfolio-chat-bot.azurewebsites.net/api/get_message?code=McshsKnkJmUYmpJGjc7-R4Xg0J-xU1pZEmkI1OYIKoVoAzFutZgr8A%3D%3D';

let azureFunctionURI;

try {
    const config = await import('./config.js');
    azureFunctionURI = config.chatbotURI;
} catch (error) {
    console.warn(
        'Failed to load config.js.  Chatbot requires a working function.  See README.md for more details.',
    );
    azureFunctionURI = '';
}

export let isFunction = azureFunctionURI ? azureFunctionURI : false;

/*******************************************/
/*  messages: old messages                 */
/*  new_message: string of newest message  */
/*******************************************/

export const getResponseFromOpenAI = async (messages, new_message) => {
    const jsonPayload = {
        messages: messages,
        new_message: new_message,
        new_message: new_message,
    };

    try {
        const response = await fetch(azureFunctionURI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonPayload),
            body: JSON.stringify(jsonPayload),
        });

        if (!response.ok) {
            throw new Error('Error: ' + response.statusText);
        }

        return await response.json();
    } catch (error) {
        throw new Error('Failed to Fetch');
    }
};
