 /**
  * Returns throttled function func, which may only be executed every ms milliseconds.
  * @param {function} func function to be throttled
  * @param {number} ms "cooldown" time for function throttle
  * @returns {function} Throttled function
  * @example
  * // Logs "I can only be printed every 1 second!"
  * function myFunction = throttle((string)=>{console.log(string)}, 1000);
  * myfunction("I can only be printed every 1 second!");
  * myfunction("I won't get printed!");
  */
export function throttle(this: Function, func: Function, ms: number) {
    let timestamp: number;
    return function(this: any, ...args: any[]) {
        let now: number = Date.now();
        if(timestamp === undefined || now - timestamp > ms) {
            timestamp = now;
            func.apply(this,args);
        }
    };
}

 /**
  * Returns debounced function func, which will only execute ms milliseconds after its last function call.
  * @param {function} func function to be debounced
  * @param {number} ms length of function debouncement
  * @returns {function} Debounced function
  * @example
  * // Logs "I will print once, 1 second after I was called!"
  * function myFunction = debounce((string)=>{console.log(string)}, 1000);
  * myfunction("I won't get printed!");
  * myfunction("I will print once, 1 second after I was called!");
  */
export function debounce(func: Function, ms: number) {
    let timer: NodeJS.Timeout
    return function(this: any, ...args: any[]) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null!;
            func.apply(this,args);
        }, ms);
    };
}