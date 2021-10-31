import { Fragment, useState } from "react";
import axios from "axios";

const RedditMain = () => {
    const [redditData, setRedditData] = useState();

    const onCallRedditClickHandler = () => {
        axios.get("http://localhost:5000/reddit/cache")
        .then(res => {
            setRedditData(res.data);
            console.log(res);
        })
    }

    return (
        <Fragment>
            <button onClick={onCallRedditClickHandler}>Get Cached Reddit submissions</button>
        </Fragment>
    )
};

export default RedditMain;