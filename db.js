const messages = [
    {
        id: 1,
        text: "Hello, how are you?",
        author: "John",
        timeAdded: new Date()
    },
    {
        id: 2,
        text: "I'm fine, thanks.",
        author: "Jake",
        timeAdded: new Date((Date.now() -  86400000 * 7)) //imitate to be 7 days old
    }
]
export function addMessage(textContent, user){
    return messages.push({
        id: messages.length +1, 
        text: textContent,
        author: user,
        timeAdded: new Date((Date.now() -  86400000 * 6)) //imitate to be 6 days old
    })
}
export function getMessage(id){
    return messages.find(message => message.id === id);
}
export function getAllMessages(){
    return messages;
}