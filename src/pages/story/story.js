import react from "react";
import { STORY } from "./story.data";

const Story = () => {
    return (
        <div className="story">
            {STORY.map(story => {
                <p key={story.id}>{story.text}</p>
            }
            )}
        </div>
    )
}

export default Story;