import "./footer.css"

//desestructuración
const desestructuracion = () => {
    let a = 10;
    let b = 20;
    //pasar el avalor de a -> b y el valor de b -> a
    
    //varable temporal
    let temporal = a;
    a = b;
    b = temporal;

    // La desestructuración en JavaScript es una forma 
    // concisa de extraer valores de arrays o propiedades
    // de objetos y asignarlos a variables.
    // el valor de "a" pasa "b"  y viceversa
    [b, a]= [a, b]
    const gryffindor = ["Harry", "Ron", "Neville", "Hermione", "Ginny"];
    /*let protagonista;
    let amigo;
    let amiga;

    protagonista = gryffindor[0];
    amigo = gryffindor[1];
    amiga = gryffindor[3];
    */
    const [protagonista, amigo, , amiga] = gryffindor; // desestructuración de arreglos

    // desestructuración en objetos
    const hadSelector = {
        nombre: "Jen",
        color: "Canela pasión",
        edad: 26,
        origen: "Howarts",
        isMagic: true,
        casas: {
            slytherin: "Astutos y ambiciosos",
            hufflepuff: "Leales y trabajadores",
            revenclaw: "Listos y curiosos",
            gryffindor: "Valientes y atrevidos"
        }
    }
    // obtener el nombre la edad sin desestructuración 
    // const nombre = hadSelector.nombre;
    // const edad = hadSelector.edad;
    
    // con desestruturación ----- los objetos son desordenados, importa la clave 
    //                  para renombrar la variable
    const {edad, nombre, origen:location} = hadSelector;
    console.log(nombre, edad, location); // Jen 26 Howarts
    // obtener el valor de slytherin y asignarla a la variable myHouse
    // const {casas} = hadSelector;
    // const {slytherin:myHouse} = casas; // "Astutos y ambiciosos"
    const { casas:{slytherin:myHouse}} = hadSelector;
    console.log(myHouse)
};
desestructuracion();
const semana8Style = {
    fontSize:"2rem",
    color: "yellow"
};

const semana8PartyStyle = {
    fontSize:"4rem",
    color:"red"
};
        // desestructuracion 
const Footer = ({cohorte:ch}) => {
    return (
        <footer>
            <p style = { {fontSize:"2rem", color:"yellow"} } >CH{ch} - 2025</p>
            <p style={ ch===54? semana8Style : semana8PartyStyle}>Semana 8</p>
            <em className="textFooter">¡Es leviosa, no leviosá!</em>
        </footer>
    );
};

export {Footer};