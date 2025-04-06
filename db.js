const messages = [
    {
        "id": 1,
        "text": "Hello, how are you?",
        "author": "John",
         added: new Date()
    },
    {
        "id": 2,
        "text": "I'm fine, thanks.",
        "author": "Jake",
        "added": new Date()
    }
]
export function addMessage(textContent, user){
    return messages.push({
        id: messages.length +1, 
        text: textContent,
        user: user,
        added: new Date()
    })
}
export function getMessage(id){
    return messages.find(message => message.id === id);
}
export function getAllMessages(){
    return messages;
}