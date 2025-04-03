import antimatterDims from '../assets/antimatter-dimensions-logo.jpg'
import List2 from '../components/list2'
import Table2 from '../components/table2'
import Form2 from '../components/form2'

export default function Hobby2() {
    return (
        <div className="border">
            <img src={antimatterDims} alt="The logo for Antimatter Dimensions" width="640"/>
            <p>Incremental games are a genre of games where you gain money over time or from actions, such as clicks,
                at rates based on your upgrades. The gameplay loop has you continuously gain currency by waiting or
                performing actions, and buy upgrades using the currency.</p>
            <hr />
            <List2></List2>
            <hr />
            <Table2></Table2>
            <hr />
            <Form2></Form2>
        </div>
    );
}