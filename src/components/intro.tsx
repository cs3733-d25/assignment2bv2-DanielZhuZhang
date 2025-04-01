/*const IntroPage = () => {

};
*/



const Welcome = ({name1, name2}:{name1: string, name2: string}) => {
    return (
        <div>
            <p>Names: {name1} and {name2}</p>
            <p>Hello my Name is Daniel Zhang, I'm a CS Major. I'm secretly an assassin for guild of the FlyingDumplings.</p>
        </div>
    );
}

export default Welcome;