const Table1 = () => {
    return (
        <table className="collapse">
            <caption>Information About Flying Cows</caption>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Rarity</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Unicorn</td>
                <td>Medium High</td>
                <td>Rare</td>
            </tr>
            <tr>
                <td>European</td>
                <td>Very High</td>
                <td>Endangered</td>
            </tr>
            <tr>
                <td>Orange</td>
                <td>Low</td>
                <td>Rare</td>
            </tr>
            <tr>
                <td>Spoiled</td>
                <td>Low</td>
                <td>Very Rare</td>
            </tr>
            <tr>
                <td>Lactose Free</td>
                <td>Medium</td>
                <td>Common</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table1;
