const log = (message, type = 'info') => {
    const styles = {
        info: 'color: blue; font-weight: bold',
        success: 'color: green; font-weight: bold',
        warning: 'color: orange; font-weight: bold',
        error: 'color: red; font-weight: bold',
    };
    console.log(`%c${message}`, styles[type] || styles.info);
};

const resolveAfter2Seconds = () => {
    log(" Starting slow promise...", 'warning');
    return new Promise(resolve => {
        setTimeout(() => {
            log(" Slow promise resolved.", 'success');
            resolve("slow");
        }, 2000);
    });
};

const resolveAfter1Second = () => {
    log(" Starting fast promise...", 'warning');
    return new Promise(resolve => {
        setTimeout(() => {
            log(" Fast promise resolved.", 'success');
            resolve("fast");
        }, 1000);
    });
};

const sequentialStart = async () => {
    log(" == SEQUENTIAL START ==", 'info');

    const start = performance.now();

    const slow = await resolveAfter2Seconds();
    log(`Result: ${slow}`, 'info');

    const fast = await resolveAfter1Second();
    log(`Result: ${fast}`, 'info');

    const end = performance.now();
    log(` Total time: ${(end - start).toFixed(0)} ms`, 'info');
};

sequentialStart();
