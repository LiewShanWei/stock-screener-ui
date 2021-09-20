import { Fragment, useState } from "react";
import axios from "axios";

const Reddit = () => {
    const [redditData, setRedditData] = useState();

    const onCallRedditClickHandler = () => {
        axios.get("http://localhost:5000/reddit")
        .then(res => {
            setRedditData(res.data);
            console.log(res);
        })
    }

    return (
        <Fragment>
            <button onClick={onCallRedditClickHandler}>Call Reddit API</button>
        </Fragment>
    )
};

export default Reddit;