const somethingWillHappen = () => new Promise((resolve, reject) => {
    if( true ) {
        resolve("Hey!");
    
    } else {
        reject("Ups");
    }
});

/*
somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));
    */

const somethingWillHappen2 = () => new Promise((resolve, reject) => {
    if( !true ) {
        setTimeout(() => {
            resolve("Sweet!");
        }, 2000);
    
    } else {
        let err = new Error("An error has occurred!");
        reject(err);
    }
});

/*
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(() => {
        console.log("Process ended");
    });
    */

Promise.all([ somethingWillHappen(), somethingWillHappen2() ])
    .then(response => {
        console.log('Array of results', response);  
    })
    .catch(errors => {
        console.error(errors);
    });