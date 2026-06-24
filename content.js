// Set timeout in seconds
timeout = Math.floor((Math.random() * 4 + 1) * 60);

// Send a message to the console
console.log(`Refreshing page in ${timeout}s`);

// Set up the delayed redirect
setTimeout(
 function(){window.location.reload(1);},
 timeout * 1000
);
