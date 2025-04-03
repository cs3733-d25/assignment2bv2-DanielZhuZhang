export default function Table2() {
    return (
        <div>
            <h2>Incremental Game Suggestion Form</h2>
            <form>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title"/>
                <br/>
                <label htmlFor="timeCost">Time Commitment: </label>
                <input type="text" id="timeCost"/>
                <br/>
                <br/>
                <input type="checkbox" id="active"/>
                <label htmlFor="active">Active Progression</label>
                <br/>
                <input type="checkbox" id="multiplayer"/>
                <label htmlFor="multiplayer">Multi Player</label>
                <br/>
                <input type="checkbox" id="completable"/>
                <label htmlFor="completable">Completable (The game has an end)</label>
                <br/>
                <br/>
                <input type="radio" id="incremental" name="gameType"/>
                <label htmlFor="incremental">Incremental</label>
                <br/>
                <input type="radio" id="idle" name="gameType"/>
                <label htmlFor="idle">Idle</label>
                <br/>
                <input type="radio" id="clicker" name="gameType"/>
                <label htmlFor="clicker">Clicker</label>
                <br/>
                <br/>
                <label htmlFor="comments">Comments: </label>
                <textarea id="comments"></textarea>
                <br/>
                <br/>
                <label htmlFor="platform">Platform: </label>
                <select id="platform">
                    <option value="steam">Steam</option>
                    <option value="epic">Epic Games</option>
                    <option value="website">Website</option>
                    <option value="mobile">Mobile</option>
                    <option value="other">Other</option>
                </select>
                <br/>
                <br/>
                <button>Submit</button>
                <link rel="stylesheet" type="text/css" href="public/mystyles.css"/>
            </form>
        </div>
    )
}