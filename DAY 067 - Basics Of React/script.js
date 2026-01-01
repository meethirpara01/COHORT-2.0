// let h1 = React.createElement('h1', { id: 'h1', draggable: 'true' }, 'THIS IS AN H1 TAG');
// let h2 = React.createElement('h2', { id: 'h2' }, 'THIS IS AN H2 TAG');

let heading = () => {
    let h1 = React.createElement('h1', { id: 'h1', draggable: 'true' }, 'THIS IS AN H1 TAG');
    let h2 = React.createElement('h2', { id: 'h2' }, 'THIS IS AN H2 TAG');

    return [h1, h2]
}
let div = React.createElement('div', null, "")

let container = document.querySelector("#container");

let root = ReactDOM.createRoot(container);

root.render(heading());