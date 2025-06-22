
// Nos llega como un objeto el atributo name de app.jsx
const Home = (props) => {

    return (
        <main>
            <h1> Hola {props.name}</h1>
            <h2>Tu casa es {props.howartsHome}</h2>
        </main>
    );
};

export {Home};