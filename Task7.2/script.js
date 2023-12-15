const { Observable, fromEvent, range } = rxjs;
const {  merge } = rxjs.operators;

let stream1$ = range(1, 100);

stream1$.subscribe(i => {
    isSimple(i);
})

function isSimple(value) {
    if(value < 2) return false;
    for (var i = 2; i < value; i++) {
        if(value % i === 0)
            return false;
    }
    return console.log(value);
}

let stream2$ = new Observable(observer => {
    observer.next('5');
    setTimeout(() => observer.next('4'), 1000);
    setTimeout(() => observer.next('3'), 2000);
    setTimeout(() => observer.next('2'), 3000);
    setTimeout(() => observer.next('1'), 4000);
    setTimeout(() => observer.error('Error'), 5000);
    setTimeout(() => observer.complete(), 5000)
})

stream2$.subscribe({
    next: (i) => { console.log(i) },
    error: (err) => { alert('Время вышло') }
})

let streamBtn1 = fromEvent(document.querySelector('.btn-1'), 'click');
let streamBtn2 = fromEvent(document.querySelector('.btn-2'), 'click');
let streamBtn3 = fromEvent(document.querySelector('.btn-3'), 'click');

streamBtn1.pipe(
    merge(streamBtn2, streamBtn3)
).subscribe((event) => {
    let colors = ['blue', 'black', 'red', 'yellow', 'green', 'gray', 'pink'];
    document.body.style.backgroundColor = colors[Math.round(Math.random()*colors.length)];
})

