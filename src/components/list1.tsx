import '../list.css'
const List1 = (props: {name:string, items:string[]}) => {
    return (
        //made the list component a bit more reusable
        <div>
            <h2>{props.name}</h2>
            <ul id={props.name}>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List1;
