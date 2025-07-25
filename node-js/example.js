// index.js

const { Ollamanode } = require('./ollamanode');

(async () => {


    const chatter = new Ollamanode({
        model:          'llama3',
        systemPrompt:   'Short and quick answers. Helpful Assistant.'
    });


    console.time("Call total");
    console.time("Call 1");    
    const answer1 = await chatter.send(`Hello! I'm cooper!`);
    console.log('\n\nBot:\n', answer1);
    console.timeEnd("Call 1"); 
    console.time("Call 2");    
    
    const answer2 = await chatter.send('What was my name again?');
    console.log('\n\nBot:\n', answer2);
    console.timeEnd("Call 2"); 
    console.log("=====================")
    console.timeEnd("Call total");
    

    
    
    // Get the history of the current active conversation
    // chatter.getHistory()
    // console.log(chatter.getHistory());





    /*
    console.log(`Frage: ${Q}`);
    await chatter.sendStream(Q, (chunk) => {
        // direct print
        process.stdout.write(chunk); 
    });
    */
    


})();
