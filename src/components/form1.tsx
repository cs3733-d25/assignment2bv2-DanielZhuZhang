const Form1 = () => {
    return (
        <form>
            <label htmlFor="fullname">Full Name:</label><br/>
            <input type="text" id="fullname" name="fullname" placeholder="Ex. Phil Bill" required/>
            <br/><br/>

            <label htmlFor="street">Street Address:</label><br/>
            <input type="text" id="street" name="street" placeholder="Ex. 109 Leo Dr." required/>
            <br/><br/>

            <label htmlFor="city">City:</label><br/>
            <input type="text" id="city" name="city" placeholder="Ex. Springfield" required/>
            <br/><br/>

            <label htmlFor="state">State/Province:</label><br/>
            <input type="text" id="state" name="state" placeholder="Ex. Illinois" required/>
            <br/><br/>

            <label htmlFor="zip">ZIP/Postal Code:</label><br/>
            <input type="text" id="zip" name="zip" placeholder="Ex. 62704" required/>
            <br/><br/>

            <label htmlFor="country">Country:</label><br/>
            <input type="text" id="country" name="country" placeholder="Ex. United States" required/>
            <br/>

            <h4>Choose Your Cows To Order</h4>

            <input type="number" id="Unicorn" name="Unicorn" min="0" max="10"/>
            <label htmlFor="Unicorn">Number of Unicorns</label><br/>

            <input type="number" id="European" name="European" min="0" max="10"/>
            <label htmlFor="European">Number of European</label><br/>

            <input type="number" id="Orange" name="Orange" min="0" max="10"/>
            <label htmlFor="Orange">Number of Orange</label><br/>

            <input type="number" id="Spoiled" name="Spoiled" min="0" max="10"/>
            <label htmlFor="Spoiled">Number of Spoiled</label><br/>

            <input type="number" id="Lactose Free" name="Lactose Free" min="0" max="10"/>
            <label htmlFor="Lactose Free">Number of Lactose Free</label><br/>

            <h4>Customize Your Order</h4>
            <input type="checkbox" id="gift" name="gift"/>
            <label htmlFor="gift">Gift Wrap</label>

            <br/>
            <br/>

            <input type="checkbox" id="fast" name="fast"/>
            <label htmlFor="fast">Speedy Delivery (20% markup)</label>
            <br/>
            <br/>

            <input type="checkbox" id="clotheCows" name="clothe"/>
            <label htmlFor="clotheCows">Clothe the cows? (10% markup)</label>

            <div className="clothing-options">
                <label htmlFor="clothing">Choose clothing:</label><br/>
                <select id="clothing" name="clothing">
                    <option value="hat">Cowboy Hat</option>
                    <option value="scarf">Scarf</option>
                    <option value="sweater">Wool Sweater</option>
                    <option value="tutu">Tutu</option>
                </select>
            </div>

            <br/>
            <br/>

            <label htmlFor="other">Other Requests:</label><br/>
            <textarea id="other" name="other" rows={5} cols={40}

                      placeholder="Ex. Leave cows in the shed...."></textarea><br/><br/>
            <br/>

            <h4>Select A Warranty Plan</h4>

            <input type="radio" id="none" name="No"/>
            <label htmlFor="none">No Warranty</label><br/>
            <input type="radio" id="3 month" name="No"/>
            <label htmlFor="3 month">3-month Warranty (10% markup)</label><br/>
            <input type="radio" id="6 month" name="No"/>
            <label htmlFor="6 month">6-month Warrant (20% markup)</label><br/>
            <br/>
            <br/>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form1;