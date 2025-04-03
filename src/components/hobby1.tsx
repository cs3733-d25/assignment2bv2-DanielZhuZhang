import List1 from './list1';
import Table1 from './table1.tsx'
import Form1 from './form1.tsx'
import flyingCow from '../assets/FlyingCow.jpg';

export default function Hobby1() {
    return (
        <div className="border">
            <List1 name="Types of Flying Cows" items={["Unicorn","European","Orange","Spoiled","Lactose Free"]} />
            <img src={flyingCow} alt="Flying Cow" />
            <p>My primary Hobby is catching flying cows, ever since I was a young child I enjoyed watching my
            dad catching flying Cows. On My 10th birthday I made my first catch, a bull named KingCow.</p>
            <hr />
            <Table1></Table1>
            <hr />
            <Form1></Form1>
        </div>
    );

}
