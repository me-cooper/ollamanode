

# ollamanode
Simple Node.JS wrapper to chat with ollama. Remembers conversation. 

## example

Look at https://github.com/me-cooper/ollamanode/blob/main/node-js/example.js


## usage


```javascript
const { Ollamanode } = require('./ollamanode');

const chatter = new Ollamanode({
    model:          'llama3',
    systemPrompt:   'Short and quick answers. Helpful Assistant.'
});
```

Stream
```javascript
await chatter.sendStream(Q, (chunk) => {
	// direct print
    process.stdout.write(chunk); 
});
```

Async
```javascript
const answer1 = await chatter.send('Hello! What are you able to do?');
console.log('Bot:', answer1);
```


## stores conversation

only in current session

```javascript
const answer1 = await chatter.send(`Hello! I'm cooper!`);
console.log('\n\nBot:\n', answer1);
const answer2 = await chatter.send('What was my name again?');
console.log('\n\nBot:\n', answer2);
```

```text
Bot:
 Hi Cooper! Nice to meet you! How can I help you today?


Bot:
 Your name is Cooper!
```

If you restart the node process oder kill the `Ollamanode`, the conversation will be lost. 

> I'm happy to help! However, I don't think we've had a chance to discuss your name yet. Could you please tell me what it is?

